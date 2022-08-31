import React from 'react'
import AnimatedPage from '../components/AnimatedPage'

import Navbar2 from '../components/navbar/Navbar2'

const basket = () => {
  return (
    <AnimatedPage>
    <div className='w-full h-screen relative'>
        <Navbar2 />
        <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full relative'>
            <p className='mt-60 text-3xl'>Page Basket</p>
            <p className="mb-30">
Qu’est ce qu’une AOP ?
Nos engagements
Les chiffres clés
Nos AOP
Territoires et découvertes
Normandie
Centre Val de Loire
Bourgogne Franche Comté
Auvergne Rhône Alpes
Nouvelle Aquitaine
Occitanie
Corse
</p>
           
        </div>
    </div>
    </AnimatedPage>
  )
}

export default basket