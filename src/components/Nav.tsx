import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav: React.FC = () => {
  return (
    <Header>
      <Link to="/">
        <div className="logo">DAVE INOC</div>
      </Link>

      <Burger>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px 30px;
  align-items: center;
  z-index: 20;
  position: relative;

  .logo {
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    & {
      padding: 50px 5%;
    }
  }
`;

const Burger = styled.div`
  width: 30px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 100%;
    height: 2px;
    background: #f2f2fa;
  }
`;
