import React, { useEffect } from "react";
import { useLottie } from "lottie-react";
//lottie file
import animationData from "../../../public/lottie/player_tick.json";
//style
import styles from "./paymentSuccess.module.scss";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

const PaymentSuccess = () => {
  const router = useRouter();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(defaultOptions);

  useEffect(() => {
    setTimeout(() => {
      if (router?.query?.id) {
        router.replace(`/game/${router?.query?.id}`);
      }
    }, 3500);
  }, [router]);

  return <div className={styles.container}>{View}</div>;
};

export default PaymentSuccess;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
