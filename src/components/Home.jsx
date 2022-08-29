import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Promotions from './Promotions'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />       
        <Promotions />
    </div>
  )
}

export default Home