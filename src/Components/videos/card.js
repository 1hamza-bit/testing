import React, { useRef } from 'react';
import './card.css'
import Vid1 from '../video/videos/vid1.mp4';

function Card() {

  const video = useRef();

  const play = () => {
    video.current.play();
  };

  const stop = () => {
    video.current.pause();
  };


  return (
    <div className='whole'>
      <div onMouseEnter={play} onMouseLeave={stop} className="wrapper">
        <video loop ref={video} className='video' muted src={Vid1}></video>
      </div>
      <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
    </div>
  )
}

export default Card