import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      controls.start({ width: `${progress}%`, transition: { duration: 0 } });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      className="absolute bottom-2 left-0 h-1 bg-gray-900 rounded-xl"
      style={{ width: "0%" }}
      initial={{ width: "0%" }}
      animate={controls}
    />
  );
};

export default ScrollProgressBar;
