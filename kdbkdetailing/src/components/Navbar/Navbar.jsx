import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="container">
      <div className="nav-div-1"></div>
      <div className="nav-div-2"></div>
      <div className="nav-div-3">
        <ol>
          <li>
            <NavLink to="/" className="link">
              O nas
            </NavLink>
          </li>
          <li>
            <NavLink to="/oferta" className="link">
              Oferta
            </NavLink>
          </li>
          <li>
            <NavLink to="/cennik" className="link">
              Cennik
            </NavLink>
          </li>
          <li>
            <NavLink to="/realizacje" className="link">
              Realizacje
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" className="link">
              Kontakt
            </NavLink>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
