import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="relative flex justify-between items-center h-24 max-w-auto mx-auto px-4 bg-sky-200">
            <h1 className="text-3xl font-bold text-[#00df9a]">Фенстер Монгол</h1>
            <ul className="hidden md:flex gap-x-10 text-xl relative flex-1 justify-items-center left-60">
                <FlyoutLink href="/" className="group relative h-fit w-fit">
                    Нийтлэл,зөвөлгөө
                </FlyoutLink>
                <FlyoutLink
                    href="/about"
                    FlyoutContent={AboutFlyout}
                    className="group relative h-fit w-fit"
                >
                    Бидний тухай
                </FlyoutLink>
                <FlyoutLink
                    href="/products"
                    FlyoutContent={productContent}
                    className="group relative h-fit w-fit"
                >
                    Бүтээгдэхүүн
                </FlyoutLink>
                <FlyoutLink href="/services" FlyoutContent={serviceContent} className="group relative h-fit w-fit">
                    Үйлчилгээ
                </FlyoutLink>
            </ul>
            <button
                onClick={handleNav}
                className="block md:hidden"
                aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
            >
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
                        <Link to="/" onClick={handleNav}>Нийтлэл, зөвөлгөө</Link>
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

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="group relative h-fit w-fit"
        >
            <a href={href} className="relative text-[#00bf8a] text-l">
                {children}
                <span
                    style={{ transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)' }}
                    className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-teal-200 transition-transform duration-300 ease-out"
                />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        style={{ translateX: '-50%' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="absolute top-14 left-1/2 bg-white text-black"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#00bf8a]"></div>
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Example of flyout contents
const productContent = () => {
    return (
        <div className="w-full bg-white p-6 shadow-xl">
            <h3 className="font-bold text-xl mb-4">Бүтээгдэхүүн</h3>
            <div className="flex flex-col gap-6">
                <div className="flex-none">
                    <Link to="/pvc-windows" className="text-teal-600 font-semibold">
                        PVC цонх
                    </Link>
                    <p className="text-sm text-gray-600">
                        Veka брэндийн талаар болон эрчим хүчний хэмнэлт, дуу чимээг бууруулах, дулаан тусгаарлах гэх мэт ашиг тусын талаар дэлгэрэнгүй мэдээлэл.
                    </p>
                </div>
                <div className="flex-none">
                    <Link to="/exterior-decoration" className="text-teal-600 font-semibold">
                        Гадна чимэглэлийн систем
                    </Link>
                    <p className="text-sm text-gray-600">
                        Үзүүлэлт болон дизайны сонголт бүхий фасадны шийдлүүдийг үзүүлнэ.
                    </p>
                </div>
                <div className="flex-none">
                    <Link to="/insulation" className="text-teal-600 font-semibold">
                        Дулаалга
                    </Link>
                    <p className="text-sm text-gray-600">
                        Ашиг тус, олон төрлийн хэрэглээ зэрэг чулуун хөвөн болон бусад дулаалгын бүтээгдэхүүний талаарх мэдээлэл.
                    </p>
                </div>
            </div>
        </div>
    );
};


const serviceContent = () => {
    return (
        <div className="w-64 bg-white p-6 shadow-xl">
            <ul>
                <li>
                    <Link to="/about">Бидний тухай</Link>
                </li>
                <li>
                    <Link to="/team">Баг</Link>
                </li>
                <li>
                    <Link to="/contact">Холбоо барих</Link>
                </li>
            </ul>
        </div>
    );
};

const AboutFlyout = () => {
    return (
        <div className="w-64 bg-white p-6 shadow-xl">
            <ul>
                <li>
                    <Link to="/about">Бидний тухай</Link>
                </li>
                <li>
                    <Link to="/team">Баг</Link>
                </li>
                <li>
                    <Link to="/contact">Холбоо барих</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
