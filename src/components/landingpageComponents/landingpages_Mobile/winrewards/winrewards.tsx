import classNames from "classnames";
import Image from "next/image";
import styles from './winrewards.module.scss'
import "animate.css";

const Winrewards = () => {
  return (
    <>
 <div className={classNames(styles.container_secondpage, styles["mb-20"],styles["mt-96"])}>
                <div className={classNames(styles.game_always)}>Win <span >{" "} rewards </span> as </div>
                <div className={classNames(styles.ready_for_you)}>you play
                   </div>
                <div className={classNames(styles.ready_content, styles['mt-20'])}>
                Earn Turf Coins by playing games and
                </div>
                <div className={classNames(styles.ready_content, styles['mb-48'])}>
                redeem them for more play time.
                </div>
            </div>
            <div className={classNames(styles.container_secondpage_image,styles["mb-100"])}>
                <Image src={'/landingimages/orangeman.webp'} alt="" height={374} width={340} 
                className='animate__animated animate__fadeIn'/>
            </div>
    </>
  )
}

export default Winrewards