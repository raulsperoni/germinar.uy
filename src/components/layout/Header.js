import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import HeroImage from '../../svg/HeroImage';
import Button from '../Button';
import GerminarImage from '../../svg/GerminarImage';

const Header = () => (
  <header className="sticky top-0 bg-black shadow in z-50 text-white">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-48 mr-3">
          <GerminarImage />
        </div>
      </div>
      <div className="flex flex-1 justify-around mt-4 sm:mt-0 font-medium">
        <AnchorLink className="py-2 px-3 text-white" href="#nosotros">
          Nosotros
        </AnchorLink>
        <AnchorLink className="py-2 px-3 text-white" href="#moca">
          MOCA
        </AnchorLink>
        <AnchorLink className="py-2 px-3 text-white" href="#historia">
          Historia
        </AnchorLink>
        <AnchorLink className="py-2 px-3 bg-white hover:font-bold hover:text-primary rounded text-primary" href="#contacto">
          Contacto
        </AnchorLink>
      </div>
      <div className="hidden md:block">
       
      </div>
    </div>
  </header>
);

export default Header;
