import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Gallery extends React.Component {
  render() {
    return (
      <Carousel infiniteLoop={true} autoPlay={true} interval="5000">
        <div className="galleryImg">
          <img src="1.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="2.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="3.jpeg" />
        </div>
      </Carousel>
    )
  }
}

export default Gallery;