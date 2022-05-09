import React from "react"
import './navbar.css'

function Navbar() {
  return (
    <div className="container">
      <div className="nav-div-1"></div>
      <div className="nav-div-2"></div>
      <div className="nav-div-3">
        <ol>
          <li>O nas</li>
          <li>Oferta</li>
          <li>Cennik</li>
          <li>Realizacje</li>
          <li>Kontakt</li>
        </ol>
      </div>
    </div>
  )
}

export default Navbar 