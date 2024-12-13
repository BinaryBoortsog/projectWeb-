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

// Layout Component
const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <FeaturedProducts />
              <GallerySlider />
              <Certificate />
            </Layout>
          }
        />
        {/* Other Routes */}
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />
        <Route path="/product" element={
          <Layout>
            <Product />
          </Layout>
        } />
        <Route path="/services" element={
          <Layout>
            <Services />
          </Layout>
        } />
        <Route path="/blog" element={
          <Layout>
            <Blog />
          </Layout>
        } />
      </Routes>
    </div>
  );
}

export default App;
