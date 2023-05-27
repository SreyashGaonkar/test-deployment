import classNames from "classnames";
import React, { useCallback, useContext, useState } from "react";
import Image from "next/image";
import moment from "moment";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
//components
import GameInfoCard from "@/components/pageComponents/game/gameInfoCard/gameInfoCard";
import PlayerItem from "@/components/common/playerItem/playerItem";
import PrimaryButton from "@/components/common/primaryButton/primaryButton";
import Modal from "@/components/common/modal/modal";
import Players from "@/components/pageComponents/game/Players";
//styles
import styles from "./unAuthenticatedGame.module.scss";
//type
import { GameType } from "../game/type";
import { AppState } from "@/providers/app/app.reducer";
import { ButtonType } from "@/components/common/primaryButton/types";
//context
import { AppContext } from "@/providers/app";

interface PropType {
    game: GameType;
}

const UnAuthenticatedGame = ({ game }: PropType) => {
    const { actions, user } = useContext(AppContext);
    const { host } = game;
    const router = useRouter();
    const [showModal, setModal] = useState<boolean>(false);

    const continueOnWeb = useCallback(() => {
        Cookies.set("LAST_ROUTE", "/game");
        Cookies.set("GAME_ID", game?._id);
        Cookies.set("VENUE_ID", game?.venue?._id);
        actions.setGameData(game);
        setModal(false);
        router.push("/login");
    }, [actions, game, router]);

    const joinGame = useCallback(() => {
        if (Cookies.get('ACCESS_TOKEN')) {
            const founditem = game?.users.find((item) => item?._id === user?._id);
            if (founditem) {
                router.replace(`/game/${game?._id}`, undefined, { shallow: false })
            } else {
                actions.setGameData(game);
                router.replace(`/gamepayjoin/${game?._id}`)
            }
        } else {
            setModal(true);
        }
    }, [actions, game, router, user?._id]);

    return (
        <>
            <div className={styles["App"]}>
                <div className={styles.container}>
                    <div className={classNames(styles.iconWrapper)}>
                        <Image
                            width={80}
                            height={44}
                            alt="Logo"
                            src={"/images/Logowhite.png"}
                        />
                    </div>
                    <div className={styles["mb-20"]}>
                        <PlayerItem
                            title={host[0]?.name}
                            subTitle={"Join guys! We need players."}
                            imageUrl={host[0]?.profile_picture}
                            id={""}
                        />
                    </div>

                    <GameInfoCard
                        gameName={game?.name}
                        venueImage={game?.venue?.venue?.venue_display_picture}
                        sportName={game?.sport_name}
                        type={game?.type}
                        day={moment(game?.start_time).format("ddd")}
                        date={moment(game?.start_time).format("MMM Do")}
                        time={
                            moment(game?.start_time).format("h:mm a") +
                            " - " +
                            moment(game?.end_time).format("h:mm a")
                        }
                        venueName={game?.venue?.venue?.name}
                        venueArea={game?.venue?.venue?.area}
                        numberOfUsers={game.users.length}
                        limit={game.limit}
                        cost_per_head={game?.cost_per_head}
                        booking_status={game?.booking_status}
                    />

                    <div
                        className={classNames(
                            styles["line"],
                            styles["mb-44"],
                            styles["mt-32"]
                        )}
                    />

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
                                    id={''} />
                            </div>
                        );
                    })}

                    <div
                        className={classNames(
                            styles["line"],
                            styles["mb-44"],
                            styles["mt-36"]
                        )}
                    />

                    <Players
                        users={game?.users}
                        host={game?.host}
                        sportName={game?.sport_name}
                        showFollow={false}
                    />

                    <div className={styles.center}>
                        <p
                            className={classNames(
                                styles["subtitle"],
                                styles["$White3"],
                                styles["mb-8"],
                                styles["align_text_center"]
                            )}
                        >
                            Don’t have a Turf Town account?
                        </p>
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
                <Modal show={showModal} onClose={() => setModal(false)}>
                    <div className={styles.modal}>
                        <p className={styles.modalTitle}>Join this game?</p>
                        <p className={styles.modalSubTitle}>
                            Download the Turf Town app or continue by signing up on the web.
                        </p>

                        <div className={styles["row"]}>
                            <div className={styles.width_45}>
                                <PrimaryButton
                                    buttonType={ButtonType.BORDER}
                                    text="Continue on Web"
                                    onPress={continueOnWeb}
                                />
                            </div>
                            <div className={styles.width_45}>
                                <PrimaryButton
                                    text="Download"
                                    onPress={() => {
                                        setModal(false);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className={styles.bottom_button_container}>
                <PrimaryButton
                    text="Join"
                    rightIcon={
                        <Image src={"/images/arrow.png"} width={14} height={10} alt="" />
                    }
                    onPress={joinGame}
                />
            </div>
        </>
    );
};

export default UnAuthenticatedGame;
