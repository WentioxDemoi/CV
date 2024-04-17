import React from 'react';
// import { useScroll } from 'framer-motion';
import ScrollProgressBar from '../component/ScrollBar';
import Signature from '../Assets/Signature White.png'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function Logo() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });
  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 z-10 flex justify-center items-center h-24 bg-gray-600"
        onClick={scrollToTop}
        style={{ cursor: "pointer" }}
      >
        <img className="h-8" src={Signature} alt="Logo" />
        <ScrollProgressBar />
      </div>

      <div className="fixed top-24 left-0 right-0 z-30 h-20 lg:h-32 bg-gradient-to-t from-transparent via-transparent to-white text-white flex justify-center items-center"></div>
      <div className="fixed bottom-0 left-0 right-0 z-30 h-20 lg:h-32 bg-gradient-to-t from-white via-transparent to-tranparent text-white flex justify-center items-center"></div>
    </div>
  );
}

export default Logo;


