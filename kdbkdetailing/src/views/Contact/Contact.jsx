/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './contact.css';
import { GoLocation, GoMail } from 'react-icons/go';
import { RiPhoneLine } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';

function Contact() {
  return (
    <div className="contact-div">
      <h1 className='title-header'>KONTAKT</h1>
      <ul className="contact-list">
        <li className="contact-list-element">
          <span className='icon'><RiPhoneLine /></span>
          &nbsp;
          <span className='icon-text-wrap'>
            TELEFON
            <span className='contact-text'>+48 791 355 380</span>
          </span>
        </li>
        <li className="contact-list-element">
          <span className='icon'><GoLocation /></span>
          &nbsp;STUDIO
        </li>
        <li className="contact-list-element">
          <span className='icon'><GoMail /></span>
          &nbsp;E-MAIL
        </li>
        <li className="contact-list-element">
        <span className='icon'><AiOutlineFacebook /></span>
          &nbsp;FACEBOOK
        </li>
        <li className="contact-list-element">
        <span className='icon'><AiOutlineInstagram /></span>
          &nbsp;INSTAGRAM
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
