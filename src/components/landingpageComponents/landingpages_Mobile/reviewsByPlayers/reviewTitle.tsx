import React from "react";
//styles
import classNames from "classnames";
import styles from "./reviewTitle.module.scss";
import "animate.css";
//images
import Image from "next/image";
import review1 from "../../../../../public/landingimages/review1.webp";
import review2 from "../../../../../public/landingimages/review2.webp";
import review3 from "../../../../../public/landingimages/user1.webp";
import review4 from "../../../../../public/landingimages/review4.webp";
import review5 from "../../../../../public/landingimages/user5.webp";
import review6 from "../../../../../public/landingimages/user2.webp";
import review7 from "../../../../../public/landingimages/user4.webp";
import review8 from "../../../../../public/landingimages/user3.webp";
import review9 from "../../../../../public/landingimages/user4.webp";

const ReviewTitle = () => {
  const reviewanimation = [
    {
      path: review1,
      reviewer_name: "Tejasvi Surya",
      reviewer_nickname: "@teju.s",
      review_details:
        "Joining games though @Turf Town has streamlined playing so much that I now play much more often.",
    },
    {
      path: review4,
      reviewer_name: "Shruthi Reddy",
      reviewer_nickname: "@shrured",
      review_details:
        "Splitting payments after a game was always a struggle. Tried out @Turf Town today. Can never go back! Kudos team.",
    },
    {
      path: review9,
      reviewer_name: "Aditya.R",
      reviewer_nickname: "@ad_reds",
      review_details:
        "Found a new 7’s court in Adyar through @Turf Town today! Really cool app. Looking forward to playing some games there.",
    },
    {
      path: review3,
      reviewer_name: "Ravi Aiyalu",
      reviewer_nickname: "@ravi_a",
      review_details:
        "Love the simplicity of @Turf Town. It has made organising a game and gathering players a breeze!",
    },
    {
      path: review6,
      reviewer_name: "Kevin Joseph",
      reviewer_nickname: "@kevseph",
      review_details:
        "Have shifted to hosting all my games on @Turf Town  Lifesaver!",
      review_detail2:
        "Whatsapp was such a pain when i had to organise large 9v9 games.",
    },
    {
      path: review2,
      reviewer_name: "Naveen Pandian",
      reviewer_nickname: "@naveen_ro",
      review_details:
        "Played a public game on @Turf Town today. Met a lot of new players.",
      review_detail2:
        "Enjoyed the experience! Won 74 Turf coins too 🤑  Highly recommend 👌🏻",
    },
    {
      path: review7,
      reviewer_name: "Aditya.R",
      reviewer_nickname: "@ad_reds",
      review_details:
        "Found a new 7's court in Adyar through @Turf Town today! Really cool app. Looking forward to playing some games there.",
    },
    {
      path: review8,
      reviewer_name: "Sushanth",
      reviewer_nickname: "@sush",
      review_details:
        "Have any of you checked out @Turf Town? Played baddy today. Met a bunch of players and had a great game.",
      review_detail2: " Follow me on the app. Always in for a game🏸",
    },
    {
      path: review4,
      reviewer_name: "Shruthi Reddy",
      reviewer_nickname: "@shrured",
      review_details:
        "Splitting payments after a game was always a struggle. Tried out @Turf Town today. Can never go back! Kudos team.",
    },
    {
      path: review5,
      reviewer_name: "Kunal Pandiya",
      reviewer_nickname: "@kunal_smash",
      review_details:
        "Have been using @Turf Town for the last couple of weeks and I must say it is a game changer if you play sport!",
    },
    {
      path: review1,
      reviewer_name: "Tejasvi Surya",
      reviewer_nickname: "@teju.s",
      review_details:
        "Joining games though @Turf Town has streamlined playing so much that I now play much more often.",
    },
    {
      path: review4,
      reviewer_name: "Shruthi Reddy",
      reviewer_nickname: "@shrured",
      review_details:
        "Splitting payments after a game was always a struggle. Tried out @Turf Town today. Can never go back! Kudos team.",
    },
    {
      path: review7,
      reviewer_name: "Aditya.R",
      reviewer_nickname: "@ad_reds",
      review_details:
        "Found a new 7's court in Adyar through @Turf Town today! Really cool app. Looking forward to playing some games there.",
    },
    {
      path: review1,
      reviewer_name: "Tejasvi Surya",
      reviewer_nickname: "@teju.s",
      review_details:
        "Joining games though @Turf Town has streamlined playing so much that I now play much more often.",
    },
    {
      path: review4,
      reviewer_name: "Shruthi Reddy",
      reviewer_nickname: "@shrured",
      review_details:
        "Splitting payments after a game was always a struggle. Tried out @Turf Town today. Can never go back! Kudos team.",
    },
    {
      path: review9,
      reviewer_name: "Aditya.R",
      reviewer_nickname: "@ad_reds",
      review_details:
        "Found a new 7’s court in Adyar through @Turf Town today! Really cool app. Looking forward to playing some games there.",
    },
    {
      path: review3,
      reviewer_name: "Ravi Aiyalu",
      reviewer_nickname: "@ravi_a",
      review_details:
        "Love the simplicity of @Turf Town. It has made organising a game and gathering players a breeze!",
    },
  ];

  return (
    <div className={styles.review_container}>
      <div className={classNames(styles.review_title)}>
        Loved by players all
      </div>
      <div className={classNames(styles.review_title2)}>
        around{" "}
        <span className="animate__animated animate__bounceIn animate__infinite animate__slow 1s">
          {" "}
          ❤️
        </span>
      </div>
      <div className={classNames(styles.review_top)}>
        <Image
          src={"/landingimages/loveflare.webp"}
          alt=""
          height={2}
          width={2}
        />
      </div>
      <div className={styles.container_overflow}>
        <div className={classNames(styles.animate_review)}>
          {reviewanimation.map((data, key) => {
            return (
              <>
                <div className={styles.container_review} key={key}>
                  <section className={classNames(styles.review_card)}>
                    <div className={classNames(styles.reviewer)}>
                      <Image
                        src={data.path}
                        alt=""
                        className={classNames(styles.reviewer_image)}
                      />
                      <div className={classNames(styles.reviewer_name)}>
                        {data.reviewer_name}
                        <div className={classNames(styles.reviewer_nickname)}>
                          {data.reviewer_nickname}
                        </div>
                      </div>
                    </div>
                    <div
                      className={classNames(
                        styles.reviewerdetails,
                        styles["mt-8"]
                      )}
                    >
                      {data.review_details}
                    </div>
                    <div
                      className={classNames(
                        styles.reviewerdetails2,
                        styles["mt-8"]
                      )}
                    >
                      {data?.review_detail2}
                    </div>
                  </section>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className={classNames(styles.review_bottom)}></div>
    </div>
  );
};

export default ReviewTitle;
