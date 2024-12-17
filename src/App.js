import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Certificate from './components/Certificate';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GallerySlider from './components/testiMonials';
import About from './pages/about';
import Blog from './pages/blog';
import Product from './pages/product';
import Services from './pages/services';

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
        <Route path="contacts" element={
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
