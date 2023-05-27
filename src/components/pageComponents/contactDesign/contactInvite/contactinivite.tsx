import React from 'react';
import classNames from 'classnames';
import {motion} from 'framer-motion';
import styles from './contactinvite.module.scss';

const Contactinivite = () => {
  return (
    <div>
         <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.4 }}>
            <div className={classNames(styles.contact_title_desktop)}>We would love to hear from you!</div>
            <div className={classNames(styles.contact_content_desktop)}>Drop us a message if you’d like to be a part of the Turf Town
            <br/> universe or for any other queries. </div>
            <div className={classNames(styles.dotted_line_desktop)} ></div>
          </motion.div>
    </div>
  )
}

export default Contactinivite