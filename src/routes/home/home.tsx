import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Image from "next/image";
import classNames from "classnames";
import dynamic from "next/dynamic";
//context
//styles
import styles from "./home.module.scss";
import { GetStaticProps } from "next";
//components
import HomeHeader from "@/components/pageComponents/home/homeHeader";
import ExploreVenue from "@/components/pageComponents/home/ExploreVenue/ExploreVenue";
// import YourGames from '@/components/pageComponents/home/YourGames/yourGames';
// import GamesToJoin from '@/components/pageComponents/home/GamesToJoin/GamesToJoin';

const YourGames = dynamic(
  () => import("@/components/pageComponents/home/YourGames/yourGames")
);

const GamesToJoin = dynamic(
  () => import("@/components/pageComponents/home/GamesToJoin/GamesToJoin")
);

const Home = () => {
  const router = useRouter();
  console.log("home");

  useEffect(() => {
    if (!Cookies.get("ACCESS_TOKEN")) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className={classNames(styles["App"], styles["p-0"])}>
      <div className={styles.container}>
        <div className={classNames(styles["mb-24"])}>
          <HomeHeader />
        </div>
        <div className={classNames(styles["mb-64"], styles["ph-16"])}>
          <ExploreVenue />
        </div>
        <YourGames />
        <div className={classNames(styles["mb-64"], styles["ph-16"])}>
          <GamesToJoin />
        </div>
        <div className={classNames(styles.modal, styles["ph-16"])}>
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
          <div
            className={classNames(styles.download_container, styles["mb-64"])}
            id="playstoreicons"
          >
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
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
