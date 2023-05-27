import React from 'react';
//image
import Image from 'next/image';
import Logo from '../../../../../public/images/Logowhite.png';
import appstore from '../../../../../public/landingimages/App store.svg';
import gpay from '../../../../../public/landingimages/gpay.svg';
//styles
import styles from './footer_desktop.module.scss';
import classNames from 'classnames';

import { useRouter } from 'next/router';

const Footer_desktop = () => {
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
        <div>
            <div className={styles.footer_desktop_background}>
        <div className={styles.row}>
            <div className={classNames(styles.col_1)}>
            </div>
            <div className={classNames(styles.col_10)}>
                <div className={styles.row}>
                    <div className={classNames(styles.col_6)}>
                        <div className={styles.footer_desktop_left}>
                            <a href='/' aria-label='Read more about Seminole tax hike'> 
                              <Image className={styles.footer_desktop_turf_logo} src={Logo} alt='logo' /> </a>
                            <div className={styles.footer_desktop_app_icons}>
                              <Image src={appstore} className={styles.desktop_apple_icon} alt='logo' loading='lazy' onClick={handleApplestore}/>                   
                             <Image className={styles.desktop_gpay_icon} src={gpay} alt='logo' loading='lazy' onClick={handlePlaystore}/> </div>
                             <p className={styles.iconic_text} style={{ fontFamily: "Nexa-Regular", marginTop:"52px" }}>Designed for sport & made in Madras</p> 
                        </div>
                    </div>
                    <div className={classNames(styles.col_6)}>
                        <div className={styles.row}>
                            <div className={classNames(styles.col_6)}>
                                <div className={classNames(styles.footer_company_desktop)}>
                                    <div className={classNames(styles.company_desktop_title)}>Company</div>                                 
                                   <div className={styles.footer_desktop_content} style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }} onClick={handleContactUs}>Contact Us</div>
                                   <div className={styles.footer_desktop_content} style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }} onClick={handleTermsofService}>Terms of Service</div>
                                 <div className={styles.footer_desktop_content} style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }} onClick={handlePrivacy}>Privacy Policy</div>
                                </div>
                            </div>
                            <div className={classNames(styles.col_6)}>
                                <div className={classNames(styles.footer_socal_desktop)}>
                                    <div className={classNames(styles.company_desktop_title)}>Social</div>
                              <div className={styles.footer_desktop_content} style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }}
                              onClick={handleInstagram}>Instagram</div>
                                  <div className={styles.footer_desktop_content}style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }}
                                  onClick={handleTwitter}>Twitter</div>
                              <div className={styles.footer_desktop_content} style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }}
                              onClick={handleLinkedIn}>LinkedIn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.col_1)}>
            </div>
        </div>
        </div>
    </div>
        // <div className={classNames(styles.footer_container)}>
        //         <div className={styles.footer_alignment}>
        //             <div >
        //                 <a href='/' aria-label='Read more about Seminole tax hike'> 
        //                 <Image className={styles.footer_logo_desktop} src={Logo} alt='logo' /> </a>
        //                 <div className={styles.playstoreicons_desktop}>
        //                     <div >
        //                         <a href='https://apps.apple.com/in/app/turf-town/id1490231308' aria-label='Read more about Seminole tax hike'>
        //                             <Image src={appstore} className={styles.footer_apps_icon} alt='logo' loading='lazy' /></a>
        //                     </div>
        //                     <div>
        //                         <a href='https://play.google.com/store/apps/details?id=com.turftown' aria-label='Read more about Seminole tax hike'>
        //                             <Image className={styles.footer_gpay_icon} src={gpay} alt='logo' loading='lazy' /></a> </div>
        //                 </div>
        //                 <p className={styles.footer_iconic}>Designed for sport & made in Madras</p>
        //             </div>
        //         </div>

        //             <div className={styles.footer_subdivision}>
        //                 <div className={styles.turftown_subpages}>
        //                     <div className={styles.footer_company}>
        //                         <div className={styles.footer_company_title}>Company</div>
        //                         <a href="/contact"><div className={styles.footer_content_desktop} style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }}>Contact Us</div></a>
        //                         <a href="/termsofservice"><div className={styles.footer_content_desktop}  style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }}>Terms of Service</div></a>
        //                         <a href="/privacy-policy" ><div className={styles.footer_content_desktop}  style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }}>Privacy Policy</div></a>
        //                     </div>
        //                 </div>
        //                 <div  className={styles.socialmedia_pages}>
        //                     <div className={styles.footer_social}>
        //                         <div className={styles.footer_social_title}>Social</div>
        //                         <a href='https://www.instagram.com/turftown.in/?hl=en' target="__blank" aria-label='Read more about Seminole tax hike'><div className={styles.footer_content_desktop}  style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }}>Instagram</div></a>
        //                         <a href='https://twitter.com/TurfTownOffl' target="__blank" aria-label='Read more about Seminole tax hike'><div className={styles.footer_content_desktop}  style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }}>Twitter</div></a>
        //                         <a href='https://www.linkedin.com/company/turf-town/' target="__blank" aria-label='Read more about Seminole tax hike'><div className={styles.footer_content_desktop} style={{ fontFamily: "Nexa-TextBook", color: '#C7C7C7' }}>LinkedIn</div></a>
        //                     </div>
        //                 </div>
        //             </div>


        // </div>
    )
}

export default Footer_desktop