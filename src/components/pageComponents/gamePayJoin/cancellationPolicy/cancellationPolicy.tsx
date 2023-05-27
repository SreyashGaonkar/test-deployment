import React, { useMemo } from "react";
import classNames from "classnames";
import moment from "moment";
//styles
import styles from "./cancellationPolicy.module.scss";
//type
import { CancellationPolicyType } from "./types";

const CancellationPolicy = ({
  safe_to_leave,
  game,
}: CancellationPolicyType) => {
  const is_leave_time_expired = useMemo(() => {
    const start_time = moment(game?.start_time).format();
    const current_time = moment().parseZone().utc().format();
    const time_diffrence = moment(start_time).diff(current_time, "minutes");
    const player_cancellation_time = safe_to_leave * 60;
    const is_expired = time_diffrence < player_cancellation_time;
    return is_expired;
  }, [game?.start_time, safe_to_leave]);

  return (
    <div
      className={classNames(
        styles.container,
        styles["borderBottom"],
        styles["pt-36"],
        styles["pb-48"]
      )}
    >
      <p className={classNames(styles["title_4"], styles["white1"])}>
        Cancellation Policy
      </p>
      {!game?.booking_status && (
        <p
          className={classNames(
            styles["sub"],
            styles["white2"],
            styles["mt-24"],
            styles["lh-26"]
          )}
        >
          {" "}
          {!is_leave_time_expired
            ? "Until the host books the slot, you may leave the game at any time to avail a refund of your share."
            : "Until the host books the slot, you may leave the game at any time to avail a refund of your share. Service fee is non-refundable."}
        </p>
      )}
      {is_leave_time_expired ? (
        <p className={classNames(styles["title_4"], styles["white1"])}>
          {!game?.booking_status
            ? is_leave_time_expired
              ? "If you leave after the slot is booked, you will be charged a cancellation fee."
              : "Safe cancellation has expired for this game.\nIf you leave, you will be charged a cancellation fee."
            : `Safe cancellation has expired for this game.\nIf you leave, you will be charged a cancellation fee.`}
        </p>
      ) : (
        <>
          {!game?.booking_status ? (
            <p
              className={classNames(
                styles["sub"],
                styles["white2"],
                styles["mt-24"],
                styles["lh-26"]
              )}
            >
              Once the slot is booked, you need to leave{" "}
              <span> {safe_to_leave} hrs before</span> the start time to avail a
              refund. Service fee is non-refundable.
            </p>
          ) : (
            <>
              <p
                className={classNames(
                  styles["sub"],
                  styles["white2"],
                  styles["mt-24"],
                  styles["lh-26"]
                )}
              >
                You may leave the game{" "}
                <span
                  className={classNames(
                    styles["sub"],
                    styles["mt-24"],
                    styles["lh-26"],
                    styles["orange"]
                  )}
                >
                  {" "}
                  {safe_to_leave} hrs before
                </span>{" "}
                the start time to avail a refund of your share. Service fee is
                non-refundable.
              </p>
              <p
                className={classNames(
                  styles["sub"],
                  styles["white2"],
                  styles["mt-24"],
                  styles["lh-26"]
                )}
              >
                If you leave after the above mentioned time, you will be charged
                a cancellation fee.
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CancellationPolicy;
