import React from 'react'

import logo from '../assets/risidio.png';

import './utils.css'; 

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-indigo-800 text-white py-12 h-96">
      <div className="max-w-screen-lg mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
              <img src={logo} alt="Risidio" className="h-14 " />
            </div>

            <div class="text-start">
              <p>Risidio Marketplace is the platform for digital assets registered via the Bitcoin blockchain using Clarity Contracts and the Stacks 2.0 network. We are looking for partners and clients to help get the platform to the next level.</p>
              <p>NFT</p>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer