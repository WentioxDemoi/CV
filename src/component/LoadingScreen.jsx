import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './LoadingAnim';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, delay: 2 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9998,
            background: 'linear-gradient(to bottom right, #1A2E3B, #14242D)',
            display: 'flex',
            flexDirection: 'column', // Ajout pour organiser les éléments en colonne
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '3em',
            fontFamily: 'Fredoka One',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
          onAnimationComplete={handleAnimationComplete}
        >
          {/* <div>Bienvenue</div> */}
          <Loader />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;
