import classNames from 'classnames';
import styles from './heropage.module.scss'
import Image from 'next/image';
import Playbutton from '@/components/common/playbutton/playbutton';
import { motion } from 'framer-motion'

const Heropage = () => {
    return (
        <>
           
            <div className={classNames(styles.container_hero)}>
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 150, opacity: 0 }}
                    transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.3 }}>
                    <div className={classNames(styles.easiest_way)}>
                        The easiest way
                    </div>
                    <div className={classNames(styles.to_play)}>
                        to play <span className='bluesports'>sports</span>
                    </div>
                </motion.div>
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }}
                    transition={{ type: 'spring', damping: 39, stiffness: 269, mass: 1.6, delay: 0.5 }}>
                    <div className={classNames(styles.explore, styles["mt-20"])}>Explore your neighbourhood and find a</div>
                    <div className={classNames(styles.explore, styles["mt-10"])}>game in no time.</div>
                </motion.div>
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }}
                    transition={{ type: 'spring', damping: 38, stiffness: 300, mass: 1.4, delay: 0.55 }}>
                    <Playbutton />
                </motion.div>


            </div>
            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }}
                transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.4 }} className={classNames(styles.hero_image, styles['mt-48'])}>
                {/* <Image src={'/landingimages/mobileshadow.svg'} alt="" height={392} width={388} className='hero_shadow_position'
             style={{position:"absolute", zIndex:0}}/> */}
                <Image src={'/landingimages/newmobileheroimage.webp'} alt="" height={392} width={388} className='hero_image_position'
                    style={{ position: "relative", zIndex: 1 }} />
            </motion.div>


        </>
    )
}

export default Heropage