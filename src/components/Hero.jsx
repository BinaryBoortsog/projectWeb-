import React from 'react';
import { ReactTyped } from 'react-typed'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { Pagination, Autoplay } from 'swiper/modules';

const Hero = () => {
  const slides = [
    { image: require("../assets/image/1.jpg"), text: 'Slide 1' },
    { image: require("../assets/image/2.jpg"), text: 'Slide 2' },
    { image: require("../assets/image/5.jpg"), text: 'Slide 3' },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className="relative text-white">
      {/* Background Swiper */}
      <Swiper
        grabCursor={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="absolute top-10 left-0 w-full h-screen z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              objectFit: 'cover',
              display:'block'
            }}
            className="h-screen"
          >
            <span className="sr-only">{slide.text}</span>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="relative flex flex-col justify-center items-center h-screen z-10">
        <p className="md:text-3xl relative top-52 sm:text-2xl text-xl font-semibold py-4">
          Манай байгууллага нь
        </p>
        <ReactTyped
          className="text-teal-600 top-52 relative md:text-3xl sm:text-2xl text-xl font-semibold md:pl-4 pl-2"
          strings={['Чанартай', 'Тогтвортой', 'Инновацлаг']}
          typeSpeed={160}
          backSpeed={140}
          loop
        />
        <p className="md:text-2xl relative top-52 text-lg font-bold text-white mt-6">
          бүтээгдэхүүнээр та бүхэнд үйлчилнэ.
        </p>
        <button className="bg-teal-600 relative top-52 text-white px-6 py-2 mx-auto w-[200px] rounded-md mt-10 font-bold hover:bg-white hover:text-teal-600">
          Дэлгэрэнгүй
        </button>
      </div>
    </div>
  );
};

export default Hero;
