import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Certificate from './components/Certificate';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedProducts/>
      <Certificate/>
    </div>
  );
}

export default App;
