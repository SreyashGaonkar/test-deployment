import React, { useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
//styles
import styles from './offerItem.module.scss'
//type
import { ReviewItemPropType } from './types'

const OfferItem = () => {

    return (
        <div className={classNames(styles.container, styles['mr-16'])}>
            <div className={styles.player_container}>
                <div className={classNames(styles.left, styles['mr-16'])}>
                    <div className={styles.image_container}>
                        <Image src={'/icons/offer_icon.png'} height={25} width={25} alt="offfer image" />
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles['title']}>Flat Rs. 200 off</p>
                    <p className={classNames(styles['subtitle'], styles['white2'])}>Use code TURF200</p>
                </div>
            </div>
        </div>
    )
}

export default OfferItem