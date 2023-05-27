import React from 'react';
//Images
import Image from 'next/image';
import shut from '../../../../../public/landingimages/shut.svg';
import dd from '../../../../../public/landingimages/dd.svg';
import whistle from '../../../../../public/landingimages/whistle.webp';
import tikitaka from '../../../../../public/landingimages/tikitaka.svg';
import fcmarina from '../../../../../public/landingimages/fcmarina.png';
import manrun from '../../../../../public/landingimages/manrun.png';
//styles
import styles from './venue_animate.module.scss'
import classNames from 'classnames';
import {motion} from 'framer-motion'
//Images
import ground1 from '../../../../../public/landingimages/ground1test.webp';
import ground2 from '../../../../../public/landingimages/ground2.webp';
import ground3 from '../../../../../public/landingimages/ground3.webp';
import ground4 from '../../../../../public/landingimages/ground4.webp';
import ground5 from '../../../../../public/landingimages/ground5.webp';
import ground6 from '../../../../../public/landingimages/ground2test.webp';
import ground11 from '../../../../../public/landingimages/ground11.webp';
import ground22 from '../../../../../public/landingimages/ground22.webp';
import ground33 from '../../../../../public/landingimages/ground33.webp';
import ground44 from '../../../../../public/landingimages/ground44.webp';
import ground55 from '../../../../../public/landingimages/ground55.webp';


const Venue_animate = () => {

    const theme = [
        {
          "theme_name": "venuepics",
          "path": ground1
        },
        {
          "theme_name": "venuepics",
          "path": ground2
        },
        {
          "theme_name": "venuepics",
          "path": ground3
        },
        {
          "theme_name": "venuepics",
          "path": ground4
        },
        {
          "theme_name": "venuepics",
          "path": ground5
        },
        {
          "theme_name": "venuepics",
          "path": ground6
        },
        {
          "theme_name": "venuepics",
          "path": ground1
        },
        {
          "theme_name": "venuepics",
          "path": ground2
        },
        {
          "theme_name": "venuepics",
          "path": ground3
        },
        {
          "theme_name": "venuepics",
          "path": ground4
        },
        {
          "theme_name": "venuepics",
          "path": ground5
        },
        {
          "theme_name": "venuepics",
          "path": ground6
        }
      ]
      const themes = [
        {
          "theme_name": "venuepics",
          "path": ground11
        },
        {
          "theme_name": "venuepics",
          "path": ground22
        },
        {
          "theme_name": "venuepics",
          "path": ground33
        },
        {
          "theme_name": "venuepics",
          "path": ground44
        },
        {
          "theme_name": "venuepics",
          "path": ground55
        },
        {
          "theme_name": "venuepics",
          "path": ground11
        },
        {
          "theme_name": "venuepics",
          "path": ground22
        },
        {
          "theme_name": "venuepics",
          "path": ground33
        },
        {
          "theme_name": "venuepics",
          "path": ground44
        },
        {
          "theme_name": "venuepics",
          "path": ground55
        }
      ]

    return (
        <div className={classNames(styles.venue_animate_desktop_background)}>
            <div className="container">
                <div className={styles.venue_container_row}>
                    <div className={styles.col_1}>
                    </div>
                    <div className={classNames(styles.col_12, styles.venue_top_alignment)}>
                        <div className={classNames(styles.venue_text_alignment)}>
                            <div className={styles.venue_container_row2}>
                                <div className={styles.col_1}>
                                </div>
                                <div className={classNames(styles.col_10)}>
                                    <div className={styles.biggestvenue} id='biggestvenue'>
                                        <div className={styles.weare}> Home to some of the</div>
                                        <div className={styles.weare}> biggest venues in Town.</div>  </div>
                                </div>
                                <div className={styles.col_1}>
                                </div>
                            </div>
                        </div>
                        <div className={styles.venue_animate_logo}>
                          <motion.div animate={{ y: 10, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.05 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} >
                            <Image src={shut} className={styles.venuelogo} alt="..." loading='lazy' />
                            </motion.div>
                                  <motion.div animate={{ y: -20, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.07 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} > <Image src={dd} className={styles.venuelogo} alt="..." loading='lazy' />
                                            </motion.div>
                                   <motion.div animate={{ y: 10, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.09 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} ><Image src={whistle} className={styles.venuelogo} alt="..." loading='lazy' />
                                            </motion.div>
                                   <motion.div animate={{ y: -20, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.11 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} ><Image src={tikitaka} className={styles.venuelogo} alt="..." loading='lazy' />
                                            </motion.div>
                                  <motion.div animate={{ y: 10, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.13 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} > <Image src={fcmarina} className={styles.venuelogo} alt="..." loading='lazy' />
                                            </motion.div>
                                   <motion.div animate={{ y: -20, opacity: 0 }}
                                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.15 }}
                                            whileInView={{ y: -1, opacity: 1 }}
                                            viewport={{ once: true }} ><Image src={manrun} className={styles.venuelogo} alt="..." loading='lazy' />
                                            </motion.div>
                        </div>
                    </div>
                    <div className={styles.col_1}>
                    </div>
                </div>
            </div>
            <div className={styles.venue_animate_1}>
        {
          theme.map((data, key) => {
            return (
              <>
                <Image key={key} src={data.path} alt='venuegroundsview' loading='lazy' className={styles.desktopground}/>
              </>
            )
          })
        }
      </div>
      <div className={styles.venue_animate_2} >
        {
          themes.map((data, key) => {
            return (
              <>
                <Image key={key} src={data.path} alt='venuegroundsview' loading='lazy' className={styles.desktopground2}/>
              </>
            )
          })
        }
      </div>
        </div>
    )
}

export default Venue_animate