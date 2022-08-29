import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Product from './components/Product'
import Basket from './components/Basket';
import MyAccount from './components/MyAccount';



function App() {
  return (
    <>
      <Routes>     
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/product' element={<Product/>} />
        <Route exact path='/basket' element={<Basket/>} />
        <Route exact path='/myaccount' element={<MyAccount/>} />

      </Routes>
    </>
  );
}

export default App;
