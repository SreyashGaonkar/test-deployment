import React from 'react';
//styles
import classNames from 'classnames';
import {motion} from 'framer-motion'
import styles from './winrewards_desktop.module.scss';
//Images
import Image from 'next/image';
import orangeline from '../../../../../public/landingimages/orangevector_optimized.webp';
import orangeman from '../../../../../public/landingimages/finalone.webp';


const Winrewards_desktop = () => {
  return (
    <>
            <div className='container' >
                <div className={classNames(styles.ready_game)} >
                    <div className={classNames(styles.col_1)}>
                    </div>
                    <div className={classNames(styles.col_5)} >
                        <motion.div animate={{ y: 100, opacity: 0 }}
                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.15 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }} >
                            <Image src={orangeline} alt="green" className={styles.orangeline} loading='lazy' />
                            <Image className={styles.orangeman} src={orangeman} alt='play' loading='lazy' style={{ zIndex: 1, position: "absolute" }} />
                        </motion.div>

                    </div>
                    <div className={classNames(styles.col_5)}>
                        <motion.div animate={{ y: 80, opacity: 0 }}
                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.13 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }} className={styles.yourgame_text_alignment}>
                            <div className={styles.game_always}>
                                <div className={styles.game_always_text} style={{ fontFamily: "Nexa-Bold", color: '#E1E2E5' }}>
                                    Win <span className={styles.bluefriends}> rewards </span> as
                                </div>
                            </div>
                            <div className={styles.game_always} id='secondlineheight'>
                                <div className={styles.game_always_text} style={{ fontFamily: "Nexa-Bold", color: "#E1E2E5" }}>
                                   you play
                                    </div>
                            </div>
                            <div className={styles.explain1} style={{fontFamily:"Nexa-TextBook",color:"#C5C5C5"}} id="textalignment">
                            Earn Turf Coins by playing games and redeem them for more play time.
                                    </div>
                            <div className={styles.explain} style={{ fontFamily: "Nexa-TextBook", color: "#C5C5C5" }} id="textalignments">
                            Earn Turf Coins by playing games and redeem <br/>
                            them for more play time.
                            </div>
                        </motion.div>
                        {/* <br /><br /> */}
                    </div>
                    <div className={classNames(styles.col_1)}>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Winrewards_desktop