import React from 'react';
import Image from 'next/image';
import toppurplebg from '../../../../public/landingimages/navleftshadow_optimized.webp';
import rightshadow from '../../../../public/landingimages/toprightshadow_optimized.webp';
import styles from './top_shadows.module.scss';
import "animate.css"

const Top_shadows = () => {
  return (
    <>
    <div className='animate__animated animate__fadeIn'>
      <Image src={toppurplebg} alt="shadow1" className={styles.leftshadow} />
      <Image src={rightshadow} alt="shadow2" className={styles.rightshadows} />
      </div>
      </>
  )
}

export default Top_shadows