import React, { useCallback, useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import moment from 'moment';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import classNames from 'classnames';
//styles
import styles from './GamesToJoin.module.scss'
//component
import JoinGameCard from '../JoinGameCard/JoinGameCard';
import PrimaryButton from '@/components/common/primaryButton/primaryButton';
//type
import { GameType } from '@/routes/game/type';
import { ButtonType } from '@/components/common/followButton/types';
//api
import { mergedFeed, mergedFeedBody } from '@/apis/mergedFeed';
//utlis
import { getDates } from '../../../../helper/getDates';
//context
import { AppContext } from '@/providers/app';


const GamesToJoin = () => {

    const router = useRouter()

    const { actions } = useContext(AppContext);

    const [games, setGames] = useState<any[]>([])

    const getGames = useCallback(async () => {
        try {
            let body: mergedFeedBody = {
                lastPost: null,
                skip: 0,
                public_skip: 0,
                limit: 10,
                date: null,
                sport: null,
                time: null
            }
            const response = await mergedFeed(body);
            if (response?.feed?.data) {
                setGames(response?.feed?.data)
            }

            console.log('GamesToJoin response', response)
        } catch (e) {
            console.log('GamesToJoin getGames error')
        }
    }, [])

    useEffect(() => {
        getGames();
    }, [getGames])



    const renderItem = useCallback((imageUrl: string, title: string, subTitle: string, game: GameType) => {
        return (
            <div className={styles['mb-64']}>
                <div className={styles.card}>
                    <div className={classNames(styles['row'], styles['align-center'])}>
                        <Image className={styles.image} height={42} width={42} src={imageUrl} alt={"player Image"} />
                        <p className={classNames(styles['title'], styles['lh-24'])}>{title}</p>
                    </div>
                    <div className={styles.capsule_conatiner}>
                        <span className={classNames(styles['sub_3'], styles['white10'])}>{getDates(game?.start_time)}</span>
                    </div>
                </div>
                <JoinGameCard
                    gameName={game?.name}
                    venueImage={game?.venue?.venue?.venue_display_picture}
                    sportName={game?.sport_name}
                    type={game?.type}
                    day={moment(game?.start_time).format("ddd")}
                    date={moment(game?.start_time).format("MMM Do")}
                    time={moment(game?.start_time).format("h:mm a") +
                        " - " +
                        moment(game?.end_time).format("h:mm a")}
                    venueName={game?.venue?.venue?.name}
                    venueArea={game?.venue?.venue?.area}
                    numberOfUsers={game.users.length}
                    limit={game.limit}
                    cost_per_head={game?.cost_per_head}
                    booking_status={game?.booking_status}
                />
                <div className={classNames(styles['row'], styles['align-center'], styles['mt-20'])}>
                    <div className={classNames(styles.w_64, styles['mr-8'])}>
                        <PrimaryButton rightIcon={<Image width={20} height={20} alt={'share game'} src={'/icons/shoutout_white_icon.png'} />} buttonType={ButtonType.BORDER} onPress={() => { }} />
                    </div>
                    <div className={classNames(styles.w_128, styles['mr-8'])}>
                        <PrimaryButton text='Pay & Join' buttonType={ButtonType.DARK} onPress={() => {
                            actions.setGameData(game);
                            Cookies.set("VENUE_ID", game?.venue?._id);
                            router.push(`/gamepayjoin/${game?._id}`)
                        }} />
                    </div>
                    <div className={styles.w_64}>
                        <PrimaryButton rightIcon={<Image width={15} height={15} alt={'share game'} src={'/icons/share_game_icon.png'} />} buttonType={ButtonType.BORDER} onPress={() => { }} />
                    </div>
                </div>
            </div>
        )
    }, [actions, router])

    const renderList = useCallback(() => {
        return (
            <div>
                {games.map((game) => (
                    <>{
                        renderItem(game?.game?.image, game?.game?.created_by, '', game?.game)
                    }</>
                ))}
            </div>
        )
    }, [games, renderItem])

    return (
        <div className={styles.container}>
            <div className={classNames(styles['row'], styles['align-center'])}>
                <Image width={19} height={20} alt={'calendar'} src={'/icons/run_icon.png'} />
                <p className={classNames(styles['title_1'], styles['white1'], styles['ml-11'])}>Games to join</p>
            </div>
            <p className={classNames(styles['sub_3'], styles['grey'], styles['mb-32'])}>From your nieghbourhood</p>

            {/* <div className={styles.subContainer}>
                <div className={styles.capsule}>
                    <p className={classNames(styles['caption_2'], styles['white10'])}>From your friends  🌀</p>
                </div>
            </div> */}
            {renderList()}
            {games.length === 0 && (
                <div className={classNames(styles.no_game_card)}>
                    <p className={classNames(styles['title_2'], styles['white1'], styles['mb-16'])}>No games to join!</p>
                    <p className={classNames(styles['sub_3'], styles['grey'], styles['align_text_center'])}>This wont be empty for long. Follow friends & join clubs to start seeing games.</p>
                </div>
            )}
        </div>
    )
}

export default GamesToJoin;