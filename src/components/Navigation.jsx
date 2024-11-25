import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><NavLink to="/" end>Introduction</NavLink></li>
        <li><NavLink to="/output">Output</NavLink></li>
        <li><NavLink to="/summary">Summary</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;

