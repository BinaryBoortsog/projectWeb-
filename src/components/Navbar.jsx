import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import exampleImage from "../assets/image/image.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navRef = useRef();

    const handleNav = () => setNav(!nav);

    // Close mobile menu when clicking outside
    const handleOutsideClick = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setNav(false);
        }
    };

    useEffect(() => {
        if (nav) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [nav]);

    return (
        <div className="fixed flex z-50">
            {/* Top Navbar */}
            <div
                className="top-0 fixed bg-white w-full flex  h-[3rem]  justify-between items-center shadow-md"
               
            >
                <h1 className="text-black text-lg pl-4">Дүрээ сонгоно уу</h1>
                <div className="w-2/3 flex  h-[3rem]  justify-between items-center">
                <button className="hidden md:block  hover:bg-teal-600 h-12  flex-grow">Хувь хүн</button>
                <button className="hidden md:block  hover:bg-teal-600 h-12  flex-grow">Инженер</button>
                <button className="hidden md:block  hover:bg-teal-600 h-12  flex-grow">Архитектор</button>
                <button className="hidden md:block  bg-black text-white hover:bg-white hover:text-teal-600 h-12  flex-grow">Төсөл хэрэгжүүлэх</button>
                <button
                    onClick={handleNav}
                    className="block md:hidden pr-4 focus:outline-none"
                    aria-label={nav ? "Цэс хаах" : "Цэс нээх"}
                >
                    {nav ? (
                        <IoMdClose size={24} className="text-[#000]" />
                    ) : (
                        <CiMenuBurger size={24} className="text-[#000] " />
                    )}
                </button>
                </div>
                
            </div>

            {/* Middle Section */}
            <div className="fixed top-12 w-full flex justify-between items-center h-20 max-w-auto bg-custom-gradient">
                <img
                    src={exampleImage}
                    alt="Жишээ зураг"
                    className="relative left-14 w-36 h-36 bottom-5"
                    href="/home"
                />
                <ul className="hidden md:flex bottom-5 gap-x-24 text-lg relative flex-1 justify-items-center left-1/4">
                    <FlyoutLink href="/about" FlyoutContent={AboutFlyout}>
                        Хамтран ажиллах
                    </FlyoutLink>
                    <FlyoutLink href="/product" FlyoutContent={productContent}>
                        Бүтээгдэхүүн
                    </FlyoutLink>
                    <FlyoutLink href="/services" FlyoutContent={serviceContent}>
                        Үйлдвэрлэл
                    </FlyoutLink>
                    <FlyoutLink href="/">Хэрэгжүүлсэн төслүүд</FlyoutLink>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div
                ref={navRef}
                className={`fixed left-0 top-0 w-[60%] h-full border-r bg-[#fff] transition-transform duration-500 ${
                    nav ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <img
                    src={exampleImage}
                    alt="Жишээ зураг"
                    className="w-36 h-36 relative left-16"
                />
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/" onClick={handleNav}>
                            Нийтлэл, зөвлөгөө
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/about" onClick={handleNav}>
                            Бидний тухай
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/products" onClick={handleNav}>
                            Бүтээгдэхүүн
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/services" onClick={handleNav}>
                            Үйлчилгээ
                        </Link>
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
            <a href={href} className="relative text-[#fff] text-l">
                {children}
                <span
                    style={{ transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)' }}
                    className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-teal-600 transition-transform duration-300 ease-out"
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

// Example Flyout Contents
const productContent = () => (
    <div className="w-64 bg-white p-6 shadow-xl">
        <h3 className="font-bold text-xl mb-4">Бүтээгдэхүүн</h3>
        <div className="flex flex-col gap-4">
            <Link to="/pvc-windows" className="text-teal-600 font-semibold">
                PVC цонх
            </Link>
            <Link to="/exterior-decoration" className="text-teal-600 font-semibold">
                Гадна чимэглэлийн систем
            </Link>
            <Link to="/insulation" className="text-teal-600 font-semibold">
                Дулаалга
            </Link>
        </div>
    </div>
);

const serviceContent = () => (
    <div className="w-64 bg-white p-6 shadow-xl">
        <ul>
            <li>
                <Link to="/team">Баг</Link>
            </li>
            <li>
                <Link to="pages/contacts">Холбоо барих</Link>
            </li>
        </ul>
    </div>
);

const AboutFlyout = () => (
    <div className="w-64 bg-white p-6 shadow-xl">
        <ul>
            <li>
                <Link to="/about">Бидний тухай</Link>
            </li>
            <li>
                <Link to="/team">Баг</Link>
            </li>
            <li>
                <Link to="/pages/contacts">Холбоо барих</Link>
            </li>
        </ul>
    </div>
);

export default Navbar;
