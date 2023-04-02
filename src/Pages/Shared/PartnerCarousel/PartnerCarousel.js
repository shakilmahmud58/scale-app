import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PartnerCarousel = () => {
  const server ="http://localhost:5000/partners"
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
            <Carousel responsive={responsive}>
  <div><img src="http://localhost:5000/partners/logo.webp" alt="logo.webp"/></div>
  <div><img src="http://localhost:5000/partners/alco_logo.webp" alt="alco_logo.webp"/></div>
  <div><img src="http://localhost:5000/partners/logo.webp" alt="logo.webp"/></div>
  <div><img src="http://localhost:5000/partners/alco_logo.webp" alt="alco_logo.webp"/></div>
</Carousel>
        </div>
    );
};

export default PartnerCarousel;