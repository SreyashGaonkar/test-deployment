import React, { useMemo } from 'react'
import classNames from 'classnames'
//styles
import styles from './billinfo.module.scss'
//types
import { BillInfoType } from './types';
//utils
import { roundOff } from '@/helper/roundOdd';
import Image from 'next/image';

const BillInfo = ({ gameLimit, serviceFee, setServiceFeeToggle, costPerHead }: BillInfoType) => {
    const cost_per_head = useMemo(() => {
        return roundOff(costPerHead / gameLimit);
    }, [costPerHead, gameLimit])
    const service_fee_charge = useMemo(() => {
        return roundOff(
            cost_per_head * (serviceFee ? serviceFee : 0.02),
        );
    }, [cost_per_head, serviceFee])
    const total_amount = useMemo(() => { return costPerHead + (costPerHead * 0.02) }, [costPerHead])
    const amount_to_pay = useMemo(() => { return roundOff(total_amount / gameLimit) }, [gameLimit, total_amount])
    return (
        <div className={classNames(styles.container, styles['borderBottom'], styles['pt-36'], styles['pb-48'])}>
            <p className={classNames(styles['title_4'], styles['white1'])}>Bill Details</p>
            <div className={classNames(styles['mt-28'],)}>
                <div className={classNames(styles['row'], styles['align-center'], styles['justify-space-between'], styles['mt-16'])}>
                    <p className={classNames(styles['sub'], styles['white2'])}>Your Share</p>
                    <p className={classNames(styles['sub'], styles['white2'])}>{cost_per_head}</p>
                </div>
                <div className={classNames(styles['row'], styles['align-center'], styles['justify-space-between'], styles['mt-16'])}>
                    <div className={classNames(styles['row'], styles['align-center'])}>
                        <p className={classNames(styles['sub'], styles['white2'], styles['mr-10'])}>Service Fee</p>
                        <Image onClick={setServiceFeeToggle} height={14} width={14} alt="icon" src={'/icons/info_icon.png'} />
                    </div>

                    <p className={classNames(styles['sub'], styles['white2'])}>{service_fee_charge}</p>
                </div>
                <div className={classNames(styles['row'], styles['align-center'], styles['justify-space-between'], styles['mt-16'])}>
                    <p className={classNames(styles['sub'], styles['blue1'])}>Total</p>
                    <p className={classNames(styles['sub'], styles['blue1'])}>{amount_to_pay}</p>
                </div>
            </div>
        </div>
    )
}

export default BillInfo