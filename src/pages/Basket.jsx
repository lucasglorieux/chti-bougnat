import React from 'react'

import Navbar2 from '../components/Navbar2'

const basket = () => {
  return (
    <div className='w-full h-screen relative'>
        <Navbar2 />
        <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full'>
            <p className='mt-60 text-3xl'>Page Basket</p>
           
        </div>
    </div>
  )
}

export default basket