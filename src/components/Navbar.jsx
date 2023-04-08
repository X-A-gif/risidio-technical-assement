import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiOutlineChevronDown  } from 'react-icons/hi';

import logo from '../assets/risidio.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

 
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between h-16 px-8">
        <div className="flex items-center cursor-pointer">
            <img src={logo} alt="Risidio" className="h-14 mr-4 ml-8 mt-6" />
          <div className="flex items-center -ml-20">
            <div className="text-white text-sm mt-24 ">Marketplace</div>
          </div>
          <div className="ml-4 flex items-center mt-8">
            <div className="hidden lg:block">
              <ul className="flex">
                <li className="mr-6 text-white">Explore</li>
                <li className="mr-6 text-white flex items-center">
                  Featured Collections
                  <HiOutlineChevronDown className="ml-1" />
                </li>
              </ul>
            </div>
          </div>
          <button className="absolute right-5 block lg:hidden bg-transparent text-white hover:text-gray-100 focus:outline-none" onClick={toggleMenu}> 
            <HiMenuAlt4 className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden lg:block mt-8">
          <ul className="flex cursor-pointer font-thin">
            <li className="mr-6 mt-2 text-white">How It Works</li>
            <li className="mr-6 mt-2 text-white">About Risidio</li>
            <button className="bg-blue-900 font-medium text-sm text-white rounded-full py-2 px-6  hover:bg-blue-500 hover:text-white transition duration-300">
              My NFT
            </button>
          </ul>
        </div>
      </div>
      <div className="lg:hidden">
        {isOpen && (
          <div className='mt-12'>
            <ul className="burgerMenu grid place-items-start text-white text-lg w-full font-normal">
                <li className="block px-4 py-2 cursor-pointer">Gallery</li>
                <li className="block px-4 py-2 cursor-pointer">Collections</li>
                <div className='border-b-2  w-3/4 mx-auto my-6'></div>
                <div className='font-thin'>
                  <li className="block px-4 py-2 cursor-pointer">How It Works</li>
                  <li className="block px-4 py-2 cursor-pointer">About Risidio</li>
              </div>
            <button className="mx-auto w-3/4 font-medium text-sm bg-blue-900 text-white rounded-full  px-6 border border-none py-4 hover:bg-blue-500 hover:text-white transition duration-300 my-10">
              Register with Hiro wallet
            </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
