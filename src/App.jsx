import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Card from './components/Card'
import NFT from "./components/NFT";

import './app.css'

const App = () => {
  return (
  <>
   <div id='app'>
    <Navbar />
    <Hero />
    <NFT />
      <div className='absolute w-full'>
        <Footer />
      </div>
   </div>
  </>
  )
}

export default App