import React from 'react'
import { popularSalaisonProducts } from "../../dataSalaison";

import SalaisonHomeCard from "./SalaisonHomeCard"

const SalaisonHome = () => {
  return (
    <div  className='mx-auto  px-10 text-center '>
    <h1 name='salaison' className='mb-10'>Nos Salaisons</h1>
    <div className='max-w-[1400px] mx-auto px-4 py-1 grid sm:grid-cols-3 lg:grid-cols-4 gap-4'>
 {popularSalaisonProducts.map((item) => (
    <SalaisonHomeCard item={item} key={item.id} />
  ))}
    </div>
    <h2 className='mt-10 text-xl underline hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
      <a href="/salaison">Voir plus</a>
    </h2>
</div>
  )
}

export default SalaisonHome