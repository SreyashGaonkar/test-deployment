import Image from 'next/image'
import React from 'react'
//type
import { HeaderimagePropType } from './types'
//style
import styles from './headerImage.module.scss'

const HeaderImage = ({ imageUrl, onBack }: HeaderimagePropType) => {
    return (
        <div className={styles.container}>
            <div className={styles.button_container}>
                <div className={styles.round_button} onClick={onBack}><Image src={'/icons/arrow-right-small.png'} width={20} height={20} alt="headerImage" /></div>
                <div className={styles.round_button}> <Image src={'/icons/share_icon.png'} width={17} height={17} alt="headerImage" /></div>
            </div>
            <Image className={styles.image_container} src={imageUrl} width={390} height={346} alt="headerImage" />
        </div>
    )
}

export default HeaderImage