import { AppContext } from '@/providers/app';
import React, { useCallback, useContext, useMemo, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from "next";
import { ProfileType } from './type'

import { } from "react";
import Image from 'next/image';

//styles
import classNames from 'classnames';
import styles from './player.module.scss';
//components
import Seo from "@/components/common/seo/Seo";
import PlayerInfoCard from '@/components/pageComponents/player/playerInfoCard';
import PrimaryButton from '@/components/common/primaryButton/primaryButton';
import Modal from '@/components/common/modal/modal';
import { ButtonType } from "@/components/common/primaryButton/types";

interface PropType {
  user: ProfileType;
}

const User: NextPage<PropType> = ({ user }) => {

  const { actions } = useContext(AppContext);
  const router = useRouter();

  const [showModal, setModal] = useState<boolean>(false);


  useEffect(() => {
    if (!user?._id) {
      router.push("/player-not-found")
    }
  }, [user?._id, router])



  const str = useMemo(() => user?.name || "abcde", [user]);
  const sport_name_uppercase = useMemo(
    () => str.charAt(0).toUpperCase() + str.slice(1),
    [str]
  );
  let title = useMemo(
    () => user?.name + " - " + sport_name_uppercase + " game on Turf Town",
    [user, sport_name_uppercase]
  );

  let meta_image_url = useMemo(
    () => `https://og.turftown.in/image?id=${user?._id}`,
    [user]
  );
  let description = useMemo(
    () =>
      " " +
      user?.bio[0] +
      ", ",
    [user]
  );
  let userUrl = useMemo(() => `turf://user/${user?._id}`, [user]);

  if (!user) return null;

  const { followers } = user;

  return (
    <>

      <Seo
        meta_title={title}
        description={description}
        meta_image_url={meta_image_url}
        app_url={userUrl}
      >
        <script>
          {`window.location = "turf://demo.com?type=user&id=${user?._id}"`}{" "}
        </script>
      </Seo>
      <div>
        <div className={styles["App"]}>
          <div className={styles.container}>
            <div className={classNames(styles.iconWrapper)}>
              <Image
                width={80}
                height={44}
                alt="Logo"
                src={"/images/LogoWhite.png"}
              />
            </div>
            <PlayerInfoCard
              userName={user?.name}
              playerImage={user?.profile_picture}
              usernickName={user?.handle}
              usersFollowers={user?.followers}
              usersFollowing={user?.following}
              usersBio={user?.bio}
            />
            <div className={classNames(styles["mt-56"])}>
              <p className={classNames(styles["title"], styles["white3"])}>
                Already on Turf Town?
              </p>
            </div>
            <div className={classNames(styles.button_container, styles["mt-36"])}>
              <PrimaryButton
                rightIcon={
                  <Image
                    src={"/images/arrow.png"}
                    width={14}
                    height={10}
                    alt=""
                  />
                }
                text={`view ${user?.handle || user?.name} full profile`}
                onPress={() => {
                  setModal(true);
                }}
              />
            </div>

            <div className={classNames(styles.center, styles["mt-70"])}>
              <p
                className={classNames(
                  styles["subtitle"],
                  styles["$White3"],
                  styles["mb-8"],
                  styles["align_text_center"]
                )}
              >
                Don’t have a Turf Town account? Get the app
              </p>
              <p
                className={classNames(
                  styles["subtitle"],
                  styles["$White3"],
                  styles["mb-8"],
                  styles["align_text_center"]
                )}
              >
                &
              </p>
              <p
                className={classNames(
                  styles["subtitle"],
                  styles["$White3"],
                  styles["align_text_center"]
                )}
              >
                start playing!
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
              <p className={styles.modalTitle}>Get TurfTown?</p>
              <p className={styles.modalSubTitle}>
                Download the app to follow this player.
              </p>

              <div className={styles["row"]}>
                <div className={styles.width_45}>
                  <PrimaryButton
                    buttonType={ButtonType.BORDER}
                    text="Cancel"
                    onPress={() => {
                      setModal(false);
                    }}
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

      </div>

    </>
  );
};

export default User;


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log("query", query)
  let response: {
    status: string;
    message: string;
    data: ProfileType;
  } | null = null;
  if (query?.path?.length) {
    try {
      const res = await fetch(
        `https://devstage.turftown.in/api/v2/user/website/get_user_profile/${query.path[0]}`
      );
      response = await res.json();
      console.log("response", response)
    } catch (error) {
      response = null;
    }
  }

  return {
    props: {
      user: response?.data ? response.data : null,
    },
  };
};