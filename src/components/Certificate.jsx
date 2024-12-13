import React from "react";
import certi from "../assets/image/certi.jpg";

const Certificate = () => {
  return (
    <div className="w-full bg-white px-4 pt-10 mt-10">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Certificate Text and Button */}
        <div className="text-gray-300 flex flex-col justify-start">
          <p className="text-2xl font-bold text-teal-600 mb-4">Бүрэн автомат үйлдвэрлэл</p>
          <p className="text-3xl font-bold text-black mb-4">Бүрэн автомат үйлдвэрлэл</p>
          <p className="text-lg mb-4 leading-relaxed mt-10 text-gray-600">
            Фенстер Монгол ХХК нь 2015 оноос хойш Монголын хамгийн том хаалга, цонх, хаалга, хаалт болон хаалгын аксессуарын бүтээгдэхүүн үйлдвэрлэж байна.
          </p>
          <div className="flex justify-start">
            <button className="bg-teal-600 text-white my-6 w-[200px] py-3 hover:bg-white hover:text-teal-600 rounded-md font-bold transition duration-300 ease-in-out">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>

        {/* Certificate Image */}
        <img
          src={certi}
          alt="Certificate"
          className="w-full md:w-[500px] mx-auto my-4 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Certificate;
