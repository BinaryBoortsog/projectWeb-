import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Pagination } from "swiper/modules";

import image1 from "../assets/image/7.png";
import image2 from "../assets/image/6.png";
import image3 from "../assets/image/icon2.png"
import image4 from "../assets/image/icon3.png"

const FeaturedProducts = () => {
  const products = [
    { id: 1, image: image1, image2: image2, title: "Инженерчлэл", text: "Хэмжилт, зураг төсөл, угсралт, үйлдвэрлэлийн тооцоолол" },
    { id: 2, image: image1, image2: image3, title: "Ажиллах хүчин", text: "10 жилийн туршлагатай, тогтвортой, мэргэжлийн хамт олон" },
    { id: 3, image: image1, image2: image4, title: "Баталгаа", text: "Баталгаат хугацаанд хүрээн дэх засвар үйлчилгээний дуудлагын төв" },
    { id: 4, image: image1, image2: image2, title: "Инженерчлэл", text: "Хэмжилт, зураг төсөл, угсралт, үйлдвэрлэлийн тооцоолол" },
  ];

  return (
    <div className="featured-products w-full py-12">
      <div className="w-full flex h-[4rem] justify-between items-center">
        <button className="hidden md:block text-gray-500 font-medium hover:text-black text-lg hover:bg-gray-200 h-16 flex-grow">Цонх</button>
        <button className="hidden md:block text-gray-500 font-medium hover:text-black text-lg hover:bg-gray-200 h-16 flex-grow">Пасад</button>
        <button className="hidden md:block text-gray-500 font-medium hover:text-black text-lg hover:bg-gray-200 h-16 flex-grow">Дулаалга</button>
        <button className="hidden md:block text-gray-500 font-medium hover:text-black text-lg hover:bg-gray-200 h-16 flex-grow">Гроэ</button>
      </div>

      <h2 className="py-14 text-2xl font-bold mb-6 text-center">Яагаад бид гэж?</h2>
      
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
          <SwiperSlide key={product.id} className="flex flex-col items-center p-7">
            <div className="relative flex justify-center">
              <img
                src={product.image2}
                alt={`Бүтээгдэхүүн ${product.id} фон`}
                className="absolute w-24 h-24 md:w-36 md:h-36 lg:w-16 lg:h-16"
              />
              <img
                src={product.image}
                alt={`Бүтээгдэхүүн ${product.id}`}
                className="relative w-24 h-24 md:w-36 md:h-36 lg:w-16 lg:h-16 bottom-6 left-5"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center">{product.title}</h3>
            <p className="text-center text-gray-800 mt-4">{product.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
