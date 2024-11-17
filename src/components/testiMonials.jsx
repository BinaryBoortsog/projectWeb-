import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

// Example Testimonials
const testimonials = [
  {
    text: "Чанартай бүтээгдэхүүн нийлүүлсэнд маш их баярлалаа!",
    name: "Тэмүүлэн",
    company: "ABC Компани",
    src: require("../assets/image/1.jpg"),
  },
  {
    text: "Үйлчилгээндээ маш их сэтгэл хангалуун байна.",
    name: "Сувдаа",
    company: "XYZ Group",
    src: require("../assets/image/1.jpg"),
  },
  {
    text: "Бүтээгдэхүүнүүд нь үнэхээр найдвартай.",
    name: "Энхжин",
    company: "Үйлчлүүлэгч",
    src: require("../assets/image/1.jpg"),
  },
];

const GallerySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgColor, setBgColor] = useState("#cccccc");

  // Function to generate a random HEX color
  const getRandomHexColor = () => {
    const getLightValue = () => Math.floor(150 + Math.random() * 105); // Values between 200-255
    const r = getLightValue();
    const g = getLightValue();
    const b = getLightValue();
    const alpha = 1; // Adjust transparency (0.1 = very transparent, 1 = no transparency)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Function to handle background color change
  const changeBgColor = () => {
    setBgColor(getRandomHexColor());
  };

  return (
    <div className="w-full bg-gray-300 py-0 px-0 overflow-hidden">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center gap-4 rounded-tl-xl rounded-tr-xl py-12 px-10"
      style={{ backgroundColor: "#000" }}>
        <div className="w-full lg:w-5/12">
          <h1
            className="text-4xl font-bold mb-6"
            style={{ color: bgColor }}
          >
            Үйлчлүүлэгчдийн сэтгэгдэл
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {testimonials[activeIndex].text}
          </p>
        </div>

        {/* Swiper Section */}
        <div className="w-full lg:w-7/12 flex justify-end">
          <div className="w-96 max-w-lg">
            <Swiper
              modules={[EffectCards, Autoplay]}
              effect={"cards"}
              loop={true}
              speed={700}
              slidesPerView={1}
              autoplay={{ delay: 3500 }}
              className="mySwiper"
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
                changeBgColor();
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="p-6 rounded-lg shadow-md transition-colors duration-500"
                    style={{ backgroundColor: bgColor }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={testimonial.src}
                        alt={`${testimonial.name}'s testimonial`}
                        className="w-20 h-20 rounded-full object-cover mb-4"
                      />
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
