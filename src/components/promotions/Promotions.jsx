import React, {useState} from "react";
import "./promotion.css";
import Slider from "react-slick";


import PromotionCard from './PromotionCard'

import { promoProducts } from "../../data";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


   
const Promotions = () => {

  
    const NextArrow = ({ onClick }) => {
      return (
        <div className="arrow next" onClick={onClick}>
          <FaArrowRight size={30}/>
        </div>
      );
    };
  
    const PrevArrow = ({ onClick }) => {
      return (
        <div className="arrow prev" onClick={onClick}>
          <FaArrowLeft size={30}/>
        </div>
      );
    };
  
    const [imageIndex, setImageIndex] = useState(0);
  
    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
    };
  

    return (

      <div  className="App">
        <div className='' name='promotion'></div>
            <h1 className='mb-10 text-center'>Nos Promotions</h1>
            <Slider {...settings}>
              {promoProducts.map((item, idx) => (
                  <PromotionCard item={item} key={item.id} className={idx === imageIndex ? "slide activeSlide" : "slide"} />
                ))}
           </Slider>
        </div>
       
        
      )
}

export default Promotions