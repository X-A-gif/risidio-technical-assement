import React, { useState, useEffect } from 'react'

import Collection from './Collection'
import NFT from './NFT'
import BackToTop from './BackToTop'

import banner from '../assets/pollock(1).jpg'
import icon from '../assets/icon.png'

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMore, setShowMore] = useState(false);

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

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  
  const [activeButton, setActiveButton] = useState("items");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <header>
        <div className='relative'>
          <div>
            <div style={heroHeadStyles}><Collection /></div>
            <img className='banner w-full' src={banner}/>
          </div>
          <img className='ml-auto mr-auto -mt-10' src={icon} alt="" />
        </div>
      </header>

      <section className="bg-transparent py-2">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-xl font-normal text-center mb-4">Artist Name</h2>
          <div className="text-center font-semibold">
            <p className={screenWidth < 640 ? 'text-sm mx-12' : 'text-md mx-24'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ab repudiandae, modi provident minus,
              quidem deserunt maiores commodi necessitatibus voluptatibus alias dolores ratione at suscipit voluptates
              unde quo perferendis repellat?
            </p>
            <br />
            {showMore ? (
              <p className={screenWidth < 640 ? 'text-sm mx-12' : 'text-md mx-24'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ab repudiandae, modi provident minus,
                quidem deserunt maiores commodi necessitatibus voluptatibus alias dolores ratione at suscipit voluptates
                unde quo perferendis repellat? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ab repudiandae, modi provident minus,
                quidem deserunt maiores commodi necessitatibus voluptatibus alias dolores ratione at suscipit voluptates
                unde quo perferendis repellat?
              </p>
            ) : null}
            {showMore ? (
              <button onClick={handleShowMore} className="text-blue-500 mt-4">
                Hidde
              </button>
            ) : (
              <button onClick={handleShowMore} className="text-blue-500">
                Read More
              </button>
            )}
          </div>
        </div>
      </section>

      <section className={`border-none ${screenWidth < 925 ? 'flex justify-center border-none rounded-xl w-8/12 h-96' : 'w-1/3'} mx-auto rounded-xl bg-gray-100 py-4`} >
        <ul className={`grid gap-4 ${screenWidth < 925 ? 'grid-cols-1 mt-10' : 'grid-cols-3'}`}>
          <li className={`${screenWidth < 925 ? 'border-b-2 mx-auto' : 'border-r-2'}`}>Floor Price <br /> 2,835 STX</li>
          <li className={`${screenWidth < 925 ? 'border-b-2 mx-auto' : 'border-r-2'}`}>Owners <br /> 1,236</li>
          <li >Items <br /> 2,500</li>
        </ul>
      </section>

      <div className='mt-10 border-b-2 w-2/3 mx-auto'>
       <div className='my-4'>
        <button
            className={activeButton === "items" ? "mr-4 text-green-500" : "mr-4"}
            onClick={() => handleButtonClick("items")}
          >
              Items
          </button>

          <button
            className={activeButton === "activity" ? "text-green-500" : ""}
            onClick={() => handleButtonClick("activity")}
          >
              Activity
          </button>
       </div>
      </div>

       <div className='flex justify-center items-center '>
        <NFT />
      </div>

      <div className='my-10'>
        <BackToTop />
      </div>

    </div>
  )
}

export default Hero
