import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Content } from "../components/Content";

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Content />
    </motion.div>
  );
};
