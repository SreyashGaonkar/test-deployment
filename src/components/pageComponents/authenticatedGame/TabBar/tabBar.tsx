import React, { useState } from 'react'
import classNames from 'classnames';
//styles
import styles from './tabBar.module.scss';
//types
import { TabbarProps } from './types';


const TabBar = ({ selectedTab = 0, tabNames, onClick }: TabbarProps) => {



    return (
        <div className={styles.container}>
            {tabNames.map((item, index) => {
                return (
                    <div onClick={() => { onClick(index) }} className={classNames(styles.subContainer, selectedTab === index && styles.border_bottom_blue)} key={index}>
                        <p className={classNames(styles['sub'], styles['white1'], styles['align_text_center'])}>{item}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default TabBar