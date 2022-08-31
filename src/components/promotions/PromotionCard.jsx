import React from 'react';

import {AiOutlineEye, AiOutlineHeart} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi'


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
  min-width: 200px;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%
  z-index: 1;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    width: 50px;
    height: 50px;
    transform: scale(1.1);
    margin:15px;
  }
`;

const PromotionCard = ({item}) => {
  return (
    <div className='border rounded-lg shadow-xl hover:scale-105 duration-500 mx-5 my-7 py-0.5'>
    <Container >
      <div>
      <Image className='rounded-lg' src={item.img} loading="eager" alt='/'/>
      <div className=' absolute top-0 left-0 w-full h-full'>
       
      </div>
      <div className='mx-auto mt-1 text-center text-xl text-bold'>
        <p className='ml-2 '>
            {item.name}          
        </p>
        </div>
        <div className='mx-auto mt-1 text-center'>
        <p>         
            €{item.price}/Kg
        </p>
        </div>
        </div>
        <Info>
        <a href='/product'>
          <Icon>
            <AiOutlineEye/>
          </Icon>
        </a>
        <a href='/basket'>
          <Icon>
            <HiOutlineShoppingBag />
          </Icon>
        </a>
        <a href="/">
          <Icon>
            <AiOutlineHeart />
          </Icon>
        </a>
      </Info>
    </Container>
    </div>
  );
};

export default PromotionCard

// 