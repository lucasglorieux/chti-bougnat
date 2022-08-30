import React from 'react'



import PromotionCard from './PromotionCard'

import { promoProducts } from "../../data";


const Promotions = () => {
    return (
        <div className='mx-auto py-8 px-10 text-center '>
            <h1  name='promotion' className='mb-10'>Nos Promotions</h1>
        <div className='max-w-[1400px] mx-auto px-4 py-1 grid  sm:grid-cols-3 lg:grid-cols-4 gap-4 '>
         {promoProducts.map((item) => (
            <PromotionCard item={item} key={item.id} />
          ))}
        </div>
        </div>
        
      )
}

export default Promotions