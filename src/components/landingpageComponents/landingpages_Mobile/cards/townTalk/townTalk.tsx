import React from 'react';
import styles from './townTalk.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import 'animate.css'

const TownTalk = () => {
  return (
    <div className={(styles.towntalk_container)}>
            <div className={classNames(styles.card_one, styles['mb-48'])}>
                <div className={styles.image_container}>
                    <Image src={'/landingimages/mobileredgirl1.webp'} alt="venueset" 
                    height={370} width={258} className='animate__animated animate__fadeIn'/>
                </div>

                <div className={classNames(styles.towntalk_content, styles["mt-16"])}>
                “Turf Town has made playing basketball a breeze. 
                I always have a game to join and end up on the court more often!”
                </div>
                <div className={styles.talker_name}>Sunandha</div>
                <div className={styles.talker_address}>Baller from Kilpauk, Chennai</div>
            </div>
    </div>
  )
}

export default TownTalk