import React from 'react';
//styles
import styles from './venuesList.module.scss';
import classNames from 'classnames';
//images
import Image from 'next/image';
import shut from '../../../../../public/landingimages/shut.svg';
import dds from '../../../../../public/landingimages/dd.svg';
import whistle from '../../../../../public/landingimages/whistle.webp';
import tikitaka from '../../../../../public/landingimages/tikitaka.svg';
import fcmarina from '../../../../../public/landingimages/fcmarina.png';
import manrun from '../../../../../public/landingimages/manrun.png';
import ground1 from '../../../../../public/landingimages/newmg1.webp';
import ground2 from '../../../../../public/landingimages/newmg2.webp';
import ground3 from '../../../../../public/landingimages/newmg3.webp';
import ground4 from '../../../../../public/landingimages/newmg4.webp';
import ground5 from '../../../../../public/landingimages/newmg5.webp';
import ground6 from '../../../../../public/landingimages/newmg6.webp';
import ground11 from '../../../../../public/landingimages/newmg7.webp';
import ground22 from '../../../../../public/landingimages/newmg8.webp';
import ground33 from '../../../../../public/landingimages/newmg9.webp';
import ground44 from '../../../../../public/landingimages/newmg10.webp';
import ground55 from '../../../../../public/landingimages/newmg11.webp';
import 'animate.css'
const VenuesList = () => {
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
        <>
            <div className={styles.venues_background}>
                <div className={classNames(styles.venues_container)}>
                    <div className={classNames(styles.venues_title)}>
                        Home to some of the
                    </div>
                    <div className={classNames(styles.venues_title1,)}>
                        biggest venues in Town
                    </div>
                </div>

                <div className={styles.venue_area}>
                    <Image src={shut} alt="..." height={70} width={70} />
                    <Image src={dds} alt="..." height={70} width={70} />
                    <Image src={whistle} alt="..." height={60} width={60} />
                    <Image src={dds} alt="..." height={70} width={70} />
                </div>
                <div className={styles.venue_area1}>
                    <Image src={tikitaka} alt="..." height={65} width={65} />
                    <Image src={fcmarina} alt="..." height={65} width={65} />
                    <Image src={manrun} alt="..." height={65} width={65} />

                </div>
                <div className={classNames(styles.animate_container)}>
                    <div className={styles.animate_venue_images}>
                        {
                            theme.map((data, key) => {
                                return (
                                    <>
                                        <Image key={key} src={data.path} alt='venuegrounds' height={84} width={133} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={classNames(styles.animate_container1)}>
                    <div className={styles.animate_venue_images2}>
                        {
                            themes.map((data, key) => {
                                return (
                                    <>
                                        <Image key={key} src={data.path} alt='venuegrounds' height={84} width={133} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default VenuesList