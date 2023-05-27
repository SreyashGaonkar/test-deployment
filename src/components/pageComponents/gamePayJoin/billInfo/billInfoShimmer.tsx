import React, { useMemo } from 'react'
import classNames from 'classnames'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
//styles
import styles from './billinfo.module.scss'


const BillInfoShimmer = () => {

    return (
        <SkeletonTheme baseColor="#202226" highlightColor="#444">
            <div className={classNames(styles.container, styles['borderBottom'], styles['pt-36'], styles['pb-48'])}>
                <p className={classNames(styles['title_4'], styles['white1'])}><Skeleton style={{ width: 120, height: 24 }} /></p>
                <div className={classNames(styles['mt-28'],)}>
                    <div className={classNames(styles['row'], styles['align-center'], styles['justify-space-between'], styles['mt-16'])}>
                        <p className={classNames(styles['sub'], styles['white2'])}> <Skeleton style={{ width: 85, height: 20 }} /></p>
                        <p className={classNames(styles['sub'], styles['white2'])}> <Skeleton style={{ width: 50, height: 20 }} /></p>
                    </div>
                    <div className={classNames(styles['row'], styles['align-center'], styles['justify-space-between'], styles['mt-16'])}>
                        <p className={classNames(styles['sub'], styles['white2'])}><Skeleton style={{ width: 123, height: 20 }} /></p>
                        <p className={classNames(styles['sub'], styles['white2'])}><Skeleton style={{ width: 50, height: 20 }} /></p>
                    </div>
                    <div className={classNames(styles['row'], styles['align-center'], styles['justify-space-between'], styles['mt-16'])}>
                        <p className={classNames(styles['sub'], styles['blue1'])}><Skeleton style={{ width: 85, height: 20 }} /></p>
                        <p className={classNames(styles['sub'], styles['blue1'])}><Skeleton style={{ width: 50, height: 20 }} /></p>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default BillInfoShimmer