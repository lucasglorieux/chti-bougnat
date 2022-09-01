import React from 'react'
import { popularProducts } from "../../dataCheese";

import CheeseHomeCard from "./CheeseHomeCard"

const Cheeses = () => {
  return (
    <div  className='mx-auto  px-10 text-center '>
            <h1 name='cheese' className='mb-10'>Nos Fromages</h1>
            <div className='max-w-[1400px] mx-auto px-4 py-1 grid sm:grid-cols-3 lg:grid-cols-4 gap-4'>
         {popularProducts.map((item) => (
            <CheeseHomeCard item={item} key={item.id} />
          ))}
            </div>
            <h2 className='mt-10 text-xl underline hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
              <a href="/cheese">Voir plus</a>
            </h2>
    </div>
  )
}

export default Cheeses