
import React, { useState } from 'react'
import moment from 'moment';
import classNames from 'classnames';
import Image from 'next/image';
import Cookies from 'js-cookie';
//styles
import styles from './gameInfo.module.scss'
//components
import PlayerItem from '@/components/common/playerItem/playerItem';
import GameInfoCard from '../../game/gameInfoCard/gameInfoCard';
import Players from '../../game/Players/players';
import PrimaryButton from '@/components/common/primaryButton/primaryButton';
import TurfTownRewards from '../TurfTownRewards/turfTownRewards';
import Modal from '@/components/common/modal/modal';
//types
import { GameInfoType } from './types';



const GameInfo = ({ game }: GameInfoType) => {
    const [showModal, setModal] = useState<boolean>(false);

    const { host } = game
    return (
        <>
            <div className={styles.container}>
                <div className={styles["mb-20"]}>
                    <PlayerItem
                        title={host[0]?.name}
                        subTitle={"Join guys! We need players."}
                        imageUrl={host[0]?.profile_picture} id={''} onFollow={function (): void {
                            throw new Error('Function not implemented.');
                        }} />
                </div>

                <GameInfoCard
                    gameName={game?.name}
                    venueImage={game?.venue?.venue?.venue_display_picture}
                    sportName={game?.sport_name}
                    type={game?.type}
                    day={moment(game?.start_time).format("ddd")}
                    date={moment(game?.start_time).format("MMM Do")}
                    time={moment(game?.start_time).format("h:mm a") +
                        " - " +
                        moment(game?.end_time).format("h:mm a")}
                    venueName={game?.venue?.venue?.name}
                    venueArea={game?.venue?.venue?.area}
                    numberOfUsers={game.users.length}
                    limit={game.limit}
                    cost_per_head={game?.cost_per_head}
                    booking_status={game?.booking_status}
                />

                <div onClick={() => { setModal(true) }} className={classNames(styles['row'], styles['align-center'], styles['mt-20'], styles['cursor_pointer'])}>
                    <div className={classNames(styles['row'], styles['align-center'])}>
                        <Image className={classNames(styles['mr-8'])} height={13} width={13} alt='comment_icon' src={'/icons/comment_icon.png'} />
                        <p className={classNames(styles['caption_2'], styles['white3'])}>27 comments</p>
                    </div>
                    <div className={classNames(styles['ml-11'], styles['mr-12'], styles.grey_dot)} />
                    <div className={classNames(styles['row'], styles['align-center'])}>
                        <Image className={classNames(styles['mr-8'])} height={14} width={13} alt='shoutout_icon' src={'/icons/shoutout_icon.png'} />
                        <p className={classNames(styles['caption_2'], styles['white3'])}>27 comments</p>
                    </div>
                </div>



                <div
                    className={classNames(
                        styles["line"],
                        styles["mb-44"],
                        styles["mt-32"]
                    )} />

                <TurfTownRewards
                    totalCount={game?.limit} currentCount={game?.users?.length} min={0} max={0} onClick={() => { setModal(true) }} />

                <p className={classNames(styles["sectiontitle"], styles["mb-22"])}>
                    Host
                </p>
                {host.map((player, index) => {


                    return (
                        <div
                            key={index}
                            className={host.length > 1 ? styles["mb-37"] : styles["mb-0"]}
                        >
                            <PlayerItem
                                extra
                                title={player?.name}
                                subTitle={player?.handle}
                                imageUrl={player?.profile_picture}
                                sportName={game?.sport_name}
                                skill_rating={player?.skill_rating}
                                sportInterest={player?.sports_interest}
                                id={player?._id}
                                showFollow={!!Cookies.get('ACCESS_TOKEN')}
                                onFollow={() => { setModal(true) }} />
                        </div>
                    );
                })}

                <div
                    className={classNames(
                        styles["line"],
                        styles["mb-44"],
                        styles["mt-36"]
                    )} />

                <Players
                    users={game?.users}
                    host={game?.host}
                    sportName={game?.sport_name} onFollow={() => { setModal(true) }}
                    showFollow={true}
                />

                <div className={classNames(styles['row'], styles['align-center'], styles['mb-37'])}>
                    <Image width={16} height={19} alt={'receipt_icon'} src={'/icons/receipt_icon.png'} />
                    <p className={classNames(styles['headline'], styles['white1'], styles['ml-20'])}>View receipt</p>
                </div>
                <div className={classNames(styles['row'], styles['align-center'], styles['mb-37'])}>
                    <Image width={19} height={19} alt={'exit_icon'} src={'/icons/exit_icon.png'} />
                    <p className={classNames(styles['headline'], styles['white1'], styles['ml-17'])}>Leave game</p>
                </div>

                <Modal show={showModal} onClose={() => setModal(false)}>
                    <div className={styles.modal}>
                        <div className={styles.center}>
                            <p
                                className={classNames(
                                    styles["subtitle"],
                                    styles["$White3"],
                                    styles["$White3"],
                                    styles["align_text_center"]
                                )}
                            >
                                Get the app & start playing!
                            </p>
                        </div>
                        <div className={styles.download_container} id="playstoreicons">
                            <div className={styles["mr-20"]}>
                                <a
                                    href="https://apps.apple.com/in/app/turf-town/id1490231308"
                                    target="__blank"
                                >
                                    <Image
                                        src={"/images/appstore1.png"}
                                        height={48}
                                        width={140}
                                        alt="apple store"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.turftown&hl=en_US"
                                    target="__blank"
                                >
                                    <Image
                                        src={"/images/playstore.png"}
                                        height={48}
                                        width={152}
                                        alt="google play"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </Modal>

            </div>
            <div className={styles.bottom_button_container}>
                <PrimaryButton
                    text="Invite players"
                    rightIcon={
                        <Image src={"/images/arrow.png"} width={14} height={10} alt="" />
                    }
                    onPress={() => {
                        setModal(true);
                    }}
                />
            </div>
        </>

    )
}

export default GameInfo