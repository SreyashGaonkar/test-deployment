import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
//styles
import styles from './venueItem.module.scss'

//types
import { VenueItemPropType } from './types'

const VenueItem = ({ data }: VenueItemPropType) => {
    return (
        <div className={classNames(styles.container, styles['mr-10'])}>
            <div>
                <Image className={styles.image} src={data?.venue?.venue_display_picture} height={168} width={262} alt="sport image" />
            </div>
            <div className={classNames(styles['mt-16'])}>
                <p className={classNames(styles['headline'], styles['white1'])}>{data?.venue?.name}</p>
                <div className={classNames(styles.row, styles['mt-4'])}>
                    <>
                        <Image src={'/images/reviewstar.png'} height={14} width={15} alt="sport image" />
                        <p className={classNames(styles['card_text'], styles['white2'])}>{data?.ratings_and_reviews?.rating ? data?.ratings_and_reviews?.rating : '--'}</p>
                    </>
                    <>
                        <div className={styles['dot']} />
                        <p className={classNames(styles['card_text'], styles['white2'])}>{data?.configuration?.avg_price ? data?.configuration?.avg_price : '--'} / </p>
                        <Image src={'/images/person.png'} height={10} width={10} alt="sport image" />
                    </>

                </div>
            </div>
        </div>
    )
}

export default VenueItem