import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
       <NavLink
          to="/"
          exact
          activeStyle={{
            background: 'green'
          }}
        >Home</NavLink>

        <NavLink
          to="/movies"
          exact
          activeStyle={{
            background: 'green'
          }}
        >Movies</NavLink>

        <NavLink
          to="/directors"
          exact
          activeStyle={{
            background: 'green'
          }}
        >Directors</NavLink>

        <NavLink
          to="/actors"
          exact
          activeStyle={{
            background: 'green'
          }}
        >Actors</NavLink>
    </div>
  );
};

export default NavBar;
