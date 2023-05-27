import Image from "next/image";
import classNames from "classnames";
import { useCallback, useContext, useMemo } from "react";
//styles
import styles from './playerItem.module.scss'
//types
import { PlayerItemProps } from "./types";
import { ButtonType } from "../primaryButton/types";
//component
import FollowButton from "../followButton/followButton";
//utils
import { getRating } from "@/helper/getRating";
import { getPositionCommon } from "@/helper/getPosition";
//context
import { AppContext } from "@/providers/app";

const PlayerItem = ({ id, imageUrl, title, subTitle, sportName, skill_rating, extra = false, sportInterest, showFollow = false, onFollow }: PlayerItemProps) => {

    const { user } = useContext(AppContext)

    const ratingComponent = useCallback(() => {
        if (!skill_rating) return getRating(0);
        switch (sportName) {
            case "football":
                return getRating(skill_rating?.football);
            case "cricket":
                return getRating(skill_rating?.cricket);
            case "badminton":
                return getRating(skill_rating?.badminton);
            case "basketball":
                return getRating(skill_rating?.basketball);
            default:
                return <></>

        }
    }, [skill_rating, sportName]);

    const ratingNumber = useCallback(() => {
        return (
            <>
                {
                    skill_rating === undefined ?
                        <div className={styles.rating}>-</div>
                        :
                        <>
                            {skill_rating?.football && sportName === "football" && skill_rating?.football > 1 ?
                                <div className={styles.rating}>{skill_rating?.football}</div>
                                :
                                <></>
                            }
                            {skill_rating?.badminton && sportName === "badminton" && skill_rating?.badminton > 1 ?
                                <div className={styles.rating}>{skill_rating?.badminton}</div>
                                :
                                <></>
                            }
                            {skill_rating?.cricket && sportName === "cricket" && skill_rating?.cricket > 1 ?
                                <div className={styles.rating}>{skill_rating?.cricket}</div>
                                :
                                <></>
                            }
                            {skill_rating?.basketball && sportName === "basketball" && skill_rating?.basketball > 1 ?
                                <div className={styles.rating}>{skill_rating?.basketball}</div>
                                :
                                <></>
                            } </>
                }
            </>
        )
    }, [skill_rating, sportName]);

    const renderSportInterest = useCallback(() => {
        return (
            <>
                {sportInterest?.map((interest, index) => {
                    let sport = interest.position;

                    return (

                        <div key={index} >
                            {
                                interest.sport === "football" && sportName === "football" &&
                                (
                                    <div className={styles.row}>
                                        <Image src={'/images/dots.png'} width={4}
                                            height={6} alt="" />
                                        <div className={styles.position}>{getPositionCommon(sport)}</div>
                                    </div>

                                )

                            }
                            {
                                interest.sport === "badminton" && sportName === "badminton" &&
                                (
                                    <div className={styles.row}>
                                        <Image src={'/images/dots.png'} width={4}
                                            height={6} alt="" />
                                        <div className={styles.position}>{getPositionCommon(sport)}</div>
                                    </div>

                                )
                            }
                            {
                                interest.sport === "cricket" && sportName === "cricket" &&
                                (
                                    <div className={styles.row}>
                                        <Image src={'/images/dots.png'} width={4}
                                            height={6} alt="" />
                                        <div className={styles.position}>{getPositionCommon(sport)}</div>
                                    </div>

                                )
                            }
                            {
                                interest.sport === "basketball" && sportName === "basketball" &&
                                (
                                    <div className={styles.row}>
                                        <Image src={'/images/dots.png'} width={4}
                                            height={6} alt="" />
                                        <div className={styles.position}>{getPositionCommon(sport)}</div>
                                    </div>

                                )
                            }
                        </div>
                    )
                })}
            </>)
    }, [sportInterest, sportName])

    const { buttonText, buttonType } = useMemo(() => {
        let isFollowing =
            user?.following.find((i) => i === id);

        let isRequested =
            user?.sent_requests.find((i) => i === id);
        let buttonType = ButtonType.DARK;
        const buttonText = isFollowing
            ? 'Following'
            : isRequested
                ? 'Requested'
                : 'Follow';

        if (buttonText === 'Following' || buttonText === 'Requested') {
            buttonType = ButtonType.BORDER;
        } else {
            buttonType = ButtonType.DARK;
        }

        return { buttonText, buttonType }
    }, [id, user?.following, user?.sent_requests])


    return (
        <div className={styles.container}>
            <div className={classNames(styles['row'])}>
                <div className={styles.left}>
                    <Image className={styles.image} height={49} width={49} src={imageUrl ? imageUrl : '/images/empty_user_profile.webp'} alt={"player Image"} />
                </div>
                <div className={styles.right}>
                    <p className={styles['title']}>{title}</p>
                    <p className={classNames(styles['subtitle'], styles['white2'])}>{subTitle}</p>
                    {extra && skill_rating && (<div className={classNames(styles['mt-4'], styles.row)}>
                        <div className={styles.cricle_icon} >
                            {ratingComponent()}
                        </div>
                        {ratingNumber()}
                        <Image className={styles.star} src={"/images/reviewstar.png"} width={15}
                            height={15} alt="" />
                        {renderSportInterest()}
                    </div>)}
                </div>
            </div>
            {showFollow && id !== user?._id && (
                <div className={styles.button_Container}>
                    <FollowButton buttonType={buttonType} text={buttonText} onPress={() => { onFollow && onFollow() }} />
                </div>
            )}
        </div>
    )
}

export default PlayerItem;