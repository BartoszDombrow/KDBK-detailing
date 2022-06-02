/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-div">
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
