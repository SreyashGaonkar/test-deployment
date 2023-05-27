import React from 'react';
import styles from './cardsTypes.module.scss'
import classNames from 'classnames';
import Image from 'next/image';
import 'animate.css'

const CardsTypes = () => {
    return (
        <div className={styles.cards_container}>
            <div className={styles.card_one}>
                <div className={styles.image_container}>
                    <Image src={'/landingimages/mobilevenueset.webp'} alt="venueset" height={130} width={320} 
                    className='animate__animated animate__fadeIn'/>
                </div>
                <div className={classNames(styles.cards_title, styles["mt-48"])}>
                    Discover the best places to play
                </div>
                <div className={classNames(styles.cards_content, styles["mt-16"])}>
                    Browse through the hottest venues in town.
                    Look up photos, read reviews, and start hosting with a tap.
                </div>
            </div>
            <div className={styles.card_two}>
                <div className={styles.image_container}>
                    <Image src={'/landingimages/newshorts.webp'} alt="venueset" height={295} width={309} 
                    className='animate__animated animate__fadeIn'/>
                </div>
                <div className={classNames(styles.cards_title, styles["mt-48"])}>
                Never run short of players
                </div>
                <div className={classNames(styles.cards_content, styles["mt-16"])}>
                Post your game on Town and get players from across the neighbourhood to join in and make your game happen.
                </div>
            </div>
            <div className={styles.card_one}>
                <div className={styles.image_container}>
                    <Image src={'/landingimages/splitbill.webp'} alt="venueset" height={220} width={341} 
                    className='animate__animated animate__fadeIn'/>
                </div>
                <div className={classNames(styles.cards_title, styles["mt-48"])}>
                Split the bill effortlessly
                </div>
                <div className={classNames(styles.cards_content, styles["mt-16"])}>
                Get everyone to pay their share directly on the 
                app and prevent chaos at the payment desk.
                </div>
            </div>
            <div className={styles.card_two}>
                <div className={styles.image_container}>
                    <Image src={'/landingimages/linkshare.webp'} alt="venueset" height={190} width={330} 
                    className='animate__animated animate__fadeIn'/>
                </div>
                <div className={classNames(styles.cards_title, styles["mt-48"])}>
                Share Universal Game Links
                </div>
                <div className={classNames(styles.cards_content, styles["mt-16"])}>
                You never have to copy-paste the player list again. 
                Share a game link and let Turf Town keep track for you.
                </div>
            </div>
            <div className={classNames(styles.card_one, styles['mb-48'])}>
                <div className={styles.image_container}>
                    <Image src={'/landingimages/dropoutss.webp'} alt="venueset" height={252} width={252} 
                    className='animate__animated animate__fadeIn'/>
                </div>
                <div className={classNames(styles.cards_title, styles["mt-48"])}>
                Avoid last minute dropouts
                </div>
                <div className={classNames(styles.cards_content, styles["mt-16"])}>
                Worried of players bailing at the last second? Turn on Pay-to-join 
                and get them to pay their share before joining.
                </div>
            </div>
        </div>
    )
}

export default CardsTypes