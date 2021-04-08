import React from "react";
import { Link, NavLink } from "react-router-dom";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <ul>
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="services">
          Services
        </NavLink>
      </li>
    </ul>
  );
};
