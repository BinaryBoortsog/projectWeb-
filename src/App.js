import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Certificate from './components/Certificate';
import GallerySlider from './components/testiMonials';
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedProducts/>
      <GallerySlider/>
      <Certificate/>
    </div>
  );
}

export default App;
