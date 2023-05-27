import PrimaryButton from '@/components/common/primaryButton/primaryButton'
import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
//styles
import styles from './address.module.scss'
//types
import { AddressPropType } from './types'
import { ButtonType } from '@/components/common/primaryButton/types'

const Address = ({ address }: AddressPropType) => {
    return (
        <div className={classNames(styles.container, styles['borderTop'])}>
            <p className={classNames(styles['title_4'], styles['white1'])}>Address</p>
            <p className={classNames(styles['caption'], styles['white2'], styles['mt-28'])}>{address}</p>
            <div className={classNames(styles['mt-32'], styles['row'], styles['align-center'])}>
                <div className={classNames(styles['button_cont1'], styles['mr-20'])}>
                    <PrimaryButton buttonType={ButtonType.DARK} text={'Get Directions'} onPress={() => {

                    }} />
                </div>

                <div className={styles['button_cont2']}>
                    <PrimaryButton
                        leftIcon={<Image alt="call_icon" width={20} height={20} src={'/icons/icon_call.png'} />}
                        buttonType={ButtonType.DARK} onPress={() => {

                        }} />
                </div>



            </div>
        </div>
    )
}

export default Address