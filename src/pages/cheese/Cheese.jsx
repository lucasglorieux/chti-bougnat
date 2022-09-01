import React from 'react'

import { allCheeseProducts } from "../../dataCheese";

import CheeseCard from "./CheeseCard"
import Navbar2 from '../../components/navbar/Navbar2'

import { AiOutlineSearch } from 'react-icons/ai'
import AnimatedPage from '../../components/AnimatedPage';


const cheese = () => {
  return (
    <AnimatedPage>
    <div className='w-full h-screen relative'>
    <Navbar2 />

    {/* -------------------Section de recherche --------------------------- */}
    <div  className='mx-auto py-24 px-10 text-center'>
    <h1 name='cheese' className=''>Nos Fromages</h1>
    
    <div className="grid sm:grid-cols-2 gap-8 py-4 border-2 border-transparent border-b-amber-400">
    <form className='w-[60%] ml-5'>
                <div className='flex flex-col my-2'>
                    <label className='text-xl text-bold'>Types de pâtes</label>
                    <select  className='border rounded-medium p-2'>
                        <option>-</option>
                        <option>Pâte pressée non-cuite</option>
                        <option>Pâte molle et croûte lavée</option>
                        <option>Pâte pressée cuite</option>
                        <option>Pâte persillée</option>
                        <option>pâte fraîche</option>
                        <option>pâte molle et croûte fleurie </option>
                    </select>
                    <label className='text-xl text-bold'>Types de lait</label>
                    <select className='border rounded-medium p-2'>
                        <option>-</option>
                        <option>lait de vache</option>
                        <option>Lait de chévre</option>
                        <option>Lait de brebis</option>
                    </select>
                    <label className='text-xl text-bold'>Traitement du lait</label>
                    <select className='border rounded-medium p-2'>
                        <option>-</option>
                        <option>Lait cru</option>
                        <option>Lait thermisé</option>
                        <option>Lait pasteurisé</option>
                    </select>
                </div>
                <button className='w-[60%] my-4'>Chercher</button>
            </form>
            <form className='flex mt-[10%] justify-between items-center max-h-[50px] max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                    <div>
                        <input className='bg-transparent w-[300px] sm:w-[400px] font-[Comfortaa] focus:outline-none' type="text" placeholder="Saint-Nectaire"/>
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20} className='text-white' /></button>
                    </div>
                </form>
         </div>
        {/* ----------------------------Map des fromages ---------------- */}
            <div className='max-w-[1400px] mx-auto px-4 py-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
         {allCheeseProducts.map((item) => (
            <CheeseCard item={item} key={item.id} />
          ))}
            </div>
    </div>
    
    </div>
    </AnimatedPage>
  )
}

export default cheese