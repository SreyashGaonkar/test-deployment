import styles from './newfriends.module.scss'
import classNames from 'classnames';
import Image from 'next/image';
import "animate.css";

const Newfriends = () => {
    return (
        <>
            <div className={classNames(styles.container_secondpage, styles["mb-20"],styles["mt-96"])}>
                <div className={classNames(styles.game_always)}>Make new  <span >{" "} friends </span></div>
                <div className={classNames(styles.ready_for_you)}>on court
                   </div>
                <div className={classNames(styles.ready_content, styles['mt-20'])}>
                Meet interesting players who share your 
                </div>
                <div className={classNames(styles.ready_content)}>
                love for the game and grow your sports 
                </div>
                <div className={classNames(styles.ready_content, styles['mb-48'])}>
                circle!
                </div>
            </div>
            <div className={classNames(styles.container_secondpage_image)}>
                <Image src={'/landingimages/purpleboys.webp'} alt="" height={338} width={324} 
                className='animate__animated animate__fadeIn'/>
            </div>
        </>
    )
}

export default Newfriends