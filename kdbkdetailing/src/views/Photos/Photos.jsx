import React from 'react';
import './photos.css';

function Photos() {
  return (
    <div className="photos-container">
      <div className="photos-header">
        <h1 className="header">Nasze realizacje</h1>
      </div>
      <div className="photos-content">
        <div className="photos-content-div">
          <div className="photos-content-div-overflow">
            <h2 className="photos-content-header">Jaguar XE R-Sport</h2>
            <p className="photos-content-p">Samochód po usłudze Mycie Exclusive</p>
          </div>
        </div>
        <div className="photos-content-div">
          <div className="photos-content-div-overflow">
            <h2 className="photos-content-header">VW Passat</h2>
            <p className="photos-content-p">Samochód po usłudze Mycie Klasyczne</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
