import { useCallback, useMemo, useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import { GetServerSideProps, NextPage } from "next";
import moment from "moment";
//styles
import styles from "./authenticatedGame.module.scss";
//components
//types
import { GameType } from "../game/type";
import TabBar from "@/components/pageComponents/authenticatedGame/TabBar";
import Header from "@/components/common/header/header";
import GameInfo from "@/components/pageComponents/authenticatedGame/gameInfo";
import Messages from "@/components/pageComponents/authenticatedGame/Messages";
import { useRouter } from "next/router";

interface PropType {
  game: GameType;
}

const AuthenticatedGame: NextPage<PropType> = ({ game }) => {
  const router = useRouter();
  const [tab, setTab] = useState<number>(1);

  useEffect(() => {
    let game_Date = moment(game?.start_time).toDate();
    let newdate = new Date();

    if (!game || game_Date < newdate) {
      router.push("/game-not-found");
    }
  }, [game, router]);

  const renderItems = useCallback(() => {
    switch (tab) {
      case 0:
        return <GameInfo game={game} />;

      case 1:
        return (
          <Messages
            imageUrl={game?.venue?.venue?.venue_display_picture}
            title={game?.venue?.venue?.name + ", " + game?.venue?.venue?.area}
            date={moment(game?.start_time).format("ddd")}
            time={moment(game?.start_time).format("h:mm a") +
              " - " +
              moment(game?.end_time).format("h:mm a")}
          />
        );
    }
  }, [game, tab]);

  const rightIcon = useCallback(() => {
    if (game) {
      return (
        <div className={classNames(styles["row"], styles["align-center"])}>
          <Image
            className={styles["mr-6"]}
            width={17}
            height={12}
            alt={"icon"}
            src={"/icons/players.png"}
          />
          <p className={classNames(styles["card_text"], styles["white1"])}>
            {game?.users?.length}
          </p>
          <p className={classNames(styles["card_text"], styles["white3"])}>
            /{game?.limit}
          </p>
        </div>
      );
    } else {
      return <></>;
    }
  }, [game]);

  return (
    <>
      <div className={classNames(styles["App"], styles["column"], styles['p-0'])}>
        <Header
          imageUrl={game?.venue?.venue?.venue_display_picture}
          title={game?.name}
          back={() => {
            router.push('/home')
          }}
          rightIcon={rightIcon()}
        />
        <div className={styles["mb-44"]}>
          <TabBar
            selectedTab={tab}
            tabNames={["Game info", "Messages"]}
            onClick={(tab: number) => {
              setTab(tab);
            }}
          />
        </div>
        <div className={styles['ph-16']}>
          {renderItems()}
        </div>

      </div>
    </>
  );
};

export default AuthenticatedGame;

