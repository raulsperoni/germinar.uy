import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TrajeImage from '../svg/TrajeImage';

const Hero = ({ children, className = '', size }) => {
  return (
    <div style={{ display: 'grid' }}>
      <StaticImage
        style={{
          gridArea: '1/1',
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        aspectRatio={3 / 1}
        alt=""
        src={'../images/planta1.jpg'}
        formats={['auto', 'webp', 'avif']}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: '1/1',
          position: 'relative',
          // This centers the other elements inside the hero component
          placeItems: 'center',
          display: 'grid',
        }}
      >
        <div className="flex w-1/2 text-center text-white">
          <div className="p-10 flex items-center text-center"> 
          <p className={'font-medium text-xl text-white'}>
            Germinar es una empresa uruguaya dedicada al cultivo y mejoramiento genético de
            variedades de cáñamo y cannabis
          </p>
          </div>
          <div className="w-2/3">
            <TrajeImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
