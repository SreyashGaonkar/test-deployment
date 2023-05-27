import React from 'react'
import classNames from 'classnames'
//styles
import styles from './offers.module.scss'
//components
import OfferItem from '../offerItem/offerItem'

const Offers = () => {

    return (
        <div className={classNames(styles['mt-28'], styles['row'], styles['align-center'], styles['scroll-y'])}>
            <OfferItem />
            <OfferItem />
        </div>
    )
}

export default Offers