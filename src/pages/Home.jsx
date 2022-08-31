import React, {useEffect} from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Cheeses from '../components/cheeses/CheesesHome'
import Hero from '../components/Hero + footer/Hero'
import Navbar from '../components/navbar/Navbar'
import Promotions from '../components/promotions/Promotions'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


const Home = () => {

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.6,
        duration: duration || 1.2,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }


  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, 
    {color: "#F79F1F" })
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {color: "#000" })
  }

 
  useEffect(() => {
    slideInTop("#box1");
  }, [])
  useEffect(() => {
    slideInTop("#box2");
  }, [])
  // useEffect(() => {
  //   slideInLeft("#box3");
  // }, [])
  // useEffect(() => {
  //   slideInLeft("#box4");
  // }, [])


  return (
    <AnimatedPage>
    <div name='home'>
      <section>
        <Navbar />
        <Hero className='mb-5' />   
        <div id="box1" className='min-h-[550px]' onMouseEnter={onEnter} onMouseLeave={onLeave}><Promotions /></div> 
        <div id="box2" className='min-h-[550px]' onMouseEnter={onEnter} onMouseLeave={onLeave}><Cheeses /></div>
      </section>   
    </div>
    </AnimatedPage>
  )
}

export default Home