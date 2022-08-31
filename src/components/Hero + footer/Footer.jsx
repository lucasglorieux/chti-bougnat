import React from 'react';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <div className=' w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
          <div className='sm:flex text-center justify-between items-center'>
            <h1>Le Ch'ti Bougnat</h1>
            <div className='flex  w-full sm:max-w-[280px] my-4'>
                   <FaFacebook className='icon' />
                   <FaInstagram className='icon'/>
            </div>
          </div>
          <div className='flex justify-between '>
            <ul className='lg:flex'>
              <li>À propos</li>
              <li>Partenariat</li>
              <li>Opportunités</li>
              <li>Actualités</li>
              <li>Publicité</li>
            </ul>
            <ul className='text-right lg:flex'>
            <li className='hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
                <Link to="home" smooth={true} offset={50} duration={500}>
                    Accueil
                </Link>
            </li>
            <li className='hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
                 <Link  to="promotion" smooth={true} offset={50} duration={500}>
                   Promotions
                </Link>
            </li>
            <li className='hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
                <Link  to="cheese" smooth={true} offset={50} duration={500}>
                    Fromages
                </Link>
            </li>
            <li className='hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
                <Link  to="/" smooth={true} offset={50} duration={500}>
                   Salaisons
                </Link>
                </li>
            <li className='hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
                <Link  to="/" smooth={true} offset={50} duration={500}>
                Galerie
                </Link>
            </li>
        </ul>
          </div>

        </div>

    </div>
  )
}

export default Footer