import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Adopt from './Adopt';

function Navigation() {
  return (
    <nav>
      <NavLink
        style={{ color: 'red', fontSize: '20px', border: `1px solid black` }}
        to={`/`}
      >
        Home
      </NavLink>
      <NavLink
        style={{ color: 'green', fontSize: '20px', border: `1px solid black` }}
        to={`/adopt`}
      >
        Adopt
      </NavLink>
    </nav>
  );
}

export default Navigation;
