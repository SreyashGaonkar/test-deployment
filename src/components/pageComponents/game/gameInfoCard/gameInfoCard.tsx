
import { useCallback } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
//styles

import styles from './gameInfoCard.module.scss'
//types
import { GameInfoCardPropType } from './types'
import ProgressBar from '@/components/common/progressBar/progressBar'
import { capitalise } from '@/helper/capitalise'


const GameInfoCard = ({ gameName, venueImage, sportName, type, day,
    date,
    time,
    venueName,
    venueArea, numberOfUsers, limit, booking_status, cost_per_head }: GameInfoCardPropType): JSX.Element => {

    let per_person = Math.round((cost_per_head) / (limit))

    const renderGameSymbol = useCallback(() => {
        switch (sportName) {
            case "football":
                return (
                    <div className=""><Image src={'/images/foot1.png'} width={19}
                        height={18} alt="" /></div>
                )
            case "basketball":
                return (
                    <div className="gameIcon"><Image src={'/images/bas1.png'} width={19}
                        height={18} alt="" /></div>
                )
            case "badminton":
                return (
                    <div className="gameIcon"><Image src={'/images/badminton-blue.png'} width={19}
                        height={18} alt="" /></div>
                )
            case "cricket":
                return (
                    <div className="gameIcon"><Image src={'/images/cricket-blue.png'} width={19}
                        height={18} alt="" /></div>
                )
            default:
                return <></>;
        }
    }, [sportName])

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image className={styles.venue} height={64} width={64} alt='venue image' src={venueImage} />
            </div>
            <div className={styles.right}>
                <p className={classNames(styles['title'], styles['mb-8'])}>{gameName}</p>
                <div className={styles.row}>
                    <div className={classNames(styles['mr-12'], styles.image_container)}>
                        {renderGameSymbol()}
                    </div>
                    <p className={classNames(styles['subtitle'], styles['white2'])}>{capitalise(sportName)}</p>
                    <div className={styles.dot}></div>
                    <p className={classNames(styles['subtitle'], styles['white2'])}>{type}</p>
                </div>
                <div className={classNames(styles.dottedline, styles['mt-16'], styles['mb-16'])} />
                <div className={classNames(styles.row, styles['mb-9'])}>
                    <div className={classNames(styles['mr-12'], styles.image_container)}>
                        <Image width={20} height={20} src={'/images/calendar.png'} alt={'calendar'} />
                    </div>
                    <p className={classNames(styles['subtitle'], styles['white2'])}>{day},  {date}</p>
                </div>
                <div className={classNames(styles.row, styles['mb-9'])}>
                    <div className={classNames(styles['mr-12'], styles.image_container)}>
                        <Image width={20} height={20} src={'/images/clock.png'} alt={'clock'} />
                    </div>
                    <p className={classNames(styles['subtitle'], styles['white2'])}>{time}</p>
                </div>
                <div className={classNames(styles.row, styles['mb-9'])}>
                    <div className={classNames(styles['mr-12'], styles.image_container)}>
                        <Image width={20} height={20} src={'/images/locationfinder.png'} alt={'locationfinder'} />
                    </div>
                    <p className={classNames(styles['subtitle'], styles['white2'])}>{venueName}, {venueArea}</p>
                </div>
                <div className={classNames(styles.dottedline, styles['mt-16'], styles['mb-16'])} />
                <div className={classNames(styles.row, styles['mb-9'])}>
                    <div className={classNames(styles['mr-12'], styles.image_container)}>
                        <Image width={24} height={18} src={'/images/grouppersons.png'} alt={'players'} />
                    </div>
                    <ProgressBar progress={Math.round((numberOfUsers * 100) / limit)} />
                    <p className={classNames(styles['subtitle'], styles['white2'], styles['ml-11'])}>{numberOfUsers}/{limit}</p>
                </div>
                <div className={classNames(styles.row, styles['mb-22'], styles['mt-24'])}>
                    <div className={classNames(styles['capsule'], styles['mr-10'])}>
                        <p className={styles.capsuletext}>₹ {per_person} /</p>
                        <Image className={styles['ml-3']} src={'/images/person.png'} width={14}
                            height={14} alt="" />
                    </div>
                    <div className={styles['capsule']}>
                        <p className={classNames(styles.capsuletext, styles['green'])} >{booking_status}</p>
                        <Image className={styles['ml-8']} src={'/images/Subtract.png'} width={18}
                            height={18}
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default GameInfoCard