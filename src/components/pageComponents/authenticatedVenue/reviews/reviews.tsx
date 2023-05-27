import React, { useCallback, useMemo, useState, useEffect } from "react";
import classNames from "classnames";
//styles
import styles from "./reviews.module.scss";
//types
import { ReviewPropType, ReviewType } from "./type";
//components
import ReviewItem from "../reviewItem/reviewItem";
import { getVenueReviews } from "@/apis/getVenueReviews";
import moment from "moment";

const Reviews = ({ id }: ReviewPropType) => {
  const [showMore, setShowMore] = useState<boolean>(false);


  const [reviews, setReviews] = useState<ReviewType[]>([]);

  const fetchReviews = useCallback(async () => {
    try {
      const response = await getVenueReviews(id);
      setReviews(response);
      console.log('fetchReviews', response)
    } catch (e) {
      console.error('fetchReviews error', e);
    }
  }, [id])

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const getRating = useMemo(() => {
    if (reviews?.length > 2) {
      if (showMore) {
        return reviews;
      } else {
        return reviews.slice(0, 2);
      }
    } else {
      return reviews;
    }

  }, [reviews, showMore]);

  const renderItem = useCallback(
    () => (
      <>
        {getRating.map((i, index) => (
          <div key={index} className={classNames(styles["mb-56"])}>
            <ReviewItem
              imageUrl={i?.user_id?.profile_picture || ""}
              userName={i?.user_id?.handle}
              date={moment(i?.created_at).toString()}
              comment={i?.review}
            />
          </div>
        ))}
      </>
    ),
    [getRating]
  );

  if (reviews.length === 0) return null;

  return (
    <div
      className={classNames(
        styles.container,
        styles["borderTop"],
        styles["pt-36"],
        styles["pb-48"]
      )}
    >
      <p className={classNames(styles["title_4"], styles["white1"])}>Reviews</p>
      <div className={classNames(styles["mt-28"])}>
        {/* <Rating type={undefined} ratingData={undefined} /> */}
        {renderItem()}
      </div>
      <div
        className={classNames(
          styles["row"],
          styles["align-center"],
          styles["justify-center"]
        )}
      >
        {reviews.length > 2 && (<div
          onClick={() => {
            setShowMore(!showMore);
          }}
          className={classNames(styles.see_all_button)}
        >
          <p className={classNames(styles["headline"], styles["white1"])}>
            {!showMore ? "See all reviews" : "See less"}
          </p>
        </div>)}
      </div>
    </div>
  );
};

export default Reviews;
