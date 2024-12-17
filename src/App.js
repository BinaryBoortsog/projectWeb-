import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Certificate from "./components/Certificate";
import GallerySlider from "./components/testiMonials";
import Footer from "./components/Footer";

// Lazy-loaded pages
const About = lazy(() => import("./pages/about"));
const Product = lazy(() => import("./pages/product"));
const Services = lazy(() => import("./pages/services"));
const Blog = lazy(() => import("./pages/blog"));
const Contacts = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
        {/* Lazy-loaded Routes */}
        <Route
          path="/about"
          element={
            <Layout>
              <Suspense fallback={<div>Loading About Page...</div>}>
                <About />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/product"
          element={
            <Layout>
              <Suspense fallback={<div>Loading Product Page...</div>}>
                <Product />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Suspense fallback={<div>Loading Services Page...</div>}>
                <Services />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Suspense fallback={<div>Loading Blog Page...</div>}>
                <Blog />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Suspense fallback={<div>Loading Contact Page...</div>}>
                <Contacts />
              </Suspense>
            </Layout>
          }
        />
        {/* 404 Not Found Route */}
        <Route
          path="*"
          element={
            <Layout>
              <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
              </Suspense>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
