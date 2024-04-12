import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';


const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
      await animate("#loading", {x:5000, y:5000}, {duration: 10})
  }

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };
 
  return (
    <AnimatePresence>
      {isLoading && (
        <>
        {handleAnimate}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 100 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 40,
              background: 'linear-gradient(to bottom right, #1A2E3B, #14242D)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '3em',
              fontFamily: 'Fredoka One', //to change
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
            onAnimationComplete={handleAnimationComplete}
          >
            Bienvenue
            <div id="loading" className='bg-black z-100 h-24 w-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
          </motion.div>
        </>
      )}
      <div className='bg-black z-100 h-24 w-24'>

      </div>
    </AnimatePresence>
  );
};

export default LoadingPage;

