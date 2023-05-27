//styles
import Image from 'next/image';
import styles from './iconButton.module.scss';
import { iconButtonPropsType } from './types';
import classNames from 'classnames';
import Loading from '../loading/loading';
import { useCallback } from 'react';

const IconButton = ({ disabled = false, loading = false, onClick }: iconButtonPropsType) => {

    const renderIcon = useCallback(() => {
        if (loading) {
            return (
                <Loading />
            )
        } else {
            return (
                <>
                    {!loading && disabled ?
                        <Image height={18} width={18} alt="arrow" src={'/icons/grey_right_arrow.png'} />
                        :
                        <Image height={18} width={18} alt="arrow" src={'/icons/white_right_arrow.png'} />
                    }
                </>

            )
        }
    }, [disabled, loading]);

    return (
        <div className={classNames(styles.container, !disabled && styles.active)} onClick={() => {
            !disabled && onClick();
        }}>
            {renderIcon()}
        </div>
    )
}

export default IconButton