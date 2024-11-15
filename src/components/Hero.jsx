import React from 'react';
import { ReactTyped } from 'react-typed'; // Use correct import based on library documentation

const Hero = () => {
  return (
    <div className="text-white mt-56">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-semibold py-4">
          Манай байгууллага нь
          </p>
          <ReactTyped
            className="text-[#00df9a] md:text-5xl sm:text-4xl text-xl font-semibold md:pl-4 pl-2"
            strings={['Чанартай', 'Тогтвортой', 'Инновацлаг']}
            typeSpeed={160}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-6">
          бүтээгдэхүүнээр та бүхэнд үйлчилнэ.
        </p>
        <button className="bg-[#00df9a] text-white px-6 py-2 mx-auto w-[200px] rounded-md mt-10 font-bold">
          Дэлгэрэнгүй
        </button>
      </div>
    </div>
  );
};

export default Hero;
