import React from 'react';
//styles
import styles from './progressbar.module.scss';
import { ProgressBarPropType } from './type';
import classNames from 'classnames';

const ProgressBar = ({ progress }: ProgressBarPropType): JSX.Element => {
    let style = {
        width: `${progress}%`
    }
    return (
        <div className={styles.container}><div className={classNames(styles.progress)} style={style} /></div>
    )
}

export default ProgressBar;