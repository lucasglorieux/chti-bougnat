import React from 'react'
import {AiOutlineEye} from 'react-icons/ai'
import {BsCartPlus} from 'react-icons/bs'
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 80%;
  margin-top:20%;
  position: absolute;
  top: 0;
  left: 0;
  
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 240px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 75%;
  width:75%
  z-index: 1;
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f1c40f;
    transform: scale(1.1);
  }
`;

const PromotionCard = ({item}) => {
  return (
    <Container>
      <div>
      <Image src={item.img} loading="eager" alt='/' className='hover:scale-105 duration-500'/>
      <div className=' absolute top-0 left-0 w-full h-full'>
       
      </div>
      <div  className=' flex w-[95%] justify-between left-2 text-md text-black '>
        <p className='ml-2 '>
            {item.name}          
        </p>
        <p>         
            €{item.price}/Kg
        </p>
        </div>
        </div>
        <Info>
        <Icon>
          <a href='/product'><AiOutlineEye/></a>
        </Icon>
        
        <Icon>
          <a href='/basket'><BsCartPlus /></a>
        </Icon>
      </Info>
    </Container>
  );
};

export default PromotionCard

// 