import React from 'react'
import {BsCartPlus} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'

import Ambert from '../assets/ambert.jpg'
import Bleu from '../assets/bleue.jpg'
import Cantal from '../assets/cantal.jpg'
import Salers from '../assets/salers.jpg'
import Stnec from '../assets/stnec.jpg'
import PromotionCard from './PromotionCard'



const Work = (props) => {
    return (
        <div name='choose' className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
        <PromotionCard bg={Cantal} text='Cantal'/>
        <PromotionCard bg={Stnec} text='Saint-Nectaire'/>
        <PromotionCard bg={Ambert} text="Fourme d'Ambert"/>
        <PromotionCard bg={Salers} text='Salers'/>
        <PromotionCard bg={Bleu} text="Bleue d'Auvergne"/>
        
    </div>
      )
}

export default Work