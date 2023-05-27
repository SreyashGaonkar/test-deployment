import React, { useCallback } from 'react'
import Cookies from 'js-cookie'
import classNames from 'classnames'
import { useRouter } from 'next/router'
//styles
import styles from './logout.module.scss'

//components
import PrimaryButton from '@/components/common/primaryButton/primaryButton'



const Logout = () => {

    const router = useRouter();

    const logoutUser = useCallback(() => {
        Cookies.remove("LAST_ROUTE");
        Cookies.remove('ACCESS_TOKEN');
        Cookies.remove('_ID');
        router.push('/login')
    }, [router])

    return (
        <div className={classNames(styles['App'])}>
            <div className={classNames(styles.container, styles['align-center'], styles['justify-center'])}>
                <PrimaryButton text='logout' onPress={logoutUser} />
            </div>
        </div>
    )
}

export default Logout