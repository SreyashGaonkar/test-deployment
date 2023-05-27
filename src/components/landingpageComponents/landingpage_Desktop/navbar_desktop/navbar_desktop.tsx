import React,{useState} from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
//styles
import classNames from 'classnames';
import styles from './navbar_desktop.module.scss';
//image
import Image from 'next/image';
import Logo from '../../../../../public/images/Logowhite.png';
import getturftownbutton from '../../../../../public/landingimages/getturftownbutton.svg';
import Landing_modal from '@/components/common/landing_modal/landing_modal';
import scan from '../../../../../public/landingimages/Turfqr.png';
import apple from '../../../../../public/landingimages/appleplaystores.svg';
import play from '../../../../../public/landingimages/playstoreicons.png';
import close from '../../../../../public/landingimages/popupclose1.svg';

const Navbar_desktop = () => {

    const router = useRouter();
    const [showModal, setModal] = useState<boolean>(false);
    const homePageRoute = ()=>{
        router.push('/')
    }
    return (
        <div >
            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: -70, opacity: 0 }}
                transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2 }}>
                <nav className={classNames(styles.nav_desktop_container)}>
                    <Image src={Logo} alt='desktoplogo' className={classNames(styles.nav_desktop_logo)} onClick={homePageRoute}/>
                    <Image src={getturftownbutton} alt='' className={classNames(styles.getTurf_desktop_button)} onClick={()=>setModal(true)}/>
                </nav>
            </motion.div>

            <Landing_modal  show={showModal} onClose={() => setModal(false)}>
        <div className="modal-dialog modal-lg modal-dialog-centered" >
                        <div className="modal-content" id='modal-content'>
                            <div className={classNames(styles.modal_header)}>
                                <div className={styles.modal_title}>A game is around the
                                    corner,
                                    <div style={{ textAlign: "left" }}> scan this QR code.</div></div>
                                <div >
                                    <Image src={close} className={styles.closebutton} alt="close"
                                    onClick={()=>setModal(false)}/>
                                </div>
                            </div>
                            <div className={classNames(styles.modal_body)}>
                                <div className={styles.modal_body_scan}>
                                    <ul className={classNames(styles.modal_list)}>
                                        <li className='mb-1.5 lg:mb-3 list-disc listdisc' style={{ color: "#B4B4B8", fontFamily: "Nexa-TextBook" }}>Open your phone camera and point it at the QR code.</li>
                                        <li className='mb-1.5 lg:mb-3 list-disc listdisc' style={{ color: "#B4B4B8", fontFamily: "Nexa-TextBook" }}>Alternatively, download any QR code scanner to scan.</li>
                                        <li className='mb-1 list-disc listdisc' style={{ color: "#B4B4B8", fontFamily: "Nexa-TextBook" }}>Click on the link generated to download Turf Town.</li>
                                    </ul>
                                    <div><Image src={scan} className={styles.scanimages} alt="qr" loading='lazy'/></div>
                                </div>
                            </div>
                            <div >
                                <div className={classNames(styles.modal_playstore_icons)}>
                                    <a href='https://apps.apple.com/in/app/turf-town/id1490231308' target="__blank" aria-label='Read more about Seminole tax hike'>  <Image src={apple} alt="apple" className={styles.mobileapple} loading='lazy' /></a>
                                    <a href='https://play.google.com/store/apps/details?id=com.turftown' target="__blank" aria-label='Read more about Seminole tax hike'> <Image src={play} className={styles.mobileandroid} alt="lay" loading='lazy' /></a></div>
                            </div>
                        </div>
                    </div>
            </Landing_modal> 
        </div>
    )
}

export default Navbar_desktop