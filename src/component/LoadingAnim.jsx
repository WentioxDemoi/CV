import React from 'react';
import { motion } from 'framer-motion';

const loaderVariant = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30],
    scale: [0.5, 1, 0.5],
    transition: {
      x: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut"
      },
      y: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.5,
        ease: "easeInOut"
      },
      scale: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut"
      }
    }
  }
};

const Loader = () => {
  return (
    <div>
      {/* Premier point */}
      <motion.div
        className='bg-white z-100  h-2 w-2 rounded-full flex mt-20'
        variants={loaderVariant}
        animate="animateOne" // Ajout d'un délai pour le premier point
      ></motion.div>
    </div>
  );
};

export default Loader;
