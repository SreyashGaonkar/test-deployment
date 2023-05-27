import React, { useCallback, useEffect } from "react";
import classNames from "classnames";
//styles
import styles from './authenticatedVenue.module.scss';
//components
import Rating from "@/components/pageComponents/authenticatedVenue/rating/rating";
import Address from "@/components/pageComponents/authenticatedVenue/address/address";
import VenueInfo from "@/components/pageComponents/authenticatedVenue/venueInfo/venueInfo";
import Amenities from "@/components/pageComponents/authenticatedVenue/amenities/amenities";
import Reviews from "@/components/pageComponents/authenticatedVenue/reviews/reviews";
import OtherSports from "@/components/pageComponents/authenticatedVenue/otherSports/otherSports";
import OtherVenues from "@/components/pageComponents/authenticatedVenue/otherVenues/otherVenues";
import Offers from "@/components/pageComponents/authenticatedVenue/offers/offers";
import HeaderImage from "@/components/pageComponents/authenticatedVenue/headerImage/headerImage";
//types
import { VenueData } from "../venue/types";
//api
import { getVenueDetails } from "@/apis/getVenueDetails";
import PrimaryButton from "@/components/common/primaryButton/primaryButton";
interface AuthenticatedVenuePropType {
    data: VenueData;
}

const AuthenticatedVenue = ({ data }: AuthenticatedVenuePropType) => {

    return (
        <div className={classNames(styles["App"], styles['p-0'])}>
            <div className={styles.container}>
                <HeaderImage imageUrl={data?.venue?.venue_display_picture} onBack={function (): void {

                }} />
                <div className={styles['ph-16']}>
                    <div className={classNames(styles['mt-32'], styles['borderBottom'], styles['pb-48'])}>
                        <div >
                            <p className={classNames(styles['title_4'], styles['white1'])}>{data?.venue?.name}</p>
                            <p className={classNames(styles['sub'], styles['white3'])}>{data?.venue?.area}</p>
                        </div>
                        <div className={styles['mt-8']}>
                            <Rating type={data?.type} ratingData={data?.ratings_and_reviews} />
                        </div>
                        <div className={styles['mt-40']}>
                            <Offers />
                        </div>

                    </div>
                    <Address address={data?.venue?.address} />
                    <VenueInfo sport={data?.type} game_type={data?.game_type} configuration={data?.configuration} />
                    <Amenities features={data?.features} />
                    <Reviews id={data?._id} />
                    <OtherSports id={data?._id} />
                    <OtherVenues id={data?._id} sport={data?.type} />
                    <div className={styles.bottom_button_container}>
                        <PrimaryButton
                            text="Host a game"
                            onPress={() => {
                                // setModal(true);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthenticatedVenue;
