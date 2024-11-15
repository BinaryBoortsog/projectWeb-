import React, { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, image: "/path/to/image1.jpg", title: "PVC Цонх" },
  { id: 2, image: "/path/to/image2.jpg", title: "Фасад" },
  { id: 3, image: "/path/to/image3.jpg", title: "Хаалга" },
  { id: 4, image: "/path/to/image4.jpg", title: "Хуванцар хаалга" },
  { id: 5, image: "/path/to/image5.jpg", title: "Металл фасад" },
  { id: 6, image: "/path/to/image6.jpg", title: "Хаалт" },
  { id: 7, image: "/path/to/image7.jpg", title: "Шилэн хана" },
  { id: 8, image: "/path/to/image8.jpg", title: "Дотор хаалга" },
];

const FeaturedProducts = () => {
  const initialVisible = 6; // Number of products initially visible
  const increment = 3; // Number of products to add on "Load More"
  const [visibleProducts, setVisibleProducts] = useState(initialVisible);

  const handleLoadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + increment, products.length));
  };

  return (
    <section className="py-12 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Онцлох бүтээгдэхүүн</h2>

        {/* Section Title */}
        <div className="overflow-x-auto flex space-x-4 py-4">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              onClick={() => console.log(`Product ID: ${product.id}`)}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < products.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-[#00df9a] text-white px-6 py-2 rounded hover:bg-[#54e4b8ef] transition"
            >
              Илүү ихийг харах
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
