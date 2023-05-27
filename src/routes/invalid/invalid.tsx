import React from "react";
import Image from "next/image";
import classNames from "classnames";
//styles
import styles from "./invalid.module.scss";

const Invalid = () => {
  return (
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
        <div>
          <p></p>
          <p></p>
        </div>
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
    </div>
  );
};

export default Invalid;
