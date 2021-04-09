import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface MenuProps {
  animation: string;
  animationSecond: string;
  secondShow: string;
}

const variants = {
  hidden: {
    y: "100vh",
  },
  animateIN: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  secondAnimateIN: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      when: "beforeChildren",
      ease: "easeInOut",
      staggerChildren: 0.4,
    },
  },
  secondAnimateOUT: {
    y: "100vh",

    transition: {
      duration: 0.5,
      delay: 0.5,
      when: "afterChildren",
      staggerChildren: 0.4,
    },
  },

  animateOUT: {
    y: "100vh",

    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

const children = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 2,
      delay: 1,
    },
  },
  hideChildren: {
    opacity: 0,

    transition: {
      duration: 0.5,
    },
  },
};

const Menu: React.FC<MenuProps> = ({
  animation,
  animationSecond,
  secondShow,
}) => {
  return (
    <MenuContainer>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={animation}
        className="backDrop"
      ></motion.div>
      <motion.div
        initial="hidden"
        variants={variants}
        animate={animationSecond}
        className="menuContainer"
      >
        <motion.h1 variants={children} animate={secondShow}>
          I
        </motion.h1>
        <motion.h1 variants={children} animate={secondShow}>
          LOVE
        </motion.h1>
        <motion.h1 variants={children} animate={secondShow}>
          YOU
        </motion.h1>
        <motion.h1 variants={children} animate={secondShow}>
          MY DARLENG
        </motion.h1>
      </motion.div>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  .backDrop {
    background: #262629;
    width: 100%;
    height: 100vh;
    z-index: 100;
    position: fixed;
    z-index: 10;
  }
  .menuContainer {
    background: #171719;
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100%;
    justify-content: center;
    position: fixed;
    z-index: 10;
    color: #f2f2fa;

    h1 {
      font-size: 20px;
      color: #f2f2fa;
      margin-left: 5px;
    }
  }

  @media only screen and (min-width: 768px) {
    .menuContainer {
      h1 {
        font-size: 40px;
      }
    }
  }
`;
