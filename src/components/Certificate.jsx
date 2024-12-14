import React from "react";
import certi from "../assets/image/certi.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules"; 
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

const products = [
  { id: 1, image: certi,  title: "Бүрэн автомат үйлдвэрлэл", },
  { id: 2, image: certi,  title: "Бүрэн автомат үйлдвэрлэл", },
  { id: 3, image: certi,  title: "Бүрэн автомат үйлдвэрлэл", },
  { id: 4, image: certi,  title: "Бүрэн автомат үйлдвэрлэл", },
];


const Certificate = () => {
  return (
    <div className="w-full bg-white px-4 pt-10 mt-10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-4 md:gap-8 px-4">

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

      <div>

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
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
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

          </div>
      </div>

      <h2 className="py-14 text-2xl font-bold mb-6 text-center">Бүрэн автомат үйлдвэрлэл</h2>
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
        className="w-full pb-12"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex-row justify-start">
            <div className="relative flex justify-center">
              <img
                src={product.image}
                alt={`Бүтээгдэхүүн ${product.id}`}
                 className=" sm:w-48 sm:h-48 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-md"
              />
            </div>
    
            <h3 className="text-xl font-bold mt-4">{product.title}</h3>
            <button className="text-teal-600 my-6 py-3 hover:bg-teal-600 hover:text-white rounded-md font-bold transition duration-300 ease-in-out">
              Дэлгэрэнгүй
            </button>
          </SwiperSlide>
           
        ))}
      </Swiper>
      </div>
  );
};

export default Certificate;
