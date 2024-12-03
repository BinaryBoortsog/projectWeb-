import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="mt-4 text-lg">
        Welcome to the About page! We are a company committed to delivering the best products and services to our customers. Our team is passionate about innovation and strives to make a positive impact in the industry.
      </p>
      
      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="mt-2 text-lg">
          Our mission is to provide high-quality solutions that help our clients succeed. We aim to lead the market by offering innovative products and exceptional customer service.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Our Vision</h2>
        <p className="mt-2 text-lg">
          We envision becoming a global leader in our industry, recognized for our commitment to excellence, sustainability, and social responsibility.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Our Team</h2>
        <p className="mt-2 text-lg">
          Our team consists of dedicated professionals who are experts in their fields. We work collaboratively to achieve our common goals and provide the best outcomes for our clients.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-lg">
          Feel free to get in touch with us for any inquiries or information. We are always here to assist you!
        </p>
      </section>
    </div>
  );
};

export default About;
