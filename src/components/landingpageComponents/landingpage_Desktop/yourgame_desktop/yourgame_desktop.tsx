import React from 'react';
//styles
import classNames from 'classnames';
import styles from './yourgame_desktop.module.scss';
import { motion } from 'framer-motion';
//images
import Image from 'next/image';
import greenlines from '../../../../../public/landingimages/greenvector_optimized.webp'
import group from '../../../../../public/landingimages/newgroupppl.webp'

const Yourgame_desktop = () => {
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
                            <Image src={greenlines} alt="green" className={styles.greenlines} loading='lazy' />
                            <Image className={styles.greenman} src={group} alt='play' loading='lazy' style={{ zIndex: 1, position: "absolute" }} />
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
                                    A game always
                                </div>
                            </div>
                            <div className={styles.game_always} id='secondlineheight'>
                                <div className={styles.game_always_text} style={{ fontFamily: "Nexa-Bold", color: "#E1E2E5" }}>ready for
                                    <span className={styles.bluefriends}> you</span></div>
                            </div>
                            <div className={styles.explain1} style={{fontFamily:"Nexa-TextBook",color:"#C5C5C5"}} id="textalignment">
                                        Whether it’s an evening of intense football or
                                        a casual round of badminton, you’ll always
                                        find a game to join.
                                    </div>
                            <div className={styles.explain} style={{ fontFamily: "Nexa-TextBook", color: "#C5C5C5" }} id="textalignments">
                                Whether it’s an evening of intense football or a<br />
                                casual round of badminton, you’ll always find a<br />
                                game to join.
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

export default Yourgame_desktop