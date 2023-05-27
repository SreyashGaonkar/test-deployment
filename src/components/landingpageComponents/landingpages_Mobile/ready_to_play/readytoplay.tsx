import classNames from 'classnames'
import styles from './readytoplay.module.scss'
import Image from 'next/image'
import Playbutton from '@/components/common/playbutton/playbutton';
import Readyplayer from '../../../../../public/landingimages/Readyplayer.svg';

const Readytoplay = () => {
  return (
    <div className={classNames(styles.ready_to_play_content)}>
        <Image className={classNames(styles.readyplayer_text_image, styles["mb-8"])} 
        src={Readyplayer} alt="" />
    <div className={classNames(styles.lets_go)}>
        Let's get a game going
    </div>
    <Playbutton />
    {/* <Image src={'/landingimages/Footerflare3.svg'} alt="" height={150} width={200}
    style={{opacity:0}}/> */}
    </div>
  )
}

export default Readytoplay