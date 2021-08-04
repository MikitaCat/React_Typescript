import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-4 px1">
        <NavLink to="/" className="brand-logo">
          Firts TypeScript App
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">To-Do list</NavLink>
          </li>
          <li>
            <NavLink to="/info">Info</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
