import React, { useCallback, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
//styles
import styles from './otherSports.module.scss'
//types

//components
import ReviewItem from '../reviewItem/reviewItem'
import SportsItem from '../sportsItem/sportsItem'
import { getVenueGames } from '@/apis/getVenueGames'


const OtherSports = ({ id }: { id: string }) => {

    const [showMore, setShowMore] = useState<boolean>(false);
    const [games, setGames] = useState<any[]>([]);

    const fetchVenueGames = useCallback(async () => {
        try {
            const response = await getVenueGames(id);
            setGames(response);
            console.log('fetchVenueGames', response)
        } catch (e) {
            console.error('fetchVenueGames error', e);
        }
    }, [id])

    useEffect(() => {
        if (id) {
            fetchVenueGames();
        }
    }, [fetchVenueGames, id]);


    const renderItem = useCallback(() => (
        <>
            {/* {getRating.map((i, index) => (
                <div key={index} className={classNames(styles['mb-56'])}>
                    <ReviewItem imageUrl={i?.user_profile_picture} userName={i?.name} date={i?.date} comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                </div>

            ))} */}
        </>
    ), [])

    if (games.length === 0) return null

    return (
        <div className={classNames(styles.container, styles['borderTop'], styles['pt-36'], styles['pb-48'])}>
            <p className={classNames(styles['title_4'], styles['white1'])}>Other sports in this venue</p>
            <div className={classNames(styles['mt-28'])}>
                {/* <Rating type={undefined} ratingData={undefined} /> */}
                {/* {renderItem()} */}
                <SportsItem />
            </div>
        </div>
    )
}

export default OtherSports