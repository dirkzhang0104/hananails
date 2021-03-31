import React from 'react';
import Gallery from './Gallery.jsx';

class Intro extends React.Component {
  render() {
    return (
      <div className="gallaryContainer">
        <div className="titleContainer">
          <p className="gallerytitle">Some of our recent work</p>
        </div>
        <div className="gallery">
          <Gallery />
        </div>
      </div>

    )
  }
}

export default Intro;