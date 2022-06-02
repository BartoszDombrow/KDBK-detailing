import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="container">
      <div className="nav-div-1">KDBK</div>
      <div className="nav-div-2"></div>
      <div className="nav-div-3">
        <ol>
          <li>
            <NavLink to="/" className="link">
              <p>O nas</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/oferta" className="link">
              <p>Oferta</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cennik" className="link">
              <p>Cennik</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/realizacje" className="link">
              <p>Realizacje</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" className="link">
              <p>Kontakt</p>
            </NavLink>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
