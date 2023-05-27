import React, { useCallback } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
//styles
import styles from './gamecard.module.scss'
//type
import { GameCardProps } from './types'

const GameCard = ({ title, subTitle, imageUrl, sportName }: GameCardProps) => {

    const renderGameSymbol = useCallback(() => {
        switch (sportName) {
            case "football":
                return (
                    <Image src={'/images/foot1.png'} width={19}
                        height={18} alt="" />
                )
            case "basketball":
                return (
                    <Image src={'/images/bas1.png'} width={19}
                        height={18} alt="" />
                )
            case "badminton":
                return (
                    <Image src={'/images/badminton-blue.png'} width={19}
                        height={18} alt="" />
                )
            case "cricket":
                return (
                    <Image src={'/images/cricket-blue.png'} width={19}
                        height={18} alt="" />
                )
            default:
                return <></>;
        }
    }, [sportName])
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image className={styles.image} height={49} width={49} src={imageUrl} alt={"player Image"} />
            </div>
            <div className={styles.right}>
                <p className={classNames(styles['title'], styles['lh-24'])}>{title}</p>
                <p className={classNames(styles['subtitle'], styles['white2'], styles['lh-24'])}>{subTitle}</p>
                <div className={classNames(styles.row, styles['mb-22'], styles['mt-24'])}>
                    <div className={classNames(styles['capsule'], styles['mr-10'])}>
                        {renderGameSymbol()}
                    </div>
                    <div className={styles['capsule']}>
                        <p className={classNames(styles['caption_2'], styles['white2'])} >6 vs 6</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default GameCard