
import Image from 'next/image';
import classNames from 'classnames';
import styles from './playbutton.module.scss'
import { isAndroid, isIOS } from 'react-device-detect';

const Playbutton = () => {

    const handleDownload = (): void => {
        if (isAndroid) {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.turftown&hl=en_US&pli=1";
        } else if (isIOS) {
          window.location.href = "https://onelink.to/turftown";
        } else {
          window.location.href = "https://turftown.in";
        }
      };

    return (
        <div>
            <div className={classNames(styles.playstore_button, styles['mt-36'])} onClick={handleDownload}>
                <div className={classNames(styles.start)}>Start playing</div>
                <div className={classNames(styles.playstore_icons)}>
                    <Image src={'/landingimages/photoapple.webp'} alt="" height={20} width={16} />
                    <Image src={'/landingimages/googleplay.svg'} alt="" height={20} width={20}
                        className={classNames(styles['mt-1'])} />
                </div>
            </div>
        </div>
    )
}

export default Playbutton