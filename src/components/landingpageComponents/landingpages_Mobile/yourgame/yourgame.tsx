import React from 'react'
//styles
import styles from './yourgame.module.scss'
import classNames from 'classnames';
import 'animate.css';
//image
import Image from 'next/image';


const Yourgame = () => {
    return (
        <>
            <div className={classNames(styles.container_secondpage, styles["mb-20"])}>
                <div className={classNames(styles.game_always)}>A game always</div>
                <div className={classNames(styles.ready_for_you)}>ready for
                    <span >{" "} you</span></div>
                <div className={classNames(styles.ready_content, styles['mt-20'])}>
                    Whether it’s an evening of intense 
                </div>
                <div className={classNames(styles.ready_content)}>
                    football or a casual round of badminton, 
                </div>
                <div className={classNames(styles.ready_content, styles['mb-48'])}>
                    you’ll always find a game to join on Turf Town.
                </div>
            </div>
            <div className={classNames(styles.container_secondpage_image)}>
                <Image src={'/landingimages/greengroupgang.webp'} alt="" height={268} width={344} 
                className='animate__animated animate__fadeIn'/>
            </div>
        </>
    )
}

export default Yourgame