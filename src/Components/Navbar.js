import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="navbar-brand">Tigran Grigoryan</div>


    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact >
          Home
        </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/aboutme" >
          About Me
        </NavLink>
      </li>
    </ul>
  </nav>
);
