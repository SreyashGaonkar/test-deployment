import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import classNames from 'classnames';
import styles from './contactDesign.module.scss'

const ContactDesign = () => {
  return (
 <>
     <div className={classNames(styles.contact_container)}>
          <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.4 }} className={classNames(styles.contact_Image)}>
            <Image
              src={'/landingimages/contactimage.webp'} alt="contactImage"
              height={340} width={340} />
          </motion.div>
          <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.4 }}>
            <div className={classNames(styles.contact_title)}>We would love to hear from you!</div>
            <div className={classNames(styles.contact_content)}>Drop us a message if you’d like to be a part of the Turf Town universe or for any other queries. </div>
            <div className={classNames(styles.dotted_line)} ></div>
          </motion.div>
        </div>

</>
  )
}

export default ContactDesign