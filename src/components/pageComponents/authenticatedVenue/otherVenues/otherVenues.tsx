import React, { useCallback, useMemo, useState, useEffect, useContext } from 'react'
import classNames from 'classnames'
//styles
import styles from './otherVenues.module.scss'
//types

//components
import VenueItem from '../venueItem/venueItem'
import { CloseByVenueData, CloseByVenueType, GetCloseByVenueBody, getCloseByVenues } from '@/apis/getCloseByVenues'
import { AppContext } from '@/providers/app'
import { OtherVenuePropType } from './type'


const OtherVenues = ({ id, sport }: OtherVenuePropType) => {

    const { user } = useContext(AppContext)

    const [venues, setVenues] = useState<CloseByVenueType[]>([]);

    const fetchVenues = useCallback(async () => {
        try {
            let body: GetCloseByVenueBody = {
                user_id: user?._id,
                sport: sport
            }
            const response = await getCloseByVenues(id, body);
            setVenues(response);
            console.log('fetchVenues', response)
        } catch (e) {
            console.error('fetchVenues error', e);
        }
    }, [id, sport, user?._id])

    useEffect(() => {
        if (user?._id && sport) {
            fetchVenues();
        }

    }, [fetchVenues, sport, user?._id]);

    const renderItem = useCallback(() => (
        <>
            {venues.map((i, index) => (
                <div key={index} className={classNames(styles['mb-56'])}>
                    <VenueItem data={i} />
                </div>

            ))}
        </>
    ), [venues])

    if (venues.length === 0) return null;

    return (
        <div className={classNames(styles.container, styles['borderTop'], styles['pt-36'], styles['pb-48'])}>
            <p className={classNames(styles['title_4'], styles['white1'])}>Other venues closeby</p>
            <div className={classNames(styles['mt-28'], styles['row'], styles['align-center'], styles['scroll-y'])}>
                {renderItem()}
            </div>
        </div>
    )
}

export default OtherVenues;