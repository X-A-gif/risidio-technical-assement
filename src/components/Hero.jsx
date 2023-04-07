import React, { useState, useEffect } from 'react'

import banner from '../assets/pollock(1).jpg'
import icon from '../assets/icon.png'

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const heroHeadStyles = {
    fontSize: screenWidth >= 1070 ? '64px' : '32px',
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
  };

  return (
    <div>
      <header>
        <div className='relative'>
          <div>
            <h1 style={heroHeadStyles}>Collection Name</h1>
            <img className='banner w-full' src={banner}/>
          </div>
          <img className='ml-auto mr-auto -mt-10' src={icon} alt="" />
        </div>
      </header>
    
    </div>
  )
}

export default Hero
