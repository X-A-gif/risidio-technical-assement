import React from 'react'
import { Navbar, Footer, Hero, Card, NFT } from './components';

import './app.css'

const App = () => {
  return (
  <>
   <div id='app'>
    <Navbar />
    <Hero />
   

      <div className='absolute w-full'>
        <Footer />
      </div>
   </div>
  </>
  )
}

export default App