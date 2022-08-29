import React from 'react'


import Ambert from '../assets/ambert.jpg'
import Bleu from '../assets/bleue.jpg'
import Cantal from '../assets/cantal.jpg'
import Salers from '../assets/salers.jpg'
import Stnec from '../assets/stnec.jpg'
import Parm from '../assets/parm.jpg'
import PromotionCard from './PromotionCard'



const Work = (props) => {
    return (
        <div name='promotion' className='mx-auto py-16 px-4 text-center'>
            <h1>Nos promotions</h1>
            <div  className='max-w-[1300px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
                <PromotionCard bg={Cantal} text='Cantal' price='€18,90/Kg'/>
                <PromotionCard bg={Stnec} text='Saint-Nectaire' price='€17,90/Kg'/>
                <PromotionCard bg={Ambert} text="Fourme d'Ambert" price='€14,90/Kg'/>
                <PromotionCard bg={Salers} text='Salers' price='€21,90/Kg'/>
                <PromotionCard bg={Bleu} text="Bleue d'Auvergne" price='€14,90/Kg'/>
                <PromotionCard bg={Parm} text="Parmigiano" price='€28,90/Kg'/>
            </div>
            </div>
        
      )
}

export default Work