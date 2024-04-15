import React from 'react';
import { motion } from 'framer-motion';
import Loader from './LoadingAnim';

const SplashPage = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 3, delay: 3 }}
      style={{
        position: 'fixed',
        zIndex: 40,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column', // Ajout pour organiser les éléments en colonne
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #1A2E3B, #14242D)',
        color: '#FFF',
        fontSize: '2rem',
      }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        transition={{ delay: 3, duration: 3 }}
        style={{
          // width: '200px',
          // height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Welcome!
        <Loader />
      </motion.div>
      
    </motion.div>
  );
};

export default SplashPage;
