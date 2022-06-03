/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './contact.css';
import { GoLocation, GoMail } from 'react-icons/go';
import { RiPhoneLine } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';

function Contact() {
  return (
    <div className="contact-div">
      <h1 className="title-header">KONTAKT</h1>
      <ul className="contact-list">
        <li className="contact-list-element">
          <span className="icon">
            <RiPhoneLine />
          </span>
          &nbsp;
          <span className="icon-text-wrap">
            TELEFON
            <span className="contact-text">+48 791 355 380</span>
          </span>
        </li>
        <li className="contact-list-element">
          <span className="icon">
            <GoLocation />
          </span>
          &nbsp;
          <span classname="icon-text-wrap">
            STUDIO <br />
            <span className="contact-text">Zgierska 27, Skotniki</span>
          </span>
        </li>
        <li className="contact-list-element">
          <span className="icon">
            <GoMail />
          </span>
          &nbsp;
          <span className="icon-text-wrap">
            E-MAIL
            <span className="contact-text">biuro@kdbk-detailing.pl</span>
          </span>
        </li>
        <li className="contact-list-element">
          <span className="icon">
            <AiOutlineFacebook />
          </span>
          &nbsp;
          <a href="https://www.facebook.com/KDBK-detailing-107874618568829" target="_blank">
            FACEBOOK
          </a>
        </li>
        <li className="contact-list-element">
          <span className="icon">
            <AiOutlineInstagram />
          </span>
          &nbsp;
          <a href="https://www.instagram.com/kdbkdetailing/" target="_blank">
            INSTAGRAM
          </a>
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
