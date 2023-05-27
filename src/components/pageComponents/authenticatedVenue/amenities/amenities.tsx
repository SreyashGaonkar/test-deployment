import React, { useCallback } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
//styles
import styles from './amenities.module.scss'
//types
import { AmenitiesPropType } from './type'

const Amenities = ({ features }: AmenitiesPropType) => {

    const item = useCallback((text: string, imageUrl: string) => {
        return (
            <div className={classNames(styles['row'], styles['align-center'], styles['mb-24'])}>
                <div className={classNames(styles['mr-16'])}>
                    <Image height={24} width={24} src={imageUrl} alt='icon' />
                </div>
                <p className={classNames(styles['sub'], styles['white1'])}>{text}</p>
            </div>
        )
    }, []);

    return (
        <div className={classNames(styles.container, styles['borderTop'])}>
            <p className={classNames(styles['title_4'], styles['white1'])}>Amenities</p>
            <div className={classNames(styles['mt-28'])}>
                {features?.phonepe || features?.paytm || features?.googlePay && (<>{item("UPI Accepted", "/amenities/upi_blue.png")}</>)}
                {features?.card && (<>{item("Card Accepted", "/amenities/card.webp")}</>)}
                {features?.toilet && (<>{item("Toilets", "/amenities/toilet_blue.png")}</>)}
                {features?.dressing_rooms && (<>{item("Changing Rooms", "/amenities/rooms_blue.png")}</>)}
                {features?.parking && (<>{item("Free Parking", "/amenities/parking_blue.png")}</>)}
                {features?.bibs && (<>{item("Bibs Available", "/amenities/bibs_blue.png")}</>)}
                {features?.showers && (<>{item("Showers", "/amenities/shower_blue.png")}</>)}
                {features?.raquets && (<>{item("Raquets Available", "/amenities/raquet_blue.png")}</>)}
            </div>
        </div>
    )
}

export default Amenities