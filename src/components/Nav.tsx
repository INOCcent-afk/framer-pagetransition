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

      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/services">
            Services
          </NavLink>
        </li>
      </ul>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px 30px;
  align-items: center;

  .logo {
    font-weight: bold;
  }

  ul {
    align-items: center;
    display: none;
    list-style: none;
    li {
      margin-left: 15px;
    }
  }

  @media only screen and (min-width: 768px) {
    & {
      padding: 50px 5%;
    }
    ul {
      display: flex;
    }
  }
`;

const Burger = styled.div`
  width: 30px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  span {
    width: 100%;
    height: 2px;
    background: #000;
  }

  @media only screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
`;
