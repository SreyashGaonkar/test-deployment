import Image from 'next/image'
import React from 'react'
//types
import { MessagesPropType } from './types'
//styles
import styles from './messages.module.scss'
import classNames from 'classnames'

const Messages = ({ imageUrl, time, title, date }: MessagesPropType) => {
  return (
    <>
      <div className={styles.container}>
        <div className={classNames(styles.message_container, styles.color_border, styles['mb-44'], styles['mt-180'])}>
          <p className={classNames(styles['card_text'], styles['white2'])}>
            <span className={classNames(styles['card_text'], styles['blue1'])}>You </span>
            joined the game
          </p>
        </div>

        <div className={classNames(styles.message_info_container, styles.color_border)}>
          <div className={classNames(styles['mb-30'])}>
            <p className={classNames(styles['caption'], styles['white1'], styles['align_text_center'])}>Please be on time to the venue to </p>
            <p className={classNames(styles['caption'], styles['white1'], styles['align_text_center'])}>ensure the game goes as planned!</p>
          </div>
          <div className={styles['mb-16']}>
            <Image className={classNames(styles.round_image)} height={56} width={56} src={imageUrl} alt={'game image'} />
          </div>


          <p className={classNames(styles['sub'], styles['white1'], styles['mb-4'])}>{title}</p>

          <div className={classNames(styles['row'], styles['align-center'])}>
            <p className={classNames(styles['caption'], styles['white2'], styles['mb-4'])}>{date}</p>
            <div className={classNames(styles['dot'], styles['ml-8'], styles['mr-8'])} />
            <p className={classNames(styles['caption'], styles['white2'], styles['mb-4'])}>{time}</p>
          </div>
        </div>

        <div className={styles.bottom_button_container}>
          <div className={classNames(styles.download_container, styles.color_border, styles['align-center'])}>
            <p className={classNames(styles.sub, styles['white2'])}>Download the app to start chatting</p>
          </div>
        </div>

      </div>

    </>

  )
}

export default Messages