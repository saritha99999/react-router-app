import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/foo">Foo</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/bar">Bar</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/x">X</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/y">Y</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/z">Z</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
