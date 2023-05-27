import React, { useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
//styles
import styles from './reviewItem.module.scss'
//type
import { ReviewItemPropType } from './types'

const ReviewItem = ({ imageUrl, userName, comment, date }: ReviewItemPropType) => {

    const [showMore, setShowMore] = useState<boolean>(false);

    return (
        <div className={styles.container}>
            <div className={styles.player_container}>
                <div className={styles.left}>
                    <Image className={styles.image} height={49} width={49} src={'/images/abilashpic.png'} alt={"player Image"} />
                </div>
                <div className={styles.right}>
                    <p className={styles['title']}>{userName}</p>
                    <p className={classNames(styles['subtitle'], styles['white2'])}>{date}</p>
                </div>
            </div>
            <div className={classNames(styles['mt-16'], styles.comment_container, showMore && styles.full_width)}>
                <p className={classNames(styles['sub'], styles['white2'])}>{comment}</p>
            </div>
            {comment.length > 190 && (<p onClick={() => { setShowMore(!showMore) }} className={classNames(styles['sub'], styles['blue1'], styles['mt-18'])}>{showMore ? 'Show Less' : 'Show More'}</p>)}
        </div>
    )
}

export default ReviewItem