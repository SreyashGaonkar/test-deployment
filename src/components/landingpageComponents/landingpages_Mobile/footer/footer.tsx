import React from 'react';
import classNames from 'classnames'
import styles from './footer.module.scss'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logowhite from '../../../../../public/images/Logowhite.png';
import apple from '../../../../../public/landingimages/newapple.webp'
import playstore from '../../../../../public/landingimages/mobilegoogleplay.webp'
const Footer = () => {

    const router = useRouter();

    const handlePlaystore = ()=>{
        // router.push('https://play.google.com/store/apps/details?id=com.turftown&hl=en_US&pli=1')
        router.push('https://play.google.com/store/apps/details?id=com.turftown')
    }
    const handleApplestore = ()=>{
        router.push('https://apps.apple.com/in/app/turf-town/id1490231308')
    }

    const handleContactUs = () =>{
        router.push('/contact')
    }

    const handleTermsofService = () =>{
        router.push('/termsofservice')
    }

    const handlePrivacy = () =>{
        router.push('/privacy-policy')
    }
    const handleInstagram = () =>{
        router.push('https://www.instagram.com/turftown.in/?hl=en')
    }
    const handleTwitter = () =>{
        router.push('https://twitter.com/TurfTownOffl')
    }
    const handleLinkedIn = () =>{
        router.push('https://www.linkedin.com/company/turf-town/')
    }
   
    return (
        <>
            <div className={classNames(styles.footer_background)}>
                <div className={classNames(styles['mt-56'])}>
                    <Image src={Logowhite} alt="" className={styles.Footer_turf_logo} />
                </div>
                <div className={classNames(styles.footer_title, styles['mt-56'])}>
                    <div>
                        <div className={classNames(styles.title_footer)}>Company</div>
                        <div className={classNames(styles.footer_content, styles['mt-24'])} onClick={handleContactUs}>Contact us</div>
                        <div className={classNames(styles.footer_content, styles['mt-20'])} onClick={handleTermsofService}>Terms of Service</div>
                        <div className={classNames(styles.footer_content, styles['mt-20'])} onClick={handlePrivacy}>Privacy Policy</div>

                    </div>
                    <div>
                        <div className={classNames(styles.title_footer)}>Social</div>
                        <div className={classNames(styles.footer_content, styles['mt-24'])} onClick={handleInstagram}>Instagram</div>
                        <div className={classNames(styles.footer_content, styles['mt-20'])} onClick={handleTwitter}>Twitter</div>
                        <div className={classNames(styles.footer_content, styles['mt-20'])} onClick={handleLinkedIn}>Linked In</div>
                    </div>
                </div>
                <div className={classNames(styles.playstores_icons, styles['mt-56'])}
                style={{display:"flex",gap:"30px"}}>
                        <Image src={apple} alt=""
                        className={classNames(styles.Appstore_icon)}  onClick={handlePlaystore} />
                        <Image src={playstore} alt="" 
                        className={classNames(styles.Playstore_icon)} onClick={handleApplestore} />         
                </div>
                <div className={classNames(styles.terms_condition)}>Designed for sport & made in Madras</div>
            </div>
        </>
    )
}

export default Footer