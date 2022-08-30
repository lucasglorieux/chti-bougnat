import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai'
import Herobg from '../../assets/hero.jpg'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div name="home" className='w-full h-screen relative'>
        <img className='w-full h-full object-cover' src={Herobg} loading="eager" alt="Chaine des domes" />
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
                    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
            <li className='w-[300px] h-[60px] flex justify-between items-center ml-[-240px] rounded-lg hover:ml-[-10px] duration-300 bg-[#f1c40f]'>
                 <p className='flex justify-between items-center w-full text-white'>                  
                    lechtibougnat@gmail.com
                    <AiOutlineMail size={30}/>
                 </p>
            </li>
            <li className='w-[200px] h-[60px] flex justify-between items-center ml-[-140px] rounded-lg hover:ml-[-10px] duration-300 bg-gray-600'>
                 <p className='flex justify-between items-center w-full text-gray-300'>     
                   06 82 31 48 70 
                   <AiOutlinePhone size={30} className="text-white"/>
                </p>
            </li>
    
            </ul>
        </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Hero