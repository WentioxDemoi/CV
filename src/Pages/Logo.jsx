import React from 'react';
import { motion, useSpring, useScroll } from 'framer-motion';
import ScrollProgressBar from '../component/ScrollBar';
import Signature from '../Assets/Signature White.png'


function Logo() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10 flex justify-center items-center h-24 bg-gray-600">
        <img className="h-8 w-auto" src={Signature} alt="Logo" />
        <ScrollProgressBar/>
      </div>
    </div>
  );
}

export default Logo;


