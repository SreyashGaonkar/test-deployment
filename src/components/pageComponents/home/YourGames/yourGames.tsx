import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
//styles
import styles from './yourGames.module.scss'
import classNames from 'classnames';
import { upcomingGames } from '@/apis/upcomingGames';
import { GameType } from '@/routes/game/type';
import moment from 'moment';
import { useRouter } from 'next/router';

const YourGames = () => {
    const router = useRouter();

    const [games, setGames] = useState<GameType[]>([])

    const getGames = useCallback(async () => {
        try {
            const res = await upcomingGames();
            setGames(res);
        } catch (e) {
            console.log('e', e);
        }
    }, [])

    useEffect(() => {
        getGames()
    }, [getGames])


    const gameItem = useCallback((id: string, imageUrl: string, title: string, subTitle: string, current: number, limit: number) => {
        return (
            <div onClick={() => {
                router.push(`/game/${id}`)
            }} className={classNames(styles.card, styles['mr-16'])}>
                <div className={styles.left}>
                    <Image className={styles.image} height={42} width={42} src={imageUrl} alt={"player Image"} />
                </div>
                <div className={classNames(styles.right, styles.w_80)}>
                    <div className={classNames(styles['row'], styles['align-center'], styles['justify-space-between'])}>
                        <p className={classNames(styles['title'], styles['lh-24'])}>{title}</p>
                        <div className={classNames(styles['row'], styles['align-center'])}>
                            <Image className={styles['mr-6']} width={17} height={12} alt={'icon'} src={'/icons/players.png'} />
                            <p className={classNames(styles['card_text'], styles['white1'])}>{current}</p>
                            <p className={classNames(styles['card_text'], styles['white3'])}>/{limit}</p>
                        </div>
                    </div>

                    <p className={classNames(styles['subtitle'], styles['white2'], styles['lh-24'])}>{subTitle}</p>
                </div>

            </div>
        )
    }, [router])

    if (games.length === 0) return null;

    return (
        <div className={classNames(styles.container, styles['mb-64'], styles['ph-16'])}>
            <div className={classNames(styles['mb-28'], styles['row'], styles['align-center'])}>
                <Image width={19} height={20} alt={'calendar'} src={'/images/calendar.png'} />
                <p className={classNames(styles['title_1'], styles['white1'], styles['ml-11'])}>Your Games</p>
            </div>
            <div className={classNames(styles['row'], styles['align-center'], styles['scroll-y'])}>
                {games.map((game) => {
                    return (
                        <>
                            {gameItem(game?._id, game?.venue?.venue?.venue_display_picture, game?.name, moment(game?.start_time).format("MMM Do") + " . " + moment(game?.start_time).format("h:mm a") +
                                " - " +
                                moment(game?.end_time).format("h:mm a"), game?.users?.length, game?.limit)}
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default YourGames;