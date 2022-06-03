import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import {
  MdOutlineHome,
  MdOutlineLocalOffer,
  MdAttachMoney,
  MdOutlinePhoto,
  MdPhone
} from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

function Navbar() {
  return (
    <div className="container">
      <div className="nav-div-1">
        <div className="logo">
          <p>KDBK</p>
          <span className="small-text">DETAILING</span>
        </div>
      </div>
      <div className="nav-div-2"></div>
      <div className="nav-div-3">
        <ol>
          <li className="nav-li">
            <NavLink to="/" className="link">
              <p className="nav-text">O nas</p>
              <div className="nav-icon">
                <MdOutlineHome />
              </div>
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/oferta" className="link">
              <p className="nav-text">Oferta</p>
              <div className="nav-icon">
                <MdOutlineLocalOffer />
              </div>
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/cennik" className="link">
              <p className="nav-text">Cennik</p>
              <div className="nav-icon">
                <MdAttachMoney />
              </div>
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/realizacje" className="link">
              <p className="nav-text">Realizacje</p>
              <div className="nav-icon">
                <MdOutlinePhoto />
              </div>
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/kontakt" className="link">
              <p className="nav-text">Kontakt</p>
              <div className="nav-icon">
                <MdPhone />
              </div>
            </NavLink>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
