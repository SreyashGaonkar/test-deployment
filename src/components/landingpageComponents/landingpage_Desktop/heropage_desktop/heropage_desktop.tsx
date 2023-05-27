import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion';
//styles
import classNames from 'classnames';
import styles from './heropage_desktop.module.scss';
import "animate.css";
//image
import Image from 'next/image';
import stroke from '../../../../../public/landingimages/linehero.webp';
import purpleshadow from '../../../../../public/landingimages/purpleshadow.webp';
import shadows from '../../../../../public/landingimages/shs.svg';
import newlandingimage from '../../../../../public/landingimages/oldhero.webp';
//components
import Playbutton_desktop from '@/components/common/playbutton/playbutton_desktop/playbutton_desktop';


const Heropage_desktop = () => {

    const [animation, setAnimation] = useState(true);
    const [image, setImage] = useState(true);

    useEffect(() => {
        setTimeout(() => setAnimation(false), 2350);
        setTimeout(() => setImage(false), 10);
    }, [])

  return (
    <div>
           < >    
                <div className='container'>
                    <div className={classNames(styles.findgames)}>
                        <div className={classNames(styles.col_1)}>
                        </div>
                        <div className={classNames(styles.col_6)} id='title' >
                            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 150, opacity: 0 }}
                                transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.3 }} >
                                    <div className={styles.firstpagetextss}>
                                    <div className={styles.findText} id='find' style={{ fontFamily: "Nexa-Bold", color: '#E1E2E5' }}>
                                        The easiest way
                                    </div>
                                </div>
                                <div className={styles.firstpagetextss}>
                                    <div className={styles.findText2} >
                                        <div style={{ fontFamily: "Nexa-Bold", color: '#E1E2E5' }}>to</div> 
                                        {
                                            animation ?
                                                <><div className={styles.newwords}>
                                                    <span style={{ fontFamily: "Nexa-Bold", color: "#E1E2E5" }} className={styles.rotationWords1}  id='appearance'>play<div className={styles.games_animate}>sports</div> </span>
                                                </div></> :
                                                <>
                                                    <div className={styles.newwords}>
                                                        <span className={styles.rotationWords} style={{ fontFamily: "Nexa-Bold", color: '#E1E2E5' }}> host <div className={styles.games_animate}>games</div> </span>
                                                        <span className={styles.rotationWords}  style={{ fontFamily: "Nexa-Bold", color: '#E1E2E5' }}>meet <div className={styles.games_animate}>new players</div></span>
                                                        <span style={{ fontFamily: "Nexa-Bold", color: "#E1E2E5" }} className={styles.rotationWords}  >play<div className={styles.games_animate}>sports</div> </span>
                                                    </div>
                                                </>
                                        }
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 150, opacity: 0 }}
                                transition={{ type: 'spring', damping: 39, stiffness: 269, mass: 1.6, delay: 0.5 }}>
                                <div className={styles.exploreYour} style={{ fontFamily: "Nexa-Regular", color: "#B4B4B4" }}> 
                                Explore your neighbourhood and find 
                                <br/>a game in no time. </div><br />
                                <div className={classNames(styles.exploreYour1)} style={{ fontFamily: "Nexa-Regular", color: "#B4B4B4" }}> 
                                Explore your neighbourhood and find a game in no time. </div>
                                <Playbutton_desktop />
                            </motion.div>
                        </div>
                        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }}
                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.4 }} 
                            className={classNames(styles.col_5)} id='newlandingimages' >
                            {
                                image ? <></>
                                    :
                                    <Image className={styles.newimage1} id='doubleimage' src={newlandingimage} alt='play' />
                            }
                            <Image src={shadows} className={styles.purplebackground} alt="shadow4" />
                            <Image src={purpleshadow} alt="shadow3" className={styles.purpleshadownew}/>
                        </motion.div>
                        <div className={classNames(styles.col_1)}>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.strokeLine}> */}
              <Image  className={styles.strokeLine} src={stroke} alt='stroke' />
              {/* </div> */}
               
            </>

        
    </div>
  )
}

export default Heropage_desktop