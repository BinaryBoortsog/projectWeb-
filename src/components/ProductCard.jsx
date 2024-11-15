import React from "react";

const ProductCard = ({ image, title, onClick }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 min-w-[200px] max-w-[250px] hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <button
        onClick={onClick}
        className="bg-[#00df9a] text-white px-4 py-2 rounded hover:bg-[#49dfb2ef] transition"
      >
        Дэлгэрэнгүй
      </button>
    </div>
  );
};

export default ProductCard;
