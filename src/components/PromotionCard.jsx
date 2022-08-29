import React, {useState} from 'react'
import {AiOutlineEye} from 'react-icons/ai'
import {BsCartPlus} from 'react-icons/bs'

const PromotionCard = (props) => {

  return (
    <div className='relative'>
      <a href='/product'>
      <img className='w-full h-[88%] object-cover' src={props.bg} alt='/' />
      <div className=' absolute top-0 left-0 w-full h-full'>
       
      </div>
      <div  className=' flex w-[95%] justify-between bg-white left-2 text-xl text-black '>
        <p className='ml-2 '>
            {props.text}          
        </p>
        <p>         
            {props.price}
        </p>
        </div>
        </a>
    </div>
  )
}

export default PromotionCard

// 