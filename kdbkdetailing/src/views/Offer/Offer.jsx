import React from 'react';
import './offer.css';

function Offer() {
  return (
    <div className="offer-container">
      <div className="offer-header">
        <h1 className="header">Co oferujemy?</h1>
      </div>
      <div className="offer-content">
        <div className="offer-content-div">
          <div className="offer-content-div-overflow">
            <p className="offer-p">Mycie ręczne</p>
          </div>
        </div>
        <div className="offer-content-div">
          <div className="offer-content-div-overflow">
            <p className="offer-p">Korekta lakieru</p>
          </div>
        </div>
        <div className="offer-content-div">
          <div className="offer-content-div-overflow">
            <p className="offer-p">Ochrona lakieru, woskowanie</p>
          </div>
        </div>
        <div className="offer-content-div">
          <div className="offer-content-div-overflow">
            <p className="offer-p">Pranie tapicerki</p>
          </div>
        </div>
        <div className="offer-content-div">
          <div className="offer-content-div-overflow">
            <p className="offer-p">Pielęgnacja skóry</p>
          </div>
        </div>
        <div className="offer-content-div">
          <div className="offer-content-div-overflow">
            <p className="offer-p">Regeneracja reflektorów</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
