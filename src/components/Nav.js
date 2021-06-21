import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from './SearchForm';

const Nav = props => (

  <header>
  	<SearchForm props={props} />
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/nature'>Nature</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/flowers'>Flowers</NavLink></li>
      </ul>
    </nav>
  </header>
);
export default Nav;