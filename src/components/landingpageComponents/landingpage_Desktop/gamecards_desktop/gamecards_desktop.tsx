import React from 'react';
import {motion} from 'framer-motion'
//styles
import classNames from 'classnames';
import styles from './gamecards_desktop.module.scss';

//images
import Image from 'next/image';
import venueset from '../../../../../public/landingimages/newvenueset.webp';
import shortofplayers from '../../../../../public/landingimages/people.webp';
import splitbill from '../../../../../public/landingimages/splitbill.webp';
import gamelink from '../../../../../public/landingimages/linkshare.webp';
import dropouts from '../../../../../public/landingimages/dropoutss.webp';

const Gamecards_desktop = () => {
  return (
    <div className={classNames(styles.taskcardmain_container)}>
          <  >
                <div className={styles.organisingbg} >
                    <div className={styles.cards_top} >
                        <div style={{ marginBottom: "95px" }}>
                            <div className={styles.cards_head_text}>
                                <div className='madehost opacity-80'>Made for the host in you</div>
                            </div>
                            <div className={styles.cards_head_text2} >
                                <div className='organising'>Organising a game has never been this easy!</div>
                            </div>
                        </div>
                        < >
                            <div className={classNames(styles.card1_container)} >
                                <div className={styles.shortscard}>
                                    <div className={styles.shortscard_text}>
                                        <div className={styles.taskcards_title}
                                        style={{ marginTop: "70px",fontFamily: "Nexa-Bold",color: "#eeeff1"}}>
                                            Discover the best places to play</div>
                                        <div className={styles.taskcards_unit}>
                                            Browse through the hottest venues in town.</div>
                                        <div className={styles.taskcards_unit}>
                                            Look up photos, read reviews, and start hosting</div>
                                        <div className={styles.taskcards_unit}>
                                            with a tap.</div>
                                    </div>
                                    <motion.div animate={{ y: 5, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.05 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }}  className={styles.roundvenue_image_container}>
                                        <Image src={venueset} alt="venue" className={styles.roundvenue_image} loading='lazy' />
                                    </motion.div>
                                </div>
                            </div>
                            <div className={classNames(styles.card2_container)} >
                                <div className={styles.shortscard2}>
                                    <div className={styles.shortscard_text}>
                                        <div className={styles.taskcards_title} style={{ marginTop: "70px",fontFamily: "Nexa-Bold",color: "#eeeff1"}}>Never run short of players</div>
                                        <div className={styles.taskcards_unit}>Post your game on <span style={{ color: "#6698EC" }}>Town</span> and get players from</div>
                                        <div className={styles.taskcards_unit}>across your neighbourhood to join in and make </div>
                                        <div className={styles.taskcards_unit}>your game happen.</div>
                                     
                                            <motion.div animate={{ y: 5, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.05 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} className={styles.roundvenue_image_container}>
                                                <Image src={shortofplayers} alt="shortofplayers" loading="lazy"                                      
                                                 className={styles.roundvenue_image1}/>
                                            </motion.div>
                                       
                                    </div>
                                </div>
                                <div className={styles.shortscard2}>
                                    <div className={styles.shortscard_text}>
                                        <div className={styles.taskcards_title}  style={{ marginTop: "70px",fontFamily: "Nexa-Bold",color: "#eeeff1"}}>Split the bill effortlessly</div>
                                        <div className={classNames(styles.split_alignment, styles.taskcards_unit)}>
                                            Get everyone to pay their share directly
                                            on the app and prevent chaos at the
                                            payment desk.</div>
                                      
                                            <motion.div animate={{ y: 5, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.05 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} className={styles.roundvenue_image_container} >
                                                <Image src={splitbill} alt="shortofplayers" loading="lazy"                                            
                                                className={styles.roundvenue_image2}/>
                                            </motion.div>
                                      
                                    </div>
                                </div>
                            </div>
                            <div className={classNames(styles.card2_container)}>
                                <div className={styles.shortscard3}>
                                    <div className={styles.shortscard_text}>
                                        <div className={styles.taskcards_title} style={{ marginTop: "70px",fontFamily: "Nexa-Bold",color: "#eeeff1"}}>Share Universal Game links</div>
                                        <div className={classNames(styles.unit_alignment,styles.taskcards_unit)}>
                                            You never have to copy-paste the player list again.
                                            Share a game link and let Turf Town keep track for you.
                                        </div>
                                   
                                            <motion.div animate={{ y: 5, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.05 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} className={styles.roundvenue_image_container} >
                                                <Image src={gamelink} alt="shortofplayers" loading="lazy"                                                
                                                className={styles.roundvenue_image3}/>
                                            </motion.div>
                              
                                    </div>
                                </div>
                                <div className={styles.shortscard4}>
                                    <div className={styles.shortscard_text}>
                                        <div className={styles.taskcards_title} style={{ marginTop: "70px",fontFamily: "Nexa-Bold",color: "#eeeff1"}}>Avoid last minute dropouts</div>
                                        <div className={classNames(styles.unit_alignment,styles.taskcards_unit)}>
                                            Worried of players bailing at the last second? Turn on <span style={{ color: "#6698EC" }}>Pay-to-join </span>and get them to pay their share before joining.
                                        </div>
                                     
                                            <motion.div animate={{ y: 5, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.05 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} className={styles.roundvenue_image_container}>
                                                <Image src={dropouts} alt="shortofplayers" loading="lazy" 
                                                className={styles.roundvenue_image4}/>
                                            </motion.div>
                                     
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </> 
    </div>
  )
}

export default Gamecards_desktop