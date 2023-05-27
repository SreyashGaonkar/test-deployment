import React from 'react'
import Image from 'next/image';
//styles
import styles from './input.module.scss';
//types
import { inputPropsType } from './types';
import classNames from 'classnames';


const Input = ({ phone, leftIcon, rightIcon, ...otherprops }: inputPropsType) => {

    return (
        <div className={classNames(styles.container)}>
            {phone && (<div className={styles.row}>
                <p className={styles.text}>+91</p>
                <div className={styles.line} />
            </div>)}

            <input className={classNames(styles.input_wrapper, styles.text)} {...otherprops} />
            {rightIcon && rightIcon}
        </div>
    )
}

export default Input;