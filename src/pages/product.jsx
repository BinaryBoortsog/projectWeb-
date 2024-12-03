import React from 'react';

const Product = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Our Product</h1>
      <p className="mt-4 text-lg">
        Welcome to our product page! Here you can learn more about the amazing product we offer, designed to meet your needs and exceed expectations.
      </p>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Product Features</h2>
        <ul className="mt-2 list-disc pl-6">
          <li>High-quality material</li>
          <li>Innovative design</li>
          <li>Durable and long-lasting</li>
          <li>Affordable price</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Product Details</h2>
        <p className="mt-2 text-lg">
          This product is crafted with the finest materials and designed for comfort and functionality. Perfect for any occasion or everyday use.
        </p>
      </section>

      <section className="mt-8">
        <button className="bg-[#00df9a] text-black py-2 px-4 rounded-md hover:bg-[#00bf8a]">
          Buy Now
        </button>
      </section>
    </div>
  );
};

export default Product;
