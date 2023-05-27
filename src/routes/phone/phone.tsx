import { useCallback, useContext, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import useDetectKeyboardOpen from "use-detect-keyboard-open";
//styles
import styles from './phone.module.scss';
//component
import Header from '@/components/common/header/header';
import Input from '@/components/common/input/input';
import IconButton from '@/components/common/iconButton/iconButton';

//utils
import { validatePhoneNumber } from '@/helper/phoneValidation';
//types
import { PhonePageProps } from './type';
//apis
import { SendOtpBody, SendOtpResponse, SendOtp } from '@/apis/sendOtp';




const Phone = ({ next, back }: PhonePageProps) => {
    const isKeyboardOpen = useDetectKeyboardOpen();

    const router = useRouter()

    const [phone, setPhone] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const isNumberValid = useMemo(() => {
        return validatePhoneNumber(phone)
    }, [phone]);

    const sendOtpOnPhone = useCallback(async () => {
        let body: SendOtpBody = {
            phone: phone,
        };

        try {
            setLoading(true);
            const response: SendOtpResponse = await SendOtp(body);
            setLoading(false);
            next && next(phone, response?.data?.data?.handle !== undefined ? false : true);
        } catch (e) {
            setLoading(false);
            console.log('send Otp error');
        }
    }, [next, phone]);

    const changePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > e.target.maxLength) {
            setPhone(e.target.value.slice(0, e.target.maxLength))
        } else {
            setPhone(e.target.value)
        }

    }, [])

    return (
        <div className={styles['container']}>
            <Header back={back} />
            <div className={classNames(styles['ph-24'], styles['mb-88'])}>
                <p className={classNames(styles['login_title'])}>Enter your</p>
                <p className={classNames(styles['login_title'])}>phone number</p>
            </div>
            <div className={classNames(styles['ph-24'])}>
                <Input value={phone} maxLength={10} phone type={'number'} placeholder='Phone number' onChange={changePhone} />
            </div>

            <div className={classNames(styles['button_wrapper'], isKeyboardOpen && styles['bottom_20'])} >
                <p className={styles['terms_text']}>
                    By entering your number, you’re agreeing
                    to our <span onClick={() => { router.push('/termsofservice') }} className={classNames(styles['text_blue'], styles['blue_underline'])}> Terms of service</span> & <span onClick={() => { router.push('/privacy-policy') }} className={classNames(styles['text_blue'], styles['blue_underline'])}>Privacy Policy.</span>
                </p>
                <IconButton loading={loading} disabled={!isNumberValid || loading} onClick={() => {
                    sendOtpOnPhone();
                }} />
            </div>
        </div>
    )
}

export default Phone;

