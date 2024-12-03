import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Certificate from './components/Certificate';
import GallerySlider from './components/testiMonials';
import Footer from './components/Footer';
import About from './pages/about'; 
import Product from './pages/product';
import Services from './pages/services';
import Blog from './pages/blog';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProducts />
              <GallerySlider />
              <Certificate />
              <Footer />
            </>
          }
        />
        {/* Route */}
        <Route path="/about" element={
          <>
            <About/>
            <Footer/>
          </>
          } 
          />
        <Route path="/product" element={
          <>
            <Product />
            <Footer />
          </>
        }
          />
        <Route path="/services" element={
          <>
          <Services />
          <Footer />
          </>
         } />
        <Route path="/blog" element={
          <>
          <Blog />
          <Footer />
          </>
        } />


      </Routes>
    </div>
  );
}

export default App;
