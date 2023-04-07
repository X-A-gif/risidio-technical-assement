import React from 'react'
import { AiOutlinePicture } from 'react-icons/ai';

import logo from '../assets/banner.jpg'

const Hero = () => {
  return (
    <div>
    <header>
      <div className='relative'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <AiOutlinePicture size={50} />
        </div>
      </div>
    </header>
  </div>
  )
}

export default Hero