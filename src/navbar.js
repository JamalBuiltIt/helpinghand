import React from 'react';
import './navbar.css';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="navbar-title"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 500 }}
      >
        HelpingHand 🐾
      </motion.h1>
    </motion.nav>
  );
}
