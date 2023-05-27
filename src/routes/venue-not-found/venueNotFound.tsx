import Image from "next/image";
import classNames from "classnames";
import { venueNotFoundPropType } from "./types";
import styles from "./venueNotFound.module.scss";
import { GetStaticProps } from "next";

const VenueNotFound = ({ venue }: venueNotFoundPropType): JSX.Element => {
  console.log("venueName", venue);
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
          <div className={classNames(styles.notfound_image)}>
            <Image
              width={78}
              height={78}
              alt="Notfound"
              src={"/images/venuenotfound.webp"}
            />
          </div>
          <div className={styles.invalid}>Invalid venue</div>
          <div className={styles.notAvailable}>
            This venue is no longer available for
          </div>
          <div className={styles.notAvailable2}>on Turf Town.</div>
          <div className={styles.straightline}></div>

          <div className={styles.getApp}>
            <div
              className={classNames(
                styles["subtitle"],
                styles["$White3"],
                styles["mb-8"],
                styles["align_text_center"]
              )}
            >
              Don't have a Turf Town account?
            </div>
            <div
              className={classNames(
                styles["subtitle"],
                styles["$White3"],
                styles["$White3"],
                styles["align_text_center"]
              )}
            >
              Get the app & start playing!
            </div>
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
      </div>
    </>
  );
};

export default VenueNotFound;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
    },
  };
}
