import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Firts TypeScript App
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">To-Do list</a>
          </li>
          <li>
            <a href="/">Info</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
