import React from 'react'

import { allSalaisonProducts } from "../../dataSalaison";

import SalaisonCard from "./SalaisonCard"
import Navbar2 from '../../components/navbar/Navbar2'

import AnimatedPage from '../../components/AnimatedPage'

const Salaison = () => {
  return (
    <AnimatedPage >
        <div className='w-full h-screen relative'>
        <Navbar2 />
        <div  className='mx-auto py-24 px-10 text-center'>
            <h1 name='cheese' className=''>Nos Salaisons</h1>
            <div className='max-w-[1400px] mx-auto px-4 py-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
         {allSalaisonProducts.map((item) => (
            <SalaisonCard item={item} key={item.id} />
          ))}
            </div>

        </div>
        </div>
    </AnimatedPage>
  )
}

export default Salaison