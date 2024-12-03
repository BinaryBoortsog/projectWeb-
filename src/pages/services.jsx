import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="mt-4 text-lg">
        We offer a range of services designed to help you achieve your goals and make your life easier. Explore our services below.
      </p>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Service 1</h2>
        <p className="mt-2 text-lg">
          Description of the first service. This service is aimed at solving specific problems and delivering high-quality results.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Service 2</h2>
        <p className="mt-2 text-lg">
          Description of the second service. Our team is dedicated to providing excellent support and delivering great value to our customers.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Service 3</h2>
        <p className="mt-2 text-lg">
          Description of the third service. We offer innovative solutions that make a positive impact on your business or daily life.
        </p>
      </section>

      <section className="mt-8">
        <button className="bg-[#00df9a] text-black py-2 px-4 rounded-md hover:bg-[#00bf8a]">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Services;
