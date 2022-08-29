import React from 'react'
import Cheeses from '../components/Cheeses'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Promotions from '../components/Promotions'

const Home = () => {
  return (
    <div name='home'>
        <Navbar />
        <Hero />       
        <Promotions />
        <Cheeses />
    </div>
  )
}

export default Home