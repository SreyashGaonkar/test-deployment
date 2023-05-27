import React from 'react';
import {motion} from 'framer-motion';

//styles
import styles from './towntalk_desktop.module.scss';
import classNames from 'classnames';
//images
import Image from 'next/image';
import newround from '../../../../../public/landingimages/newround.webp';
import redcircle from '../../../../../public/landingimages/redcircle.svg';
import talker from '../../../../../public/landingimages/talkerlady.webp';

const Towntalk_desktop = () => {
  return (
    <>
     <div>
                <div className={classNames(styles.towntalk_container)}>
                    <div className='mb-0' >
                        <div className={styles.towcard_container} >
                            <div className={styles.town_card}>
                                <div className={styles.town_card_grid}>
                                    <div style={{marginBottom:2, marginTop:16}}>
                                        <div className={classNames(styles.imageFixed)}>
                                            <Image src={newround} className={styles.rect3} alt="" loading='lazy' />
                                            <Image src={redcircle} className={styles.redcircle} alt="" loading='lazy' />
                                            <Image src={talker} className={styles.talkerpic}  alt="" loading='lazy'/>
                                        </div>
                                    </div>
                                    <div className={styles.talker_content}>
                                        <motion.div animate={{ y: 80, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.05 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} >
                                            <div className={styles.comment} style={{
                                                 color: "#e1e2e5",
                                                 fontFamily:" Nexa-Regular"
                                            }}>
                                                “Turf Town has made playing basketball a breeze.
                                                I always have a game to join and end up on the court more often!”
                                            </div>                                     
                                        <div className={styles.talkername} style={{
                                                 color: "#e1e2e5",
                                                 fontFamily:" Nexa-Regular",
                                                 textDecoration: "none",
                                                 whiteSpace: "nowrap"
                                            }}>
                                            Sunandha
                                        </div>
                                        <div className={styles.talkerlocation} style={{
                                                 color: "#b4b4b8",
                                                 fontFamily:"Nexa-TextRegular"
                                            }}>
                                            Baller from Kilpauk, Chennai
                                        </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Towntalk_desktop