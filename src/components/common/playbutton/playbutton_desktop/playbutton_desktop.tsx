import React, {useState} from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './playbutton_desktop.module.scss'
import { isAndroid, isIOS } from 'react-device-detect';
import Landing_modal from '../../landing_modal/landing_modal';
import scan from '../../../../../public/landingimages/Turfqr.png';
import apple from '../../../../../public/landingimages/appleplaystores.svg';
import play from '../../../../../public/landingimages/playstoreicons.png';
import close from '../../../../../public/landingimages/popupclose1.svg';
const Playbutton_desktop = () => {
  // const handleDownload = (): void => {
  //   if (isAndroid) {
  //     window.location.href =
  //       "https://play.google.com/store/apps/details?id=com.turftown&hl=en_US&pli=1";
  //   } else if (isIOS) {
  //     window.location.href = "https://onelink.to/turftown";
  //   } else {
  //     window.location.href = "https://turftown.in";
  //   }
  // };
  const [showModal, setModal] = useState<boolean>(false);

return (
    <div>
        <div className={classNames(styles.playstore_button, styles['mt-36'])} onClick={()=>setModal(true)}>
            <div className={classNames(styles.start)}>Start playing</div>
            <div className={classNames(styles.playstore_icons)}>
                <Image src={'/landingimages/photoapple.webp'} alt="" height={24} width={20} />
                <Image src={'/landingimages/playstoreicons.png'} alt="" height={24} width={20}
                    className={classNames(styles['mt-1'])} />
            </div>
        </div>

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

export default Playbutton_desktop