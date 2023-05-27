
import React, { useState } from "react";
import classNames from "classnames";
//styles
import styles from './toggleSwitch.module.scss'
//type
import { ToggleSwitchType } from "./types";


const ToggleSwitch = ({ onClick, value }: ToggleSwitchType) => {
    return (
        <div onClick={onClick} className={classNames(styles.container, value ? styles.flex_end : styles.flex_start)} >
            <div className={styles.toggle_switch} />
        </div>
    );
};

export default ToggleSwitch;