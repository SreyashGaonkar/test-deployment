import { useCallback, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { useRouter } from 'next/router';
//styles
import styles from './handle.module.scss';
//component
import Header from '@/components/common/header/header';
import Input from '@/components/common/input/input';
import IconButton from '@/components/common/iconButton/iconButton';
import { NamePropType } from '../name/type';
import Loading from '@/components/common/loading/loading';
import Image from 'next/image';
//api
import { ModifyUser, ModifyUserBody } from '@/apis/modifyUser/modifyUser';
import { checkSpace } from '@/helper/space';
import { checkSpecialCharacter } from '@/helper/specialCharacter';
import { CheckUserName, CheckUserNameBody, CheckUserNameResponse } from '@/apis/checkUserName/checkUserName';
import { getPresetName, getPresetNameBody } from '@/apis/getPresetName';
import { fetchProfanityCheck } from '@/apis/fetchProfanityCheck';
//context
import { AppContext } from '@/providers/app';


const enum loadingType {
    LOADING,
    CHECKLOADING,
    VALID,
    INVALID,
    NONE
}


const Handle = ({ back, next, token, id, name }: NamePropType) => {
    const isKeyboardOpen = useDetectKeyboardOpen();

    const router = useRouter();

    const { actions, gameData } = useContext(AppContext);

    const [handle, setHandle] = useState<string>('');
    const [loading, setLoading] = useState<loadingType>(loadingType.NONE);
    const [error, setError] = useState<string>('');
    const [profanity, setProfanity] = useState<string[]>([]);
    console.log('profanity', profanity)

    const presetName = useCallback(async () => {
        try {
            let body: getPresetNameBody = {
                firstName: name ? name : ""
            }
            const response = await getPresetName(token, body);
            setHandle(response);
        } catch (e) {
            console.error('presetName error', e);
        }
    }, [name, token]);

    const getProfanity = useCallback(async () => {
        try {
            const response = await fetchProfanityCheck(token);
            setProfanity(response)
        } catch (e) {
            console.error('getProfanity error', e);
        }
    }, [token]);

    useEffect(() => {
        presetName();
        getProfanity();
    }, [getProfanity, presetName])

    const changeHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > e.target.maxLength) {
            setHandle(e.target.value.slice(0, e.target.maxLength).toLowerCase())
        } else {
            setHandle(e.target.value.toLowerCase())
        }
        setError('');
        setLoading(loadingType.NONE);
    }, []);

    const checkAvailability = useCallback(async () => {
        if (id) {
            try {
                setLoading(loadingType.CHECKLOADING)
                let body: CheckUserNameBody = {
                    handle: handle,
                    id: id
                }
                const response: CheckUserNameResponse = await CheckUserName(token, body);

                if (response?.data?.data?.length > 0) {
                    setLoading(loadingType.INVALID)
                } else {
                    setLoading(loadingType.VALID)
                }
                //setLoading(loadingType.NONE)
            } catch (e) {
                console.log('check user name error', e);
                setLoading(loadingType.NONE)
            }
        }
    }, [handle, id, token]);

    const checkErrors = useCallback(async () => {
        if (handle !== '') {
            if (handle.length < 3) {
                setError('Please enter minimum of 3 charcters');
            } else if (checkSpace(handle)) {
                setError("You can’t have spaces in your name. Please try again.");
            } else if (checkSpecialCharacter(handle)) {
                setError("Special characters are not allowed. Lets give it another go.");
            } else if (profanity.includes(handle.toLocaleLowerCase() || handle.toLocaleUpperCase())) {
                setError("We do not allow usernames that are offensive or profane. Kindly pick one that isn’t.");
            } else {
                setError('');
                checkAvailability();
            }
        }
    }, [checkAvailability, handle, profanity]);


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


    const updateHandle = useCallback(async () => {
        try {
            const id = Cookies.get('_ID');
            const body: ModifyUserBody = {
                handle: handle.trim().toLocaleLowerCase(),
            }
            if (id) {
                const response = await ModifyUser(token, id, body);
                if (response?._id) {
                    Cookies.set('ACCESS_TOKEN', token);
                    Cookies.set('_ID', id);
                    // actions.getUserData(token)
                    navigateUser(response?._id)
                    next && next();
                }
            }

            setLoading(loadingType.NONE)
            next && next();

        } catch (e) {
            setLoading(loadingType.NONE)
            console.log('error ModifyUser', e);
        }
    }, [handle, navigateUser, next, token]);

    useEffect(() => {
        checkErrors();
    }, [handle, checkErrors]);

    const renderIcon = useCallback(() => {
        switch (loading) {
            case loadingType.CHECKLOADING:
                return <Loading />
            case loadingType.VALID:
                return <Image className={styles.icon} height={20} width={20} src={'/images/Subtract.png'} alt={'valid'} />
            default:
                return <></>
        }
    }, [loading])

    return (
        <div className={styles['container']}>
            <Header back={back} />
            <div className={classNames(styles['ph-24'], styles['mb-64'])}>
                <p className={classNames(styles['login_title'], styles['mb-16'])}>Pick a handle</p>
                <p className={classNames(styles['subText'])}>How wouldd you like to be known on court?</p>
            </div>
            <div className={classNames(styles['ph-24'], styles['mb-20'])}>
                <Input value={handle} maxLength={15} placeholder='@'
                    //valid 
                    onChange={changeHandle}
                    rightIcon={renderIcon()}
                />

            </div>

            {error !== '' && (<div className={classNames(styles['ph-24'])}>
                <p className={classNames(styles.errorText)}>{error}</p>
            </div>)}

            {loading === loadingType.INVALID && (<div className={classNames(styles['ph-24'])}>
                <p className={classNames(styles.errorText)}>This username already exists. Please pick another</p>
            </div>)}

            <div className={classNames(styles['button_wrapper'], isKeyboardOpen && styles['bottom_23'])} >
                <p className={styles['terms_text']}>
                    {handle.length}/15 Characters
                </p>
                <IconButton loading={loading === loadingType.LOADING} disabled={loading === loadingType.LOADING || loading === loadingType.INVALID || error !== ''} onClick={updateHandle} />
            </div>
        </div>
    )
}

export default Handle;