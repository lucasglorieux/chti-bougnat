import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product'
import Basket from './pages/Basket';
import MyAccount from './pages/MyAccount';



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
