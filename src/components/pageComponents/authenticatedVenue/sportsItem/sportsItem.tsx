import React from 'react'
import Image from 'next/image'
//styles
import styles from './sportsItem.module.scss'
import classNames from 'classnames'

const SportsItem = () => {
    return (
        <div className={classNames(styles.container)}>
            <div className={classNames(styles.left)}>
                <Image className={styles.image} src={'/images/gameImage.png'} height={92} width={82} alt="sport image" />
            </div>
            <div className={classNames(styles.right)}>
                <p className={classNames(styles['headline'], styles['white1'])}>Basketball</p>
                <div className={classNames(styles.row, styles['mt-4'])}>
                    <Image src={'/images/reviewstar.png'} height={15} width={15} alt="sport image" />
                    <p className={classNames(styles['card_text'], styles['white2'])}>4.2</p>
                    <div className={styles['dot']} />
                    <p className={classNames(styles['card_text'], styles['white2'])}>200 / </p>
                    <Image src={'/images/person.png'} height={10} width={10} alt="sport image" />
                </div>
                <div className={classNames(styles.row, styles['mt-8'], styles['borderTop'], styles['pt-8'])}>
                    <Image src={'/icons/offer_icon.png'} height={16} width={16} alt="sport image" />
                    <p className={classNames(styles['Body'], styles['blue1'])}>500 off on all slots</p>
                </div>
            </div>
        </div>
    )
}

export default SportsItem