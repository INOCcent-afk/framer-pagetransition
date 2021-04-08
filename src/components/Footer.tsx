import React from "react";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="footerAnimate">
        <h1>DESIGN WORKD FOR OURS.</h1>
        <h1>SEIZE THE DAY.</h1>
      </div>
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
    transform: translateX(100%);
    animation: marquee 40s linear infinite;

    h1 {
      white-space: nowrap;
      margin-left: 50px;
    }
  }

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
