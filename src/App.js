import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Promotions from './components/Promotions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Promotions />
    </div>
  );
}

export default App;
