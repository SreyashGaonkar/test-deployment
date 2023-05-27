import { PlayerPropsType } from "./types";
import classNames from "classnames";
import Cookies from 'js-cookie';
//styles
import styles from "./player.module.scss";
//component
import PlayerItem from "@/components/common/playerItem/playerItem";
import { useMemo } from "react";

const Players = ({ users, sportName, host, onFollow, showFollow = false }: PlayerPropsType) => {
  const filteredUsers = useMemo(() => {
    let temp = users.filter((key) => key._id !== host[0]._id);

    return temp;
  }, [host, users]);

  if (filteredUsers.length === 0) return <></>;



  return (
    <>
      {filteredUsers.length > 0 && (
        <>
          <p className={classNames(styles["sectiontitle"], styles["mb-22"])}>
            {filteredUsers.length > 1 ? "Players" : "Player"}
          </p>
          {filteredUsers.map((player, index) => {
            return (
              <div
                key={index}
                className={
                  filteredUsers.length > 1 ? styles["mb-37"] : styles["mb-0"]
                }
              >
                <PlayerItem
                  key={index}
                  extra
                  title={player?.name}
                  subTitle={player?.handle}
                  imageUrl={player?.profile_picture}
                  sportName={sportName}
                  skill_rating={player?.skill_rating}
                  sportInterest={player?.sports_interest}
                  id={player?._id}
                  // showFollow={!!Cookies.get('ACCESS_TOKEN')} 
                  showFollow={showFollow}
                  onFollow={onFollow} />

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
        </>
      )}
    </>
  );
};

export default Players;
