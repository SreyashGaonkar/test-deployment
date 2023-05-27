import { useCallback, useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import useDetectKeyboardOpen from "use-detect-keyboard-open";
//styles
import styles from './otpPage.module.scss';
//component
import Header from '@/components/common/header/header';
import IconButton from '@/components/common/iconButton/iconButton';
//api
import { VerifyOtp, VerifyOtpBody } from '@/apis/verifyOtp/verifyOtp';
import { VerifyOtpNewUser, VerifyOtpResponse } from '@/apis/verifyOtpNewUser/verifyOtpNewUser';
//types
import { OtpPageProps } from './types';
import { ErrorResponse } from '@/instance/instance';
//api
import { ReSendOtpBody, resendOtp } from '@/apis/resendOtp/resendOtp';
//context
import { AppContext } from '@/providers/app';
import Input from '@/components/common/input/input';
import { NotificationType } from '@/components/common/notification/types';



const OtpPage = ({ phone, newUser, next, back }: OtpPageProps) => {
    const isKeyboardOpen = useDetectKeyboardOpen();
    const { actions, gameData } = useContext(AppContext);

    const router = useRouter();

    const [otp, setOtp] = useState<string>('')

    const isDisabled = useMemo(() => {
        if (otp.length === 4) {
            return false;
        } else {
            return true;
        }
    }, [otp.length])

    const navigateUser = useCallback((id: string) => {
        let route = Cookies.get("LAST_ROUTE");
        if (route?.startsWith('/venue')) {
            Cookies.remove("LAST_ROUTE");
            router.replace(`${route}`)
        } else if (gameData?.users) {
            const founditem = gameData?.users.find((item) => item?._id === id);
            if (founditem) {

                router.replace(`/game/${gameData?._id}`, undefined, { shallow: false })
            } else {

                router.replace(`/gamepayjoin/${gameData?._id}`)
            }
        } else {

            router.replace('/home', '/home').catch((e) => console.error(e));
        }
    }, [gameData?._id, gameData?.users, router]);


    const verifyPhone = useCallback(async () => {
        try {
            const body: VerifyOtpBody = {
                phone: phone,
                otp: otp
            }
            const response: VerifyOtpResponse = await VerifyOtp(body);
            console.log(' verify response ', response)
            if (response?.data?.data?.token) {
                Cookies.set('ACCESS_TOKEN', response?.data?.data?.token);
                Cookies.set('_ID', response?.data?.data?._id);
                // actions.getUserData(response?.data?.data?.token)
                navigateUser(response?.data?.data?._id)
            }

        } catch (e) {
            actions.showNotification('Incorrect otp', NotificationType.ERROR)
            console.log('verification err', e);
        }
    }, [actions, navigateUser, otp, phone]);

    const verifyNewPhone = useCallback(async () => {
        try {
            const body: VerifyOtpBody = {
                phone: phone,
                otp: otp
            }
            const response: VerifyOtpResponse = await VerifyOtpNewUser(body);

            if (response?.data?.data?._id) {
                Cookies.set('_ID', response?.data?.data?._id);
            }

            if (response?.data?.data?.token) {
                next(response?.data?.data?.token, response?.data?.data?._id);
            }

        } catch (e) {
            console.log('new verification err', e);
        }
    }, [next, otp, phone]);

    const verify = useCallback(() => {
        if (newUser) {
            verifyNewPhone();
        } else {
            verifyPhone();
        }
    }, [newUser, verifyNewPhone, verifyPhone]);

    const resend = useCallback(async () => {
        try {
            let body: ReSendOtpBody = {
                phone: phone
            }
            await resendOtp(body);
            actions.showNotification('Otp sent', NotificationType.NORMAL)
        } catch (e) {
            console.log('resend otp error');
        }
    }, [actions, phone]);

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.value.length > e.target.maxLength) {
            setOtp(e.target.value.slice(0, e.target.maxLength))
        } else {
            setOtp(e.target.value)
        }
    }

    return (
        <div className={styles['container']}>
            <Header back={back} />
            <div className={classNames(styles['ph-24'], styles['mb-64'])}>
                <p className={classNames(styles['login_title'], styles['mb-16'])}>Verify your number</p>
                <p className={classNames(styles['subText'])}>Enter the code we’ve sent by text to</p>
                <p className={classNames(styles['subText'])}>+91 {phone}.</p>
            </div>
            <div className={classNames(styles['ph-24'], styles['input_wrapper'])}>
                <Input maxLength={4} value={otp} onChange={change} />
            </div>
            <div className={classNames(styles['button_wrapper'], isKeyboardOpen && styles['bottom_25'])} >
                <p className={styles['terms_text']}>
                    Didnt get it?
                    <span onClick={resend} className={classNames(styles['text_blue'])}> Tap to resend.</span>
                </p>
                <IconButton disabled={isDisabled} onClick={verify} />
            </div>
        </div>
    )
}

export default OtpPage