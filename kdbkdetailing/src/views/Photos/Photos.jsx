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
          <div className="photos-content-div-overflow"></div>
        </div>
        <div className="photos-content-div">
          <div className="photos-content-div-overflow"></div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
