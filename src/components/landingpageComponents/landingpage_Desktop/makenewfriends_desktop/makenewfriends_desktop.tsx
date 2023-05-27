import React from 'react';
import {motion} from 'framer-motion';
//image
import Image from 'next/image';
import purplelines from '../../../../../public/landingimages/purplevector_optimized.webp';
import purplemen from '../../../../../public/landingimages/makenewfriends.webp';
//styles
import classNames from 'classnames';
import styles from './makenewfriends_desktop.module.scss'

const Makenewfriends_desktop = () => {
  return (
    <>
<div className='container'>
        <div className={classNames(styles.ready_game)} >
            <div className={classNames(styles.col_1)}>
            </div>
            <div className={classNames(styles.col_5)}>
            <motion.div animate={{ y: 100, opacity: 0 }}
                          transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay:0.15}}
                          whileInView={{ y: -10, opacity:1 }}
                          viewport={{ once: true }} 
                          className={styles.yourgame_text_alignment}>          
            
             <div className={styles.game_always}>
                    <div className={styles.game_always_text}  style={{ fontFamily: "Nexa-Bold", color: '#E1E2E5' }}>
                     Make new<span className={styles.bluefriends}> friends</span>
                    </div>
                </div>
                <div className={styles.game_always}>
                    <div className={styles.game_always_text}  style={{ fontFamily: "Nexa-Bold",color:"#E1E2E5"  }}>
                       on court
                   </div>
                </div>
                <div className={styles.explain1} style={{ fontFamily: "Nexa-TextBook", color:"#C5C5C5" }}  id="textalignment">
                Meet interesting players who share your
                love for the game and grow your
                sports circle!
                </div>
                <div className={styles.explain} style={{ fontFamily: "Nexa-TextBook", color:"#C5C5C5" }}  id="textalignments">
                Meet interesting players who share your love<br/>
                for the game and grow your sports circle!<br/>              
                </div>
              
                </motion.div>         
            </div>
            <div className={classNames(styles.col_5)}>
        <motion.div animate={{ y:100, opacity: 0 }}
                          transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay:0.15}}
                          whileInView={{ y: -10, opacity:1 }}
                          viewport={{ once: true }} >           
          <Image className={classNames(styles.purplelines)}   src={purplelines} alt='play' loading='lazy'/>
            <Image className={classNames(styles.purpleman)}src={purplemen} alt='play' loading="lazy" style={{zIndex: 1,position: "absolute"}}/>
            </motion.div>          
                <br /><br />
            </div>         
            <div className={classNames(styles.col_1)}>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Makenewfriends_desktop