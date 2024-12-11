import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules"; // Import Pagination along with Scrollbar

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination"; // Import pagination styles

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
  {
    text: "Бүтээгдэхүүнүүд нь үнэхээр найдвартай.",
    name: "Энхжин",
    company: "Үйлчлүүлэгч",
    src: require("../assets/image/1.jpg"),
  },
];

const GallerySlider = () => {

  return (
    <div className="w-2/3 bg-white py-8 px-4 overflow-hidden justify-center mx-auto">
      {/* Combined Section */}
      <div className="max-w-6xl mx-auto text-center bg-white backdrop-blur-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.2),-10px_-10px_20px_rgba(0,0,0,0.1)] rounded-tl-2xl rounded-tr-2xl p-8">
        {/* Header Section */}
        <h1 className="text-2xl font-bold text-gray-800">
          Үйлчлүүлэгчдийн сэтгэгдэл
        </h1>

        {/* Swiper Section */}
        <div className="mt-8">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            scrollbar={{
              draggable: true,
              hide: false, // Set to true if you want to hide the scrollbar when not in use
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
            modules={[Scrollbar, Pagination]} // Include both Scrollbar and Pagination modules
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`p-6 rounded-lg shadow-md transform transition-transform duration-300
                    
                  `}
                >
                  <div className="flex flex-col items-center text-center bg-gray-200">
                    <img
                      src={testimonial.src}
                      alt={`${testimonial.name}'s testimonial`}
                      className="w-20 h-20 rounded-full object-cover mb-4"
                    />
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
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
              background: #000; /* Tailwind Gray-300 */
              transition: transform 0.3s, background 0.3s;
            }
            .swiper-pagination-bullet-active {
              background: #1d4ed8; /* Tailwind Blue-700 */
              transform: scale(1.2);
            }

            .swiper-scrollbar {
              background: rgba(0, 0, 0, 0.1); /* Background for scrollbar track */
              height: 6px; /* Thickness of the scrollbar */
            }
            .swiper-scrollbar-drag {
              background: #1d4ed8; /* Tailwind Blue-700 for the draggable handle */
              border-radius: 4px; /* Rounded edges for the scrollbar handle */
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
