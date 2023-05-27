import React from 'react';
import styles from './playerInfocard.module.scss';
import classNames from 'classnames';
import { GameInfoCardPropType } from './types';
import Image from 'next/image';

const PlayerInfoCard = ({ userName, playerImage, usernickName, usersFollowers, usersFollowing, usersBio }: GameInfoCardPropType): JSX.Element => {

  return (
    <>
      <div className={classNames(styles.player_card_container, styles["mt-56"])}>
        <div className={classNames(styles.player_card, styles["mb-8"])}>
          <div className='-mt-1.5'>

            <div className={classNames(styles.card_body)}>
              <div className={classNames(styles.left)}>
                <Image className={styles.player_profile} height={55} width={55} alt='venue image' src={playerImage} />
              </div>
              {/* <Image src={playerImage} width={55} height={55} alt="" className={styles.player_profile} />              */}
              <div>
                <div className={styles.player_name}>{userName}</div>
                <div className={styles.player_nickName}>@{usernickName}</div>
                <div className={styles.player_follows}>
                  <div className={styles.player_followers} >{usersFollowers?.length}
                    <div className={styles.followers}>followers</div></div>
                  <div className={classNames(styles.dot_image)}><Image src={'/images/dott.png'} height={5} width={4} alt="" /></div>
                  <div className={styles.player_following} >{usersFollowing?.length}
                    <div className={styles.following}>following</div></div>
                </div>
              </div>
            </div>
            <div className={classNames(styles.player_bio)}>
              {usersBio[0]}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PlayerInfoCard