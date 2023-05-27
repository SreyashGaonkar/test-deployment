// import React from 'react'
import { useCallback, useContext, useMemo, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";

import moment from "moment";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
//styles
//components
import Seo from "@/components/common/seo/Seo";
//type
import { GameType } from "./type";
//context
import { AppContext } from "@/providers/app";

const AuthenticatedGame = dynamic(
  () => import("../authenticatedGame/authenticatedGame"),
  {
    ssr: false, // Set ssr option to false to disable server-side rendering for the component
  }
);
const UnAuthenticatedGame = dynamic(
  () => import("../unAuthenticatedGame/unAuthenticatedGame"),
  {
    ssr: true, // Set ssr option to false to disable server-side rendering for the component
  }
);

interface PropType {
  game: GameType;
}

const Game: NextPage<PropType> = ({ game }) => {
  const { actions, user } = useContext(AppContext);
  console.log("game", game);
  const router = useRouter();

  useEffect(() => {
    let game_Date = moment(game?.start_time).toDate();
    let newdate = new Date();

    if (!game || game_Date < newdate) {
      router.push("/game-not-found");
    }
  }, [game, router]);

  const str = useMemo(() => game?.sport_name || "football", [game]);
  const sport_name_uppercase = useMemo(
    () => str.charAt(0).toUpperCase() + str.slice(1),
    [str]
  );
  let title = useMemo(
    () => game?.name + " - " + sport_name_uppercase + " game on Turf Town",
    [game, sport_name_uppercase]
  );
  let meta_image_url = useMemo(
    () => `https://og.turftown.in/image?id=${game?._id}`,
    [game]
  );
  let description = useMemo(
    () =>
      "Join this game happening at " +
      game?.venue?.venue?.name +
      ", " +
      game?.venue?.venue?.area,
    [game]
  );
  let gameUrl = useMemo(() => `turf://game/${game?._id}`, [game]);

  const isPartOfGame = useMemo(() => {
    if (game?.users) {
      const founditem = game?.users.find((item) => item?._id === user?._id);
      if (founditem) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }, [game?.users, user?._id]);

  const renderPage = useCallback(() => {
    if (game) {
      if (!Cookies.get("ACCESS_TOKEN")) {
        return <UnAuthenticatedGame game={game} />;
      } else if (Cookies.get("ACCESS_TOKEN") && isPartOfGame) {
        return <AuthenticatedGame game={game} />;
      } else {
        return <UnAuthenticatedGame game={game} />;
      }
    }
  }, [game, isPartOfGame]);

  if (!game) return null;

  return (
    <>
      <Seo
        meta_title={title}
        description={description}
        meta_image_url={meta_image_url}
        app_url={gameUrl}
      >
        <script>
          {`window.location = "turf://demo.com?type=game&id=${game?._id}"`}{" "}
        </script>
      </Seo>
      {renderPage()}
    </>
  );
};

export default Game;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let response: {
    status: string;
    message: string;
    data: GameType;
  } | null = null;
  if (query?.path) {
    let id = undefined;
    if (typeof query.path === typeof {}) {
      id = query.path[0];
    } else {
      id = query.path;
    }
    console.log("id", id);
    console.log("query", query);
    try {
      console.log("env url", process?.env?.BACKEND_HOST_URL);
      const res = await fetch(
        `https://devstage.turftown.in/api/v2/game/share/${id}`
      );
      console.log("res", res);
      response = await res.json();
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      response = null;
    }
  }

  return {
    props: {
      game: response?.data ? response.data : null,
    },
  };
};
