import React from 'react'
import classNames from 'classnames'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BillInfoShimmer from '../billInfo/billInfoShimmer'
import styles from './payJoinShimmer.module.scss'


const PayJoinShimmer = () => {
    return (
        <SkeletonTheme baseColor="#202226" highlightColor="#444">
            <div className={classNames(styles.container, styles['ph-16'])}>
                <div className={classNames(styles['borderBottom'], styles['pt-36'], styles['pb-48'])}>
                    <Skeleton style={{ width: '100%', height: 128 }} />
                </div>
                <BillInfoShimmer />
                <div className={classNames(styles['borderBottom'], styles['pt-36'], styles['pb-48'])}>
                    <Skeleton style={{ width: 160, height: 24, marginBottom: 30 }} />
                    <Skeleton style={{ width: 130, height: 18, marginBottom: 8 }} />
                    <Skeleton style={{ width: 130, height: 18, marginBottom: 8 }} />
                    <Skeleton style={{ width: 130, height: 18, marginBottom: 8 }} />

                </div>
            </div>
        </SkeletonTheme>
    )
}

export default PayJoinShimmer