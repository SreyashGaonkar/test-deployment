
import classNames from 'classnames';
import Cookies from 'js-cookie';
import useDetectKeyboardOpen from "use-detect-keyboard-open";
//styles
import styles from './name.module.scss';
//component
import Header from '@/components/common/header/header';
import Input from '@/components/common/input/input';
import IconButton from '@/components/common/iconButton/iconButton';
import { NamePropType } from './type';
import { useCallback, useMemo, useState } from 'react';
import { checkDoubleSpace } from '@/helper/doubleSpace';
import { checkSpecialCharacter } from '@/helper/specialCharacter';
import { ModifyUser, ModifyUserBody } from '@/apis/modifyUser/modifyUser';

const Name = ({ next, back, token, id }: NamePropType) => {
    const isKeyboardOpen = useDetectKeyboardOpen();

    const [name, setName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const updateName = useCallback(async () => {
        if (name.length < 3) {
            setError('Please enter minimum of 3 charcters');
        } else if (checkDoubleSpace(name)) {
            setError("You can’t have double spaces in your name. Please try again.");
        } else if (checkSpecialCharacter(name)) {
            setError("Special characters and numbers are not allowed. Lets give it another go.");
        } else {
            setError('');
            setLoading(true)
            try {
                const body: ModifyUserBody = {
                    name: name.trim(),
                    name_status: true,
                }
                if (id) {
                    const response = await ModifyUser(token, id, body);
                }
                setLoading(false)
                next && next(name);

            } catch (e) {
                setLoading(false)
                console.log('error ModifyUser', e);
            }
        }
    }, [id, name, next, token]);

    const changeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > e.target.maxLength) {
            setName(e.target.value.slice(0, e.target.maxLength))
        } else {
            setName(e.target.value)
        }
        setError('');
    }, [])

    return (
        <div className={styles['container']}>
            <Header back={back} />
            <div className={classNames(styles['ph-24'], styles['mb-88'])}>
                <p className={classNames(styles['login_title'])}>Tell us your full</p>
                <p className={classNames(styles['login_title'])}>name?</p>
            </div>
            <div className={classNames(styles['ph-24'])}>
                <Input value={name} maxLength={30} placeholder='Full name' onChange={changeName} />
            </div>

            {error !== '' && (<div className={classNames(styles['ph-24'])}>
                <p className={classNames(styles.errorText)}>{error}</p>
            </div>)}

            <div className={classNames(styles['button_wrapper'], isKeyboardOpen && styles['bottom_23'])} >
                <p className={styles['terms_text']}>
                    {name.length}/30 Characters
                </p>
                <IconButton loading={loading} disabled={loading} onClick={updateName} />
            </div>
        </div>
    )
}

export default Name;