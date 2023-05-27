import React from 'react';
import classNames from 'classnames';
import styles from './contact_desktop_design.module.scss';
import Image from 'next/image';
import contact_desktop_image from '../../../../../public/landingimages/contactus.webp';
import {motion} from 'framer-motion'



const Contact_desktop_design = () => {
  return (
    <div>
           <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.4 }} className={classNames(styles.contact_Image)}>
            <Image src={contact_desktop_image} alt="contact_desktop_image"
             className={styles.contact_girl_image} />
          </motion.div>


    </div>
  )
}

export default Contact_desktop_design