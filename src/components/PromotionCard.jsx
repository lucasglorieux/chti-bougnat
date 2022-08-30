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
  min-width: 200px;
  height: 280px;
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
  height: 80%;
  width: 80%
  z-index: 1;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
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
    <div className='border rounded-medium shadow-xl'>
    <Container>
      <div>
      <Image src={item.img} loading="eager" alt='/'/>
      <div className=' absolute top-0 left-0 w-full h-full'>
       
      </div>
      <div className='mx-auto mt-2 text-center text-xl text-bold'>
        <p className='ml-2 '>
            {item.name}          
        </p>
        </div>
        <div className='mx-auto mt-2 text-center'>
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
            <BsCartPlus />
          </Icon>
        </a>
      </Info>
    </Container>
    </div>
  );
};

export default PromotionCard

// 