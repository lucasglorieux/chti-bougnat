import React from 'react'
import Cheeses from '../components/cheeses/CheesesHome'
import Hero from '../components/Hero + footer/Hero'
import Navbar from '../components/navbar/Navbar'
import Promotions from '../components/promotions/Promotions'

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