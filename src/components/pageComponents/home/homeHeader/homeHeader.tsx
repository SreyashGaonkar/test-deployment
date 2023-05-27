import React, { useContext } from 'react'
import Image from 'next/image'
import { AppContext } from '@/providers/app'
import classNames from 'classnames'

import styles from './homeHeader.module.scss'

const HomeHeader = () => {

    const { user } = useContext(AppContext)
    return (
        <div className={classNames(styles.container)}>
            <div className={styles.back_button_wrapper}>
                <div>
                    <p className={classNames(styles['chip_3'], styles['white9'], styles['mb-4'])}>YOUR LOCATION</p>
                    <div className={classNames(styles['row'], styles['align-center'])}>
                        <Image width={14} height={19} alt={''} src={'/icons/location_icon.png'} />
                        <p className={classNames(styles['title_2'], styles['white10'], styles['ml-8'])}>Velachery</p>
                    </div>
                </div>
                <Image className={styles.round_image} width={32} height={32} src={user?.profile_picture ? user?.profile_picture : '/images/empty_user_profile.webp'} alt={'profile'} />
            </div>
        </div>
    )
}

export default HomeHeader