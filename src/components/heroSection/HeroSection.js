import React, { useState } from 'react';
import '../../App.css';
import { Button } from '../buttons/Button';
import './HeroSection.css';

function HeroSection() {


  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive(current => !current);
    event.preventDefault()
  }


  return (
    <div className="hero-container" style={{
      background: isActive ? "url('/public/images/img-home.jpg') center center/cover no-repeat" : '',
    }}  >
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for</p>
         <div className="hero-btns">
             <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
             </Button>
             <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'
               onClick={handleClick} >
                WATCH TRAILER <i className='far fa-play-circle'/>
             </Button>
         </div>
    </div>
  )
}

export default HeroSection