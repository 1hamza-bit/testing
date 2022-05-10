import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './video.css'
import Card from  './card'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

 
class Item extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
   <div style={{padding: "5%"}}>
       
       
      <Slider {...settings}>
        

        {/* card1  */}
       <div><Card /></div>
          {/* card1  */}
          <div><Card /></div>
      
        {/* card1  */}
        <div><Card /></div>
      
        {/* card1  */}
        <div><Card /></div>

         {/* card1  */}
        <div><Card /></div>
        


       
        </Slider>
    </div>
  );
}
}
export default Item;