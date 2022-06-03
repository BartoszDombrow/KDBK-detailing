/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-div">
      <h1 className='title-header'>KONTAKT</h1>
      <ul className="contact-list">
        <li className="contact-list-element">
          TELEFON
        </li>
        <li className="contact-list-element">
          STUDIO
        </li>
        <li className="contact-list-element">
          E-MAIL
        </li>
        <li className="contact-list-element">
          FACEBOOK
        </li>
        <li className="contact-list-element">
          INSTAGRAM
        </li>
      </ul>
      <iframe
        className="contact-map"
        src="https://maps.google.com/maps?q=zgierska%2027%20skotniki&t=&z=11&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"></iframe>
    </div>
  );
}

export default Contact;
