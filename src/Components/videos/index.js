import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './video.css'
import Card from  './card'
 
const Items = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `5 ${chevronWidth}px`, padding:"5%" }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button className='bit'>{'<'}</button>}
        rightChevron={<button className='bit'>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {/* card1  */}
        <div className="blog">
  
  <div className="title-box">
    <h3>
    SPRING FEVER
    </h3>
    <hr/>
    <div className="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div className="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>03.12.2015</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
          {/* card1  */}
          <div className="blog">
  
  <div className="title-box">
    <h3>
    SPRING FEVER
    </h3>
    <hr/>
    <div className="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div className="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>03.12.2015</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
      
        {/* card1  */}
        <div className="blog">
  
  <div className="title-box">
    <h3>
    SPRING FEVER
    </h3>
    <hr/>
    <div className="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div className="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>03.12.2015</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
      
        {/* card1  */}
        <div className="blog">
  
  <div className="title-box">
    <h3>
    SPRING FEVER
    </h3>
    <hr/>
    <div className="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div className="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>03.12.2015</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
      
        {/* card1  */}
        <div className="blog" >
  
  <div className="title-box">
    <h3>
    SPRING FEVER
    </h3>
    <hr/>
    <div className="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div className="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>03.12.2015</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
       
      </ItemsCarousel>
    </div>
  );
};
export default Items;