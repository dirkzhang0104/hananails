import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Gallery extends React.Component {
  render() {
    return (
      <Carousel infiniteLoop={true} autoPlay={true} interval="5000" dynamicHeight={true} width="190%" showThumbs={false}>
        <div className="galleryImg">
          <img src="1.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="2.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="3.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="4.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="5.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="6.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="7.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="8.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="9.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="10.jpeg" />
        </div>
        <div className="galleryImg">
          <img src="11.jpeg" />
        </div>
      </Carousel>
    )
  }
}

export default Gallery;