import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import { useImmer } from "use-immer";
import Script from "next/script";
import moment from 'moment'
import Razorpay from 'razorpay';
//components
import PrimaryButton from '@/components/common/primaryButton/primaryButton'
import Header from '@/components/common/header/header'
import BillInfo from '@/components/pageComponents/gamePayJoin/billInfo/BillInfo'
import RefundPolicy from '@/components/pageComponents/gamePayJoin/refunPolicy/refundPolicy'
import CancellationPolicy from '@/components/pageComponents/gamePayJoin/cancellationPolicy/cancellationPolicy'
import TurfCoin from '@/components/pageComponents/gamePayJoin/turfCoin/turfCoin'
import GameCard from '@/components/pageComponents/gamePayJoin/gameCard/gameCard'
import ModalSection from '@/components/pageComponents/gamePayJoin/modalSection/modalSection';
import PayJoinShimmer from '@/components/pageComponents/gamePayJoin/payJoinShimmer/payJoinShimmer';
//styles
import styles from './gamePayJoin.module.scss'
//types
import { GameType } from '../game/type'
import { AppConfigType } from '@/types/appConfigType'
import { ModalType } from '@/components/pageComponents/gamePayJoin/modalSection/types';
//api
import { GetBookingDataResponse, getBookingData, GetBookingDataBody } from '@/apis/getBookingData'
import { gameStatus } from '@/apis/gameStatus'
import { FetchpAppConfigBody, fetchpAppConfig } from '@/apis/fetchAppConfig'
import { fetchUserTurfCoin } from '@/apis/fetchUserTurfCoin'
import { fetchGame } from '@/apis/fetchGame'
import { refundTheMoney } from '@/apis/refundTheMoney'
import { checkAndJoinTheGame } from '@/apis/checkAndJoinTheGame'
import { deleteBlockedSpot } from '@/apis/deleteBlockedSpot'
import { payToJoinTheGame } from '@/apis/payToJoinTheGame'
import { updateGame, updateGameResponse } from '@/apis/updateGame'
import { createRazorpayOrder, createRazorpayOrderBody, createRazorpayOrderResponse } from '@/apis/createRazorpayOrder'
//context
import { AppContext } from '@/providers/app'
//utils
import { roundOff } from '@/helper/roundOdd'
import { indianRupeeComma } from '@/helper/indianRupeeComma'
import { naiveRound } from '@/helper/naiveRound'
import { requestToJoinWaitlist } from '@/apis/requestToJoinWaitlist';
import Loading from '@/components/common/loading/loading';

declare global {
    interface Window {
        Razorpay: any
    }
}


enum LoadingType {
    FETCH_DATA,
    PAY,
    NONE
}

