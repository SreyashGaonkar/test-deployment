import React, { useEffect, useState } from 'react'
import { useTransition, animated, useSpring } from '@react-spring/web'
//styles
import styles from './notification.module.scss';
//styles
import { NotificationPropType } from './types';
import classNames from 'classnames';

const Notification = ({ message, onClose }: NotificationPropType) => {

    const [open, setOpen] = useState<boolean>(false);
    const props = useSpring({ top: open ? 0 : -136 })

    useEffect(() => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            setTimeout(() => {
                onClose();
            }, 600);
        }, 3000)
    }, [onClose])

    return (
        <animated.div style={props} className={classNames(styles.container, styles['ph-24'], styles.slide_in)}>
            <div>
                <p className={styles.title}>
                    {message}
                </p>
            </div>
        </animated.div>
    );
}

export default Notification