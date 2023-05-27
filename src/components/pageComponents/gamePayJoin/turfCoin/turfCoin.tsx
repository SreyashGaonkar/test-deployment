import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
//styles
import styles from './turfCoin.module.scss'
//components
import ToggleSwitch from '@/components/common/toggleSwitch/toggleSwitch'
//types
import { TurfCoinType } from './types'
import { indianRupeeComma } from '@/helper/indianRupeeComma'

const TurfCoin = ({ isEnabled, toggleSwitch, totalAvailableCoins, coins }: TurfCoinType) => {
    return (
        <div className={classNames(styles.container, styles['borderBottom'], styles['pt-36'], styles['pb-48'])}>
            <div className={classNames(styles['row'], styles['align-center'])}>
                <p className={classNames(styles['title_4'], styles['white1'], styles['mr-10'])}>Redeem Turf Coins</p>
                <ToggleSwitch value={isEnabled} onClick={toggleSwitch} />
            </div>
            {isEnabled ? (

                <div className={classNames(styles['row'], styles['align-center'], styles['mt-24'])}>
                    <p className={classNames(styles['sub'], styles['white2'], styles['lh-26'], styles['mr-3'], styles['blue1'])}>{indianRupeeComma(totalAvailableCoins)}</p>
                    <Image className={styles['mr-3']} height={17} width={17} src={'/icons/coin_blue.png'} alt="coin icon" />
                    <p className={classNames(styles['sub'], styles['white2'], styles['lh-26'], styles['mr-3'], styles['blue1'])}>redeemed! </p>
                    <p className={classNames(styles['sub'], styles['white2'], styles['lh-26'], styles['mr-3'])}>You have </p>
                    <p className={classNames(styles['sub'], styles['blue1'], styles['lh-26'], styles['mr-3'])}>{indianRupeeComma(coins - totalAvailableCoins)}</p>
                    <Image className={styles['mr-3']} height={17} width={17} src={'/icons/coin_blue.png'} alt="coin icon" />
                    <span className={classNames(styles['sub'], styles['white2'], styles['lh-26'])}>left.</span>

                </div>
            ) :
                (
                    <div className={classNames(styles['row'], styles['align-center'], styles['mt-24'])}>
                        <p className={classNames(styles['sub'], styles['white2'], styles['lh-26'], styles['mr-3'])}>You have </p>
                        <p className={classNames(styles['sub'], styles['blue1'], styles['lh-26'], styles['mr-3'])}>{indianRupeeComma(totalAvailableCoins)}</p>
                        <Image className={styles['mr-3']} height={17} width={17} src={'/icons/coin_blue.png'} alt="coin icon" />
                        <span className={classNames(styles['sub'], styles['white2'], styles['lh-26'])}>in your wallet.</span>
                    </div>
                )
            }
        </div>
    )
}

export default TurfCoin