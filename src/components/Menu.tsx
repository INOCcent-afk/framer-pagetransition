import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <MenuContainer>
      <div className="backDrop"></div>
      <div className="menuContainer">
        <h1>I</h1>
        <h1>LOVE</h1>
        <h1>YOU</h1>
        <h1>MY DARLENG</h1>
      </div>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  position: relative;
  z-index: 10;

  .backDrop {
    background: #262629;
    width: 100%;
    height: 100vh;
    z-index: 100;
    position: absolute;
    top: -100vh;
  }
  .menuContainer {
    background: #171719;
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100%;
    justify-content: center;
    position: absolute;
    left: 0;

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
