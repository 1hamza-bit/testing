import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './video.css'
import Card from  './card'
 
const Item = () => {
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
       <div><Card /></div>
          {/* card1  */}
          <div><Card /></div>
      
        {/* card1  */}
        <div><Card /></div>
      
        {/* card1  */}
        <div><Card /></div>

         {/* card1  */}
        <div><Card /></div>
        


       
      </ItemsCarousel>
    </div>
  );
};
export default Item;