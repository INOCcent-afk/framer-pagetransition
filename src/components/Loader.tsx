import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const containerVariant = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-100vh",
    transition: { when: "afterChildren", duration: 1, delay: 5 },
  },
};

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 5 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },

  visible: {
    opacity: [1, 1, 0],
    pathLength: [0, 1, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};

export const Loader: React.FC = () => {
  return (
    <LoaderContainer
      variants={containerVariant}
      initial="initial"
      animate="animate"
    >
      <Svg
        className="pizza-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          fill="none"
          d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          variants={pathVariants}
        />
      </Svg>
    </LoaderContainer>
  );
};

const LoaderContainer = styled(motion.div)`
  width: 100%;
  position: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: #171719;
`;

const Svg = styled(motion.svg)`
  width: 100px;
  overflow: visible;
  stroke: #fff;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;

  @media only screen and (min-width: 768px) {
    width: 200px;
  }
`;
