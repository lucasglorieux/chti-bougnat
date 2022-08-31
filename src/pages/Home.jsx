import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Cheeses from '../components/cheeses/CheesesHome'
import Hero from '../components/Hero + footer/Hero'
import Navbar from '../components/navbar/Navbar'
import Promotions from '../components/promotions/Promotions'

const Home = () => {
  return (
    <AnimatedPage>
    <div name='home'>
        <Navbar />
        <Hero />       
        <Promotions />
        <Cheeses />   
    </div>
    </AnimatedPage>
  )
}

export default Home