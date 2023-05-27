import React from 'react';
import Logo from '@/components/common/logo/logo'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: -70, opacity: 0 }}
    transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2 }}>
        <Logo />
    </motion.div>
  )
}

export default Navbar