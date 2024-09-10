
import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.png';



function Carouselslide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const imageStyle = {
    width: '100%', height: '400px', objectFit: 'cover' // Ensures the image covers the container without distortion
  };
  return (
    <>
      <div className='mt-5'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className='d-block w-100' src={img1} alt="firstslide" style={imageStyle} />
            <Carousel.Caption>
              <h3 style={{color:'orange'}}>All About Movies</h3>
              <p>reviews, and news to enhance your cinematic experience.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={img2} alt="firstslide" style={imageStyle} />
            <Carousel.Caption>
              <h3 style={{color:'orange'}}>Ultimate Movie Rating Destination</h3>
              <p>Reviews, and detailed evaluations to help you make the best viewing choices.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={img3} alt="firstslide" style={imageStyle} />
            <Carousel.Caption>
              <h3 style={{color:'orange'}}>Engage with fellow movie lovers</h3>
              <p>explore diverse perspectives on the latest and greatest films.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Carouselslide;