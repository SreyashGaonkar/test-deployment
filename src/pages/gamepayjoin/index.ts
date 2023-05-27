import React from "react";
import dynamic from "next/dynamic";

const GamePay = () => {
  const GamePayJoin = dynamic(
    () => {
      return import("../../routes/GamePayJoin");
    },
    { ssr: false }
  );

  return <GamePayJoin />;
};

export default GamePay;
