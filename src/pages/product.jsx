import React, { useState } from 'react';

const Product = () => {
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('');
  
  // Products array
  const products = [
    {
      id: 1,
      name: 'Цонх 1',
      image: 'https://via.placeholder.com/480x320?text=Window+1',
      price: '500,000₮',
    },
    {
      id: 2,
      name: 'Цонх 2',
      image: 'https://via.placeholder.com/480x320?text=Window+2',
      price: '700,000₮',
    },
    {
      id: 3,
      name: 'Цонх 3',
      image: 'https://via.placeholder.com/480x320?text=Window+3',
      price: '800,000₮',
    },
    {
      id: 4,
      name: 'Цонх 4',
      image: 'https://via.placeholder.com/480x320?text=Window+4',
      price: '600,000₮',
    },
    {
      id: 5,
      name: 'Цонх 5',
      image: 'https://via.placeholder.com/480x320?text=Window+5',
      price: '400,000₮',
    },
    { id: 6, name: 'Product 5', image: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg', price: '400 won' },
    { id: 7, name: 'Product 5', image: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg', price: '400 won' },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort products based on selected option
  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = parseInt(a.price.replace(' won', ''));
    const priceB = parseInt(b.price.replace(' won', ''));
    
    if (sortOption === 'price-asc') return priceA - priceB;
    if (sortOption === 'price-desc') return priceB - priceA;
    return 0;
  });

  return (
    <div className='bg-white pt-28'>
      <div className='max-w-screen-2xl container mx-auto px-5'>
        {/* Section Heading */}
        <div className='text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-800'>Манай бүтээгдэхүүнүүд</h2>
          <div className='max-w-2xl mx-auto'>
            <p className='text-[#0F0E0E] mt-4'>
            Бид цонхны шилдэг шийдлүүдийг танд хүргэж байна. Таны хэрэгцээнд нийцсэн олон төрлийн бүтээгдэхүүнүүдтэй танилцаарай.
            </p>
          </div>
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center mt-10 gap-4">
  <div className="relative w-full ">
    {/* Search */}
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border border-gray-600 rounded-lg py-2 px-4 pr-16 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
    />
    {/* Sort */}
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="absolute top-0 right-0 h-full border-l border-gray-600 rounded-r-lg bg-white py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
    >
      <option value="">Sort by</option>
      <option value="price-asc">Үнэ: Хямд нь эхэнд</option>
      <option value="price-desc">Үнэ: Үндсэн нь эхэнд</option>
    </select>
  </div>
</div>

        {/* Product Grid */}
        <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-10'>
        {sortedProducts.map((product, index) => (
    <div
      key={product.id}
      className={`relative overflow-hidden ${
        index % 3 === 1 ? 'mt-6' : '' // Add margin to the middle column
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        className='w-full object-cover rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out'
      />
      <div>
        <h3 className='text-xl font-semibold mt-4'>{product.name}</h3>
        <p className='text-gray-500 mt-2'>{product.price}</p>
      </div>
    </div>
  ))}
        </div>

        {/* See More Button */}
        <div className='text-center mt-9 lg:mt-24'>
          <button className='px-6 py-3 border text-teal-600 items-center gap-2 text-dm font-medium rounded-md transition-transform transform hover:scale-105'>
          Илүү ихийг үзэх <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
