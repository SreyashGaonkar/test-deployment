import React from 'react';
//styles
import styles from './readyplayer_desktop.module.scss';
import classNames from 'classnames';
//image
import Image from 'next/image';
import Playbutton_desktop from '@/components/common/playbutton/playbutton_desktop/playbutton_desktop';
import Readyplayer from '../../../../../public/landingimages/Readyplayer.svg';
import Player from '../../../../../public/landingimages/newcricketer.webp';



const Readyplayer_desktop = () => {
    return (
        <div>
            <div className='container'>
                <div className={classNames(styles.ready_game)} >
                    <div className={classNames(styles.col_1)}>
                    </div>
                    <div className={classNames(styles.col_5)}>
                        <div
                            className={styles.yourgame_text_alignment}>
                               <Image src={Readyplayer} alt="" className={styles.game_always_image}/>
                            <div className={styles.game_always}>
                                <div className={styles.game_always_text} style={{ fontFamily: "Nexa-Bold", color: "#E1E2E5" }}>
                                Let's get a game going
                                </div>
                            </div>
                            <Playbutton_desktop />
                        </div>
                    </div>
                    <div className={classNames(styles.col_5)}>
                        <div >
                            <Image className={classNames(styles.cricketer)} src={Player} alt='play' 
                            loading="lazy" style={{ zIndex: 1, position: "absolute" }} />
                        </div>
                      
                    </div>
                    <div className={classNames(styles.col_1)}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Readyplayer_desktop