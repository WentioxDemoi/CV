import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const loaderVariant = {
  animateOne: {
    x: [-40, 40],
    y: [0, -60],
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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <motion.div
        className='bg-white z-100  h-4 w-4 rounded-full flex mt-20'
        variants={loaderVariant}
        animate="animateOne"
        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      />
    </div>
  );
};

export default Loader;
