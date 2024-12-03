import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="relative flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="text-3xl font-bold text-[#00df9a]">Фенстер Монгол</h1>
            <ul className="hidden md:flex">
                <li className="p-4">
                    <Link to="/" className="hover:text-[#00bf8a]">Нүүр хуудас</Link>
                </li>
                <li className="p-4">
                    <Link to="/About" className="hover:text-[#00bf8a]">Бидний тухай</Link>
                </li>
                <li className="p-4">
                    <Link to="/product" className="hover:text-[#00bf8a]">Бүтээгдэхүүн</Link>
                </li>
                <li className="p-4">
                    <Link to="/services" className="hover:text-[#00bf8a]">Үйлчилгээ</Link>
                </li>
                <li className="p-4">
                    <Link to="/blog" className="hover:text-[#00bf8a]">Нийтлэл зөвлөгөө</Link>
                </li>
            </ul>
            <button onClick={handleNav} className="block md:hidden" aria-label="Toggle navigation menu">
                {nav ? (
                    <IoMdClose size={20} className="text-[#00df9a]" />
                ) : (
                    <CiMenuBurger size={20} className="text-[#00df9a]" />
                )}
            </button>
            <div
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="text-3xl font-bold text-[#00df9a] m-4">Фенстер Монгол</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/" onClick={handleNav}>Нүүр хуудас</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/about" onClick={handleNav}>Бидний тухай</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/products" onClick={handleNav}>Бүтээгдэхүүн</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/services" onClick={handleNav}>Үйлчилгээ</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/blog" onClick={handleNav}>Нийтлэл зөвлөгөө</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
