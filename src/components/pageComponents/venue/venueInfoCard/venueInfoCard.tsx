
import { useCallback } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
//styles

import styles from './venueInfoCard.module.scss'
//types
import { VenueInfoCardPropType } from './types'
import { capitalise } from '@/helper/capitalise'
import Rating from '../../authenticatedVenue/rating/rating'


const VenueInfoCard = ({ name, area, imageUrl, type, address, ratingData }: VenueInfoCardPropType): JSX.Element => {

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
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image className={styles.venue} height={64} width={64} alt='venue image' src={imageUrl} />
            </div>
            <div className={styles.right}>
                <p className={classNames(styles['title'], styles['mb-8'])}>{name}</p>
                <p className={classNames(styles['subtitle'], styles['mb-8'])}>{area}</p>
                <Rating type={type} ratingData={ratingData} />
                {/* <div className={styles.row}>
                    <div className={classNames(styles.image_container)}>
                        {renderGameSymbol()}
                    </div>
                    <div className={styles.dot} />
                    <div className={styles.row}>
                        <p className={styles.rating_text}>{ratingData.rating}</p>
                        <Image className={styles['mb-4']} width={25} height={20} alt='star-icon' src={'/images/star.png'} />
                    </div>
                    <p className={classNames(styles['subtitle'], styles['white2'], styles['ml-8'])}>{`(${ratingData?.reviews} reviews)`}</p>
                </div> */}
                <p className={classNames(styles['subtitle'], styles['mb-8'], styles['mt-8'], styles["$White"])}>{address}</p>
            </div>
        </div>
    )
}

export default VenueInfoCard;