import React from 'react'
import classNames from 'classnames'
//styles
import styles from './refundPolicy.module.scss';
//type


const RefundPolicy = () => {
    return (
        <div className={classNames(styles.container, styles['borderBottom'], styles['pt-36'], styles['pb-48'])}>
            <p className={classNames(styles['title_4'], styles['white1'])}>Refund Policy</p>
            <p className={classNames(styles['sub'], styles['white2'], styles['mt-24'])}>If the game doesn’t happen due to the host backing out or less number of players, your entire payment will be refunded.</p>

        </div>
    )
}

export default RefundPolicy