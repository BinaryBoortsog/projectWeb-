import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Certificate from './components/Certificate';
import GallerySlider from './components/testiMonials';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedProducts/>
      <GallerySlider/>
      <Certificate/>
      <Footer/>
    </div>
  );
}

export default App;
