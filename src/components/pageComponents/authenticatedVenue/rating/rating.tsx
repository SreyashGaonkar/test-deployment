import React, { useCallback } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
//styles
import styles from './rating.module.scss'
//types
import { RatingPropType } from './types'

const Rating = ({ ratingData, type }: RatingPropType) => {

    const renderGameSymbol = useCallback(() => {
        switch (type) {
            case "football":
                return (
                    <div className={styles['mt-4']}><Image src={'/images/foot1.png'} width={19}
                        height={18} alt="" /></div>
                )
            case "basketball":
                return (
                    <div className={styles['mt-4']}><Image src={'/images/bas1.png'} width={19}
                        height={18} alt="" /></div>
                )
            case "badminton":
                return (
                    <div className={styles['mt-4']}><Image src={'/images/badminton-blue.png'} width={19}
                        height={18} alt="" /></div>
                )
            case "cricket":
                return (
                    <div className={styles['mt-4']}><Image src={'/images/cricket-blue.png'} width={19}
                        height={18} alt="" /></div>
                )
            default:
                return <></>;
        }
    }, [type]);

    return (
        <div className={styles.row}>
            <div className={classNames(styles.image_container)}>
                {renderGameSymbol()}
            </div>
            <div className={styles['dot']} />
            <div className={styles.row}>
                <p className={styles.rating_text}>{ratingData.rating}</p>
                <Image className={styles['mb-4']} width={25} height={20} alt='star-icon' src={'/images/star.png'} />
            </div>
            <p className={classNames(styles['subtitle'], styles['white2'], styles['ml-8'])}>{`(${ratingData?.reviews} reviews)`}</p>
        </div>
    )
}

export default Rating