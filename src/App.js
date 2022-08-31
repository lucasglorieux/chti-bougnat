import React from 'react';
import { Routes, Route } from 'react-router-dom';

  
import Home from './pages/Home';
import Product from './pages/Product'
import Basket from './pages/Basket';
import MyAccount from './pages/MyAccount';
import Cheese from './pages/cheese/Cheese';
import Footer from './components/Hero + footer/Footer';






function App() {
  
  return (
    
    <div>
    
    
    <Routes>     
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/product' element={<Product/>} />
        <Route exact path='/basket' element={<Basket/>} />
        <Route exact path='/myaccount' element={<MyAccount/>} />
        <Route exact path='/cheese' element={<Cheese />} />
      </Routes>
    
      <Footer />
    
    </div>
  );
}

export default App;
