import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
const productImage = [
  {
    id: 1,
    src: require("../assets/image/uildver/certi.png"),
  },
  {
    id: 2,
    src: require("../assets/image/uildver/uildver1.jpg"),
  },
  {
    id: 3,
    src: require("../assets/image/uildver/uildver2.jpg"),
  },
  {
    id: 4 ,
    src: require("../assets/image/uildver/uildver3.jpg"),
  },
  
];

const products = [
  { id: 1, image: require("../assets/image/window/window1.png"), title: "Давхар шилтэй цонх" }, // Double glazed window
  { id: 2, image: require("../assets/image/window/window2.png"), title: "Эрчим хүчний хэмнэлттэй цонх" }, // Energy-efficient window
  { id: 3, image: require("../assets/image/window/window3.png"), title: "Шуугиан тусгаарлагчтай цонх" }, // Noise-insulating window
  { id: 4, image: require("../assets/image/window/window5.png"), title: "Хэт ягаан туяаны хамгаалалттай цонх" }, // UV-protected window
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
            {productImage.map((productImage, index) => (
              <SwiperSlide key={index} aria-label={`Testimonial from ${productImage.name}`}>
                <div className="p-6 rounded-lg shadow-md transform transition-transform duration-300">
                  <div className="flex flex-col items-center text-center bg-gray-200 p-1 rounded-lg">
                    <img
                      src={productImage.src}
                      alt={`${productImage.id}'s testimonial`}
                      className="w-full h-full object-cover mb-4"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          </div>
      </div>

      <h2 className="py-14 text-2xl font-bold mb-6 text-center uppercase"><span className="text-teal-600">Бүрэн автомат </span>үйлдвэрлэл</h2>
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
