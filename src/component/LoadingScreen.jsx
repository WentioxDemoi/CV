// import React from 'react';
// import { motion } from 'framer-motion';
// import Loader from './LoadingAnim';

// const SplashPage = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0 }}
//       transition={{ duration: 3, delay: 3 }}
//       style={{
//         position: 'fixed',
//         zIndex: 40,
//         width: '100vw',
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column', // Ajout pour organiser les éléments en colonne
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: 'linear-gradient(to bottom right, #1A2E3B, #14242D)',
//         color: '#FFF',
//         fontSize: '2rem',
//       }}
//     >
//       <motion.div
//         initial={{ scale: 1 }}
//         animate={{ scale: 0 }}
//         transition={{ delay: 3, duration: 3 }}
//         style={{
//           // width: '200px',
//           // height: '200px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         Welcome!
//         <Loader />
//       </motion.div>
      
//     </motion.div>
//   );
// };

// export default SplashPage;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <>
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
            Bienvenue
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;