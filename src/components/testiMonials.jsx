import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules"; 
import { ReactTyped } from 'react-typed'; 
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

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
  {
    text: "Харилцагчийн үйлчилгээ гайхалтай.",
    name: "Бат",
    company: "ЖДҮ ХХК",
    src: require("../assets/image/1.jpg"),
  },
];

const GallerySlider = () => {
  return (
    <div className="w-full bg-white px-4 overflow-hidden justify-center mx-auto pb-10">
      <div className="relative flex-col items-center flex justify-center mb-14">
        <FaQuoteLeft className="text-4xl text-teal-600 sm:right-40 md:right-60 relative mb-10" />
        <div className="flex flex-row justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-semibold">
            Манай байгууллага нь
          </p>
          <ReactTyped
            className="text-teal-600 relative md:text-3xl sm:text-2xl text-xl font-semibold md:pl-4 pl-2"
            strings={["Чанартай", "Тогтвортой", "Инновацлаг"]}
            typeSpeed={160}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-lg font-bold text-black py-2 sm:py-4">
          бүтээгдэхүүнээр та бүхэнд үйлчилнэ.
        </p>
        <FaQuoteRight className="text-4xl text-teal-600 sm:left-40 md:left-60 relative mt-10" />
      </div>

      <div className="w-2/3 max-w-6xl mx-auto text-center bg-white backdrop-blur-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.2),-10px_-10px_20px_rgba(0,0,0,0.1)] rounded-tl-2xl rounded-tr-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Үйлчлүүлэгчдийн сэтгэгдэл
        </h1>

        <div className="mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            scrollbar={{
              draggable: true,
              hide: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Scrollbar, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} aria-label={`Testimonial from ${testimonial.name}`}>
                <div className="p-6 rounded-lg shadow-md transform transition-transform duration-300">
                  <div className="flex flex-col items-center text-center bg-gray-200 p-4 rounded-lg">
                    <img
                      src={testimonial.src}
                      alt={`${testimonial.name}'s testimonial`}
                      className="w-20 h-20 rounded-full object-cover mb-4"
                    />
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                    <p className="mt-4 text-gray-700">{testimonial.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style>{`
            .swiper-pagination-bullet {
              width: 20px;
              height: 8px;
              border-radius: 0;
              background: #e5e7eb; /* Tailwind Gray-300 */
              transition: transform 0.3s, background 0.3s;
            }
            .swiper-pagination-bullet-active {
              background: #1d4ed8; /* Tailwind Blue-700 */
              transform: scale(1.2);
            }
            .swiper-pagination-bullet:hover {
              background: #1d4ed8;
              transform: scale(1.1);
            }
            .swiper-scrollbar {
              background: rgba(0, 0, 0, 0.1);
              height: 6px;
            }
            .swiper-scrollbar-drag {
              background: #1d4ed8;
              border-radius: 4px;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
