import React, { useMemo } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
//styles
import styles from './turfTownRewards.module.scss'
//component
import PrimaryButton from '@/components/common/primaryButton/primaryButton'
import ProgressBar from '@/components/common/progressBar/progressBar'
//type
import { ButtonType } from '@/components/common/primaryButton/types'
import { TurfTownRewardsProps } from './types'

const TurfTownRewards = ({ totalCount, min, max, currentCount, onClick }: TurfTownRewardsProps) => {

    const progress = useMemo(() => {
        if (currentCount > 0) {
            return (currentCount * 100) / totalCount;
        } else {
            return 0
        }
    }, [currentCount, totalCount]);


    return (
        <div className={classNames(styles.container, styles['borderBottom'], styles['pt-36'], styles['pb-48'])}>
            <p className={classNames(styles['title_4'], styles['white1'], styles['mb-8'])}>Turf Town Rewards</p>
            <p className={classNames(styles['sub'], styles['white2'], styles['lh-26'], styles['mr-3'])}>Gather 10 or more players to earn upto <span className={classNames(styles['sub'], styles['blue1'], styles['lh-26'], styles['mr-3'])}>500</span>
                <Image className={classNames(styles['mr-3'], styles['mb_-4'])} height={17} width={17} src={'/icons/coin_blue.png'} alt="coin icon" />
                <span className={classNames(styles['sub'], styles['white2'], styles['lh-26'])}>as a team. </span>
            </p>

            <div className={classNames(styles.progress_container, styles['mt-28'])}>
                <p className={classNames(styles['card_text_2'], styles['white1'])}>{currentCount} <span className={classNames(styles['card_text_2'], styles.dark_blue_text)}>{`/${totalCount} Players`}</span></p>

                <div className={classNames(styles['mt-20'], styles['row'], styles.bar_container)}>
                    <ProgressBar progress={progress} />
                    <div className={classNames(styles['gift_container'], styles.right_56)}>
                        <p className={classNames(styles['card_text_2'], styles.dark_blue_text, styles['mb-8'])}>10</p>

                        <Image height={32} width={32} alt="gift" src={'/icons/treasure_icon.png'} />

                    </div>
                    <div className={classNames(styles['gift_container'], styles.right_0)}>
                        <p className={classNames(styles['card_text_2'], styles.dark_blue_text, styles['mb-8'])}>14</p>

                        <Image height={32} width={32} alt="gift" src={'/icons/treasure_icon.png'} />

                    </div>
                </div>
            </div>

            <div className={classNames(styles['mt-28'], styles.button_container)}>
                <PrimaryButton buttonType={ButtonType.BORDER} text='More info' onPress={onClick}
                    rightIcon={<Image width={12} height={9} alt="arrow" src={'/icons/white_right_arrow.png'} />}
                />
            </div>
        </div>
    )
}

export default TurfTownRewards