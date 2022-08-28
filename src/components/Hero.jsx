import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Herobg from '../assets/hero.jpg'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div name="home" className='w-full h-screen relative'>
        <img className='w-full h-full object-cover' src={Herobg} alt="Chaine des domes" />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/25'>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                <div className='flex justify-center items-center'>
                <p className='mb-4 md:text-5l sm:text-4xl text-xl font-bold'>Le meilleur du </p>
                <Typed 
                className='mb-4 md:text-5l sm:text-4xl text-xl font-bold pl-3'
                strings={['Cantal', 'Salers', 'St-Nectaire', 'Fromage']} 
                typeSpeed={120} 
                backSpeed={140}
                loop
                />
                </div>
                <h2 className='mb-4'>Fromages & salaisons de haute qualités</h2>
                <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                    <div>
                        <input className='bg-transparent w-[300px] sm:w-[400px] font-[Comfortaa] focus:outline-none' type="text" placeholder="Saint-nectaire"/>
                    </div>
                    <div>
                        <button><AiOutlineSearch size={25} className='text-white' /></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Hero