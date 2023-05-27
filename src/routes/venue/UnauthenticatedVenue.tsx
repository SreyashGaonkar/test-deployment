import React, { useState, useCallback } from 'react'
import Image from 'next/image';
import classNames from 'classnames';
import Cookies from "js-cookie";
import { useRouter } from "next/router";
//styles
import styles from "./venue.module.scss";
//components
import PrimaryButton from "@/components/common/primaryButton/primaryButton";
import Modal from "@/components/common/modal/modal";
import VenueInfoCard from "@/components/pageComponents/venue/venueInfoCard/venueInfoCard";
//types
import { VenueData } from './types';
import { ButtonType } from "@/components/common/primaryButton/types";

const UnauthenticatedVenue = ({ venue }: {
    venue: {
        data: VenueData;
    }
}) => {

    const router = useRouter();

    const [showModal, setModal] = useState<boolean>(false);

    const continueOnWeb = useCallback(() => {
        Cookies.set("LAST_ROUTE", `/venue/${venue?.data?.type}/${venue?.data?._id}`);
        router.push("/login");
    }, [router, venue?.data?._id, venue?.data?.type]);

    const { data } = venue;

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
                    <VenueInfoCard
                        imageUrl={data?.venue?.venue_display_picture}
                        name={data?.venue?.name}
                        area={data?.venue?.area}
                        type={data?.type}
                        address={data?.venue?.address}
                        ratingData={data?.ratings_and_reviews}
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
                            text={"Host a game here"}
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
                            Download the app to host a game at this venue.
                        </p>

                        <div className={styles["row"]}>
                            <div className={styles.width_45}>
                                <PrimaryButton
                                    buttonType={ButtonType.BORDER}
                                    text="Continue on web"
                                    onPress={continueOnWeb}
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
        </>
    )
};



export default UnauthenticatedVenue