import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

const FeaturedProducts = () => {
  const products = [
    { id: 1, image: require("../assets/image/frame1.png") },
    { id: 2, image: require("../assets/image/frame1.png") },
    { id: 3, image: require("../assets/image/frame1.png") },
    { id: 4, image: require("../assets/image/frame1.png") },
  ];

  return (
    <div className="featured-products w-full px-4 py-12">
      <h2 className="featured-products-title text-2xl font-bold mb-6 text-center">
        Yagaad bid gej?
      </h2>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        scrollbar={{ draggable: true , hide: true }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <img src={product.image} alt="product"className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
