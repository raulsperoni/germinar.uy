import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import HeroImage from '../../svg/HeroImage';
import Button from '../Button';
import GerminarImage from '../../svg/GerminarImage';

const Header = () => (
  <header className="sticky top-0 bg-white shadow in z-50">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-40 mr-3">
          <GerminarImage />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#nosotros">
          Quiénes somos
        </AnchorLink>
        <AnchorLink className="px-4" href="#moca">
          MOCA
        </AnchorLink>
        <AnchorLink className="px-4" href="#historia">
          Nuestra Historia
        </AnchorLink>
        <AnchorLink className="px-4" href="#contacto">
          Contacto
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <a
          href="mailto:germinaruy@gmail.com"
          className="bg-primary hover:font-bold hover:text-white rounded py-4 px-12 text-white"
          size="lg"
        >
          Escribínos
        </a>
      </div>
    </div>
  </header>
);

export default Header;
