import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import GerminarImage from '../../svg/GerminarImage';

const Header = () => (
  <header className="sticky top-0 bg-white shadow in z-50 text-white">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <AnchorLink className="w-48 mr-3" href="#hero">
          <GerminarImage />
        </AnchorLink>
      </div>
      <div className="flex flex-1 justify-around mt-4 sm:mt-0 font-medium">
        <AnchorLink className="py-2 px-3 " href="#nosotros">
          Nosotros
        </AnchorLink>
        <AnchorLink className="py-2 px-3 " href="#moca">
          Moca
        </AnchorLink>
        <AnchorLink className="py-2 px-3 " href="#historia">
          Historia
        </AnchorLink>
        <a
          className="py-2 px-3 bg-primary hover:font-bold hover:text-white rounded text-white"
          href="mailto:germinaruy@gmail.com"
        >
          Contacto
        </a>
      </div>
      <div className="hidden md:block"></div>
    </div>
  </header>
);

export default Header;
