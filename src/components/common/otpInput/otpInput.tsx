import styles from './otpInput.module.scss';
//types
import { OtpInputProps, } from './types';
import classNames from 'classnames';

const OtpInput = (props: OtpInputProps) => {
    return (
        <div className={classNames(styles.container)}>
            <input type={'number'} maxLength={1} className={classNames(styles.input_wrapper, styles.text)} {...props} />
        </div>
    )
}

export default OtpInput;