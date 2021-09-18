import { graphql, useStaticQuery } from 'gatsby';
import BackgroundSlider from 'gatsby-image-background-slider';
import React from 'react';

const Hero = ({ children, className = '', size }) => {
  return (
    <div id="hero">
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(filter: { sourceInstanceName: { eq: "backgrounds" } }) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 4000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
        duration={12} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={['flor.jpg', 'moca.jpg', 'plantin.jpg']}

        // pass down standard element props
        //style={{
        // transform: "rotate(-2deg) scale(.9)",
        // }}
      ></BackgroundSlider>
    </div>
  );
};

export default Hero;
