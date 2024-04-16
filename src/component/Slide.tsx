import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"
import { relative } from "path";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Slide = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const variants = {
    hidden: {
      x: -150,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };


  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  )
}