import React, { useState, useEffect, useCallback } from 'react'
import { ModalPropsType } from './types'
import { useTransition, animated, useSpring } from '@react-spring/web';

import styles from './landing_modal.module.scss';
import classNames from 'classnames';

const Landing_modal = ({ show, children, onClose }: ModalPropsType) => {
    const [open, setOpen] = useState<boolean>(show);
    const opacity = useSpring({ opacity: open ? 1 : 0 });

    useEffect(() => {
        setOpen(show);
    }, [show])

    const close = useCallback(() => {
        setOpen(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    if (!show) return null;
    return (
        <div className={classNames(styles.container)}>
            <animated.div onClick={close} style={opacity} className={classNames(styles.overlay_container)} />

            <div className={classNames(styles.subContainer, open ? styles.slide_in : styles.slide_out)}>
                {children}
            </div>
        </div>
    )
}

export default Landing_modal