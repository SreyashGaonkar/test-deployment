import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
//styles
import styles from './exploreVenue.module.scss'


const ExploreVenue = () => {
    return (
        <div className={styles.container}>
            <p className={classNames(styles['title_2'], styles['white10'], styles['mb-6'])}>Hey sidnolid 👋🏼</p>
            <p className={classNames(styles['sub_3'], styles['grey'])}>Explore venues nearby</p>
            <Image alt={'image'} width={134} height={105} className={styles.image_container} src={'/icons/basketBall.png'} />
        </div>
    )
}

export default ExploreVenue