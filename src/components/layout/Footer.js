import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="mx-auto py-16 px-3 mt-48  text-white bg-primary">
    <div className="flex justify-around justify-items-center">
      <div className="flex-1 flex flex-row text-2xl justify-end mr-5">
        <a
          className="text-white mr-3"
          href="https://www.linkedin.com/company/germinaruy"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="text-white mr-3"
          href="https://www.linkedin.com/company/germinaruy"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          className="text-white mr-3"
          href="https://www.linkedin.com/company/germinaruy"
          target="_blank"
        >
          <FaTwitter />
        </a>
      </div>
      <div className="flex-1">
        <a
          className="py-2 px-3 bg-white hover:font-bold hover:text-primary rounded text-primary"
          href="mailto:germinaruy@gmail.com"
        >
          Contacto
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
