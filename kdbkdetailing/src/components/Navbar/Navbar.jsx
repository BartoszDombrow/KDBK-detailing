import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import Logo from '../../../src/assets/images/white_logo_transparent_background.png';

function Navbar() {
  return (
    <div className="container">
      <div className="nav-div-1">
        <div className="logo">
          <p>KDBK</p>
          <span className='small-text'>DETAILING</span>
        </div>
      </div>
      <div className="nav-div-2"></div>
      <div className="nav-div-3">
        <ol>
          <li className='nav-li'>
            <NavLink to="/" className="link">
              O nas
            </NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to="/oferta" className="link">
              Oferta
            </NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to="/cennik" className="link">
              Cennik
            </NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to="/realizacje" className="link">
              Realizacje
            </NavLink>
          </li>
          <li className='nav-li'>
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
