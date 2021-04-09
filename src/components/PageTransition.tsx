import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const PageTransition = () => {
  return (
    <div>
      <FirstContainer></FirstContainer>
      <SecondContainer></SecondContainer>
    </div>
  );
};

export default PageTransition;

const FirstContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: #262629;
`;

const SecondContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: #171719;
`;
