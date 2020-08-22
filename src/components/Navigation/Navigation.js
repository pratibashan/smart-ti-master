import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/tx-logo.png';

const Navigation = () => {
  return (
    <nav className='navbar'>
      <div className='header'>
        <img src={logo} alt='' className='logo' />
        <h1>Texas</h1>
      </div>
      <ul>
        <li>
          <NavLink
            exact
            to='/about'
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/facts'
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Facts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
