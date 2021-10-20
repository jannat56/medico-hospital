import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/hospital1.jpg'
import banner2 from '../../../images/banner/hospital2.png'
import banner3 from '../../../images/banner/hospital3.jpg'

const Banner = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img style={{height:"", width:"100px" }}
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Best Heath Care</h3>
      <p>We do best services. Be Healthy and live your life with good health</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Best Heath Care</h3>
      <p>We do best services. Be Healthy and live your life with good health</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Best Heath Care</h3>
      <p>We do best services. Be Healthy and live your life with good health</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>


     
    );
};

export default Banner;