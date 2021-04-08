import React from "react";
import { NavLink } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
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
  );
};