const GamePayJoin = () => {

    const router = useRouter();
    let token = Cookies.get('ACCESS_TOKEN');
    let venueID = Cookies.get('VENUE_ID');
    const { actions, user, gameData } = useContext(AppContext);

    const [bookingData, setBookingData] = useImmer<any | undefined>(undefined);
    const [appConfig, setConfig] = useImmer<AppConfigType | undefined>(undefined);
    const [coinApplied, setCoin] = useState<boolean>(false);
    const [userCoins, setCoins] = useState<number>(0);
    const [loading, setLoading] = useState<LoadingType>(LoadingType.NONE);
    const [order_id, setOrderId] = useState('');
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);

    console.log('bookingData', bookingData)

    const getPayToJoinDetails = useCallback(async () => {
        if (router?.query.gameId && token && venueID) {
            setLoading(LoadingType.FETCH_DATA)
            try {
                let body: GetBookingDataBody = {
                    booking_id: router?.query.gameId as string,
                }

                let body1: FetchpAppConfigBody = {
                    venue_id: venueID
                }

                let [app_config, booking_data, user_coins] = await Promise.all([
                    fetchpAppConfig(token, body1),
                    getBookingData(token, body),
                    fetchUserTurfCoin(token),
                ]);
                setBookingData(booking_data);
                setConfig(app_config);
                setCoins(user_coins);
                setTimeout(() => {
                    setLoading(LoadingType.NONE)
                }, 700)

            } catch (e) {
                setLoading(LoadingType.NONE)
                console.log('error', e);
            }
        }

    }, [router?.query.gameId, setBookingData, setConfig, token, venueID]);

    useEffect(() => {
        getPayToJoinDetails()
    }, [getPayToJoinDetails])

    const amount_to_pay_final = useMemo(() => {
        if (gameData) {
            return roundOff(gameData?.cost_per_head + (gameData?.cost_per_head * (appConfig?.service_fee ? appConfig?.service_fee : 0.02))) / gameData?.limit;
        } else {
            return 0
        }

    }, [appConfig?.service_fee, gameData]);

    const checkCoins = useCallback((total: number, coin: number) => {
        if (total >= coin) {
            return [roundOff(total - coin), 0];
        } else return [0, roundOff(coin - total)];
    }, []);

    const checkCoinsUsed = useCallback((total: number, coin: number) => {
        if (total >= coin) {
            return coin;
        } else return total;
    }, []);

    const applied_coins = useMemo(() => {
        if (amount_to_pay_final) {
            return coinApplied ? checkCoinsUsed(amount_to_pay_final, userCoins) : 0;
        } else {
            return 0;
        }


    }, [amount_to_pay_final, checkCoinsUsed, coinApplied, userCoins])

    const with_coins_paying_amount = useMemo(() => {
        return coinApplied
            ? checkCoins(amount_to_pay_final, userCoins)[0]
            : roundOff(amount_to_pay_final);
    }, [amount_to_pay_final, checkCoins, coinApplied, userCoins])

    const share_per_person = useMemo(() => {
        if (gameData) {
            return gameData?.cost_per_head / gameData?.limit;
        } else {
            return 0;
        }
    }, [gameData]);

    const share_service_fee = useMemo(() => {
        return roundOff(
            share_per_person * (appConfig?.service_fee ? appConfig?.service_fee : 0.02),
        )
    }, [appConfig?.service_fee, share_per_person]);

    const successPage = useCallback(() => {
        Cookies.remove('LAST_ROUTE');
        Cookies.remove('GAME_ID');
        Cookies.remove('VENUE_ID');
        actions.setGameData(undefined);
        router.replace(`/payment-success/${gameData?._id}`)
    }, [actions, gameData?._id, router])


    const onSuccess = useCallback(async (response: any, updatedGameData: updateGameResponse, finalAmount: number) => {

        if (!token) return;
        if (!appConfig) return;
        if (!gameData) return;

        let time1 = moment(updatedGameData?.data?.data?.game_payment?.created_at);
        let time2 = moment();

        let fetch_game_status = await fetchGame(token, updatedGameData?.data?.data?.game_data?._id);
        console.log('fetch_game_status?.users', fetch_game_status?.users)
        let is_user_is_joined = fetch_game_status?.users?.some(
            key => key as unknown as string === user?._id,
        );

        if (is_user_is_joined) {
            setLoading(LoadingType.NONE)

            successPage()
            // dispatch(commonFaceBookevent('Purchase', { "Game Name": game?.name, "Venue": game?.venue?.venue?.name, "Area": game?.venue?.venue?.area, "Sport": game?.sport_name, "Game ID": game?._id, "Game Date": moment(game?.start_time).format('MMMM Do, YYYY'), "Game Time": moment(game?.start_time).format('h:mm a') + " - " + moment(game?.end_time).format('h:mm a'), "Amount": with_coins_paying_amount, "Pay and Join": true }))
        } else if (fetch_game_status.users.length == fetch_game_status.limit) {

            setModalType(ModalType.SPOT_UNAVAILABE);
            // setActive(true);
            // dispatch(turnOffPayToJoinDetails())
            // dispatch(refundTheMoney(data.razorpay_payment_id));
            const res = await refundTheMoney(token, { payment_id: response.razorpay_payment_id })
            setLoading(LoadingType.NONE)
        } else if (time2.diff(time1, 'seconds') < appConfig?.pay_to_join_block_time) {

            const join_the_game = await
                payToJoinTheGame(token, {
                    game: gameData?._id,
                    user_id: user?._id,
                    booking_id: gameData?.booking_id,
                    payment_status: 'paid',
                    payment_id: response?.razorpay_payment_id,
                    _id: updatedGameData?.data?.data?.game_payment?._id,
                    razorpay_amount: finalAmount,
                });
            setLoading(LoadingType.NONE)
            successPage()
            // dispatch(commonFaceBookevent('Purchase', { "Game Name": game?.name, "Venue": game?.venue?.venue?.name, "Area": game?.venue?.venue?.area, "Sport": game?.sport_name, "Game ID": game?._id, "Game Date": moment(game?.start_time).format('MMMM Do, YYYY'), "Game Time": moment(game?.start_time).format('h:mm a') + " - " + moment(game?.end_time).format('h:mm a'), "Amount": with_coins_paying_amount, "Pay and Join": true }))
        } else {

            let join_the_game = await
                checkAndJoinTheGame(token, {
                    game: gameData?._id,
                    user_id: user._id,
                    booking_id: gameData?.booking_id,
                    payment_status: 'paid',
                    payment_id: response?.razorpay_payment_id,
                    _id: updatedGameData?.data?.data?.game_payment?._id,
                    razorpay_amount: finalAmount,
                });

            if (join_the_game.message == 'game is full') {

                setModalType(ModalType.TIME_OUT);
                // setSessionTimeOut(true);
                setLoading(LoadingType.NONE)
            } else {

                setLoading(LoadingType.NONE)
                successPage()
                // dispatch(commonFaceBookevent('Purchase', { "Game Name": game?.name, "Venue": game?.venue?.venue?.name, "Area": game?.venue?.venue?.area, "Sport": game?.sport_name, "Game ID": game?._id, "Game Date": moment(game?.start_time).format('MMMM Do, YYYY'), "Game Time": moment(game?.start_time).format('h:mm a') + " - " + moment(game?.end_time).format('h:mm a'), "Amount": with_coins_paying_amount, "Pay and Join": true }))
            }

        }

    }, [appConfig, gameData, successPage, token, user._id]);

    const onFailure = useCallback(async (updatedGameData: updateGameResponse) => {
        if (token && gameData) {
            let delete_the_spot = await
                deleteBlockedSpot(token, {
                    game: gameData?._id,
                    _id: updatedGameData?.data?.data?.game_payment?._id,
                });


            setLoading(LoadingType.NONE)
            setModalType(ModalType.RETRY);
            //   setRetry(true);
            //   dispatch(storeMixPanelEvent('Game Joining - Razorpay Cancelled', { 'Game name': game?.name, 'Razorpay Order ID': razorpay_order?.id }))
        }

    }, [gameData, token]);



    const checkOut = useCallback(async (with_coins_paying_amount: number, paying_amount: number) => {
        setLoading(LoadingType.PAY)
        if (!token || !gameData) return;
        try {
            const latestGameStatus = await gameStatus(token, gameData?._id);
            let is_it_full = (latestGameStatus.users.length + (latestGameStatus.spots_blocked ? latestGameStatus.spots_blocked : 0) + (latestGameStatus?.offline_users.length || 0)) == latestGameStatus.limit
            if (latestGameStatus?.users?.length == 0) {
                setLoading(LoadingType.NONE)
                // props?.navigation?.navigate('GameDetails', {
                //   gameId: latestGameStatus?._id,
                //   game_full: false,
                // });
            } else {
                if (!is_it_full) {
                    if (with_coins_paying_amount == 0) {
                        let res =
                            payToJoinTheGame(token, {
                                game: gameData?._id,
                                user_id: user._id,
                                booking_id: gameData?.booking_id,
                                payment_status: 'paid',
                                payment_id: 'turf_coin',
                                razorpay_amount: 0,
                                service_fee: share_service_fee,
                                refund_status: false,
                                order_id: '',
                                amount: with_coins_paying_amount,
                                coins: naiveRound(paying_amount - with_coins_paying_amount),
                                order_amount: paying_amount,
                            });

                        setLoading(LoadingType.NONE)
                        successPage()
                        // dispatch(commonFaceBookevent('Purchase', { "Game Name": game?.name, "Venue": game?.venue?.venue?.name, "Area": game?.venue?.venue?.area, "Sport": game?.sport_name, "Game ID": game?._id, "Game Date": moment(game?.start_time).format('MMMM Do, YYYY'), "Game Time": moment(game?.start_time).format('h:mm a') + " - " + moment(game?.end_time).format('h:mm a'), "Amount": with_coins_paying_amount, "Pay and Join": true }))

                    } else {

                        let order_amount = with_coins_paying_amount * 100;
                        let final_amount = Number.isInteger(order_amount)
                            ? order_amount
                            : naiveRound(order_amount);

                        const orderOptions: createRazorpayOrderBody = {
                            amount: final_amount,
                            currency: 'INR',
                            notes: {
                                game_id: gameData?._id,
                                booking_id: gameData?.booking_id,
                                type: 'pay_to_join_game',
                                user_id: user._id,
                            },
                        };

                        const razorpayOrder: createRazorpayOrderResponse = await createRazorpayOrder(token, orderOptions)


                        // dispatch(storeMixPanelEvent('Game Joining - Razorpay Order ID Created', { 'Game name': game?.name, 'Razorpay Order ID': razorpay_order?.id }))
                        setOrderId(razorpayOrder.id);

                        let updatedGameData: updateGameResponse = await updateGame(token, {
                            game: gameData?._id,
                            user_id: user._id,
                            booking_id: gameData?.booking_id,
                            service_fee: share_service_fee,
                            payment_status: 'blocked',
                            refund_status: false,
                            order_id: razorpayOrder.id,
                            amount: with_coins_paying_amount,
                            coins: naiveRound(paying_amount - with_coins_paying_amount),
                            order_amount: paying_amount,
                        });


                        if (updatedGameData?.data?.message !== 'game is full') {
                            const options = {
                                retry: false,
                                description: 'pay to join',
                                image: 'https://turftown.in/assets/images/venues/1575480149416.png',
                                currency: 'INR',
                                key: process.env.RAZOR_PAY_KEY,
                                amount: final_amount,
                                name: 'Turf Town',
                                order_id: razorpayOrder.id,
                                prefill: {
                                    email: user?.email,
                                    contact: user?.phone,
                                    name: user?.name ? user?.name : user?.handle,
                                },
                                theme: { color: '#0956E6' },
                                handler: function (response: any) {
                                    onSuccess(response, updatedGameData, final_amount)
                                    // handle payment success
                                },
                                modal: {
                                    escape: false,
                                    ondismiss: function () {
                                        onFailure(updatedGameData)

                                    }
                                }
                            };

                            const paymentObject = new window.Razorpay(options);
                            paymentObject.open();
                            paymentObject.on("payment.failed", function (response: any) {
                                // paymentObject.close();

                                onFailure(updatedGameData)
                                // alert("Payment failed. Please try again. Contact support for help");
                            });
                        } else {
                            setLoading(LoadingType.NONE)
                            setModalType(ModalType.GAME_FULL);
                        }
                    }

                } else {
                    setLoading(LoadingType.NONE)
                    setModalType(ModalType.GAME_FULL);
                }
            }
        } catch (e) {
            setLoading(LoadingType.NONE)
            console.log('status error');
        }
    }, [gameData, onFailure, onSuccess, share_service_fee, successPage, token, user._id, user?.email, user?.handle, user?.name, user?.phone]);


    const joinWaitList = useCallback(async () => {
        if (token && gameData?._id) {
            try {
                setLoading(LoadingType.PAY)
                const res = await requestToJoinWaitlist(token, gameData?._id);
                setLoading(LoadingType.NONE)
            } catch (e) {
                setLoading(LoadingType.NONE)
                console.log('error', e);
            }
        }
        //  props.navigation.goBack() go back;
    }, [gameData?._id, token]);

    const closeModal = useCallback(() => { setModalType(ModalType.NONE) }, []);

    const onTrack = useCallback(() => {
        closeModal();
        // props.navigation.navigate('RefundDetailsScreen', { order_id: order_id, from: 'others' })
    }, [closeModal])

    const onAccept = useCallback(() => {
        switch (modalType) {
            case ModalType.GAME_FULL:
                setModalType(ModalType.NONE)
                setTimeout(() => {
                    setModalType(ModalType.JOIN_WAIT_LIST)
                }, 100);
                break;
            case ModalType.RETRY:
                setModalType(ModalType.NONE)
                checkOut(with_coins_paying_amount, amount_to_pay_final);
                break;
            case ModalType.TIME_OUT:
                closeModal();
                break;
            case ModalType.SPOT_UNAVAILABE:
                closeModal();
                break;
            case ModalType.SERVICE_FEE:
                closeModal();
                break;
            case ModalType.JOIN_WAIT_LIST:
                closeModal();
                joinWaitList();
                break;

            default:
                break;
        }
    }, [amount_to_pay_final, checkOut, closeModal, joinWaitList, modalType, with_coins_paying_amount])

    const renderComponent = useCallback(() => {
        if (loading === LoadingType.FETCH_DATA) {
            return <PayJoinShimmer />
        } else {
            return (
                <>
                    {gameData && (<div className={classNames(styles['ph-16'])}>
                        <div className={classNames(styles['borderBottom'], styles['pt-36'], styles['pb-48'])}>
                            <GameCard title={gameData?.name} subTitle={gameData?.description} imageUrl={gameData?.image} sportName={gameData?.sport_name} />
                        </div>
                        <BillInfo costPerHead={gameData?.cost_per_head} gameLimit={gameData?.limit} serviceFee={appConfig?.service_fee ? appConfig?.service_fee : 0} setServiceFeeToggle={() => { setModalType(ModalType.SERVICE_FEE); }} />
                        <RefundPolicy />
                        <CancellationPolicy safe_to_leave={appConfig?.service_fee ? appConfig?.service_fee : 0} game={gameData} />
                        {userCoins > 1 && (
                            <TurfCoin
                                isEnabled={coinApplied}
                                toggleSwitch={() => setCoin(!coinApplied)}
                                coins={userCoins}
                                totalAvailableCoins={!coinApplied ? userCoins : applied_coins}
                            />
                        )}
                        <div className={classNames(styles['row'], styles['align-center'], styles['justify-space-between'], styles['pt-36'], styles['pb-36'])}>
                            <div className={classNames(styles['row'], styles['align-center'])}>
                                <div className={classNames(styles['mr-16'], styles.grey_button)}><p className={classNames(styles['card_text'], styles['white1'])}>Your share</p></div>
                                <p className={classNames(styles['card_text'], styles['white1'], styles['mr-10'])}>{indianRupeeComma(with_coins_paying_amount)}</p>
                                <p className={classNames(styles['card_text'], styles['white1'], styles['line-through'])}>{indianRupeeComma(roundOff(amount_to_pay_final))}</p>
                            </div>
                            <div className={styles.button_container}>
                                <PrimaryButton text='Pay' rightIcon={<Image src={'/icons/white_right_arrow.png'} height={14} width={14} alt="arrow" />} onPress={() => {
                                    checkOut(with_coins_paying_amount, amount_to_pay_final)
                                }} />
                            </div>
                        </div>
                        <ModalSection
                            modalType={modalType}
                            onClose={closeModal}
                            onAccept={onAccept}
                            onCancel={closeModal} onTrack={onTrack}
                        />
                    </div>)}
                </>
            )
        }
    }, [amount_to_pay_final, appConfig?.service_fee, applied_coins, checkOut, closeModal, coinApplied, gameData, loading, modalType, onAccept, onTrack, userCoins, with_coins_paying_amount]);

    if (!gameData) return null;

    return (
        <div className={styles.container}>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />

            <Header title={gameData?.name} back={() => { router.push('/home') }} />
            {renderComponent()}
            {loading === LoadingType.PAY && (
                <div className={styles.loading_container}>
                    <Loading />
                </div>
            )}
        </div>
    )
}

export default GamePayJoin