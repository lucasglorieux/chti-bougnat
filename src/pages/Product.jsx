import React from 'react'
import AnimatedPage from '../components/AnimatedPage'

import Navbar2 from '../components/navbar/Navbar2'

const Product = () => {
  return (
    <AnimatedPage>
    <div>
        <Navbar2 />
        <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full'>
            <p className='mt-60 text-3xl'>Page Produit, selection quantité, ajout au panier</p>
           
        </div>
    </div>
    </AnimatedPage>
  )
}

export default Product