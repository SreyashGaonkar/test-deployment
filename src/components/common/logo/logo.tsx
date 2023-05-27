import React from 'react';
import Image from 'next/image';
import styles from './logo.module.scss'
import classNames from 'classnames';
import { useRouter } from 'next/router';

const Logo = () => {

    const router = useRouter();

    const homePage = () =>{
        router.push("/")
    }
    return (
        <div className={classNames(styles.container_logo)}>
            <Image src={'/images/Logowhite.png'} alt="logo" height={42} width={76} 
            onClick={homePage}/>
        </div>
    )
}

export default Logo