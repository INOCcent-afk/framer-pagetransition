import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Marquee direction="left" speed={200} className="footerAnimate">
        <h1>DESIGN WORK FOR OURS.</h1>
        <h1>SEIZE THE DAY.</h1>
        <h1>DESIGN WORK FOR OURS.</h1>
        <h1>SEIZE THE DAY.</h1>
        <h1>DESIGN WORK FOR OURS.</h1>
        <h1>SEIZE THE DAY.</h1>
        <h1>DESIGN WORK FOR OURS.</h1>
        <h1>SEIZE THE DAY.</h1>
        <h1>DESIGN WORK FOR OURS.</h1>
        <h1>SEIZE THE DAY.</h1>
      </Marquee>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  overflow: hidden;
  min-height: 200px;
  position: relative;

  .footerAnimate {
    width: 200%;
    display: flex;
    position: absolute;
    align-items: center;

    .overlay::before,
    .overlay::after {
      display: none !important;
    }

    h1 {
      white-space: nowrap;
      margin-left: 50px;
      font-style: italic;
      font-size: 40px;
      -webkit-text-stroke: 1px #bd8e8a;
      -webkit-text-fill-color: transparent;
    }
  }
`;
