import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'

import './app.css'

const App = () => {
  return (
  <>
   <div id='app'>
    <Navbar />
    <Hero />
      <div className='absolute w-full bottom-0'>
        <Footer />
      </div>
   </div>
  </>
  )
}

export default App