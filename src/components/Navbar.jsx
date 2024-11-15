import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="relative flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="text-3xl font-bold text-[#00df9a]">Фенстер Монгол</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Нүүр хуудас</li>
                <li className="p-4">Бидний тухай</li>
                <li className="p-4">Бүтээгдэхүүн</li>
                <li className="p-4">Үйлчилгээ</li>
                <li className="p-4">Нийтлэл зөвлөгөө</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? (
                    <IoMdClose size={20} className="text-[#00df9a]" />
                ) : (
                    <CiMenuBurger size={20} className="text-[#00df9a]" />
                )}
            </div>
            <div
                className={
                    !nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="text-3xl font-bold text-[#00df9a] m-4">Фенстер Монгол</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Нүүр хуудас</li>
                    <li className="p-4 border-b border-gray-600">Бидний тухай</li>
                    <li className="p-4 border-b border-gray-600">Бүтээгдэхүүн</li>
                    <li className="p-4 border-b border-gray-600">Үйлчилгээ</li>
                    <li className="p-4 border-b border-gray-600">Нийтлэл зөвлөгөө</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
