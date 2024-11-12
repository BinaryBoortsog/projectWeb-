import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
    const [nav , setNav]=useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='relative flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='text-3xl font-bold text-[#00df9a]'>Fenster Mongolia</h1>
            <ul className='flex hidden'>
                <li className='p-4'>Nuur Huudas</li>
                <li className='p-4'>Bidnii tuhai</li>
                <li className='p-4'>Butegdehuun</li>
                <li className='p-4'>Uilchilgee</li>
                <li className='p-4'>Niitlel zovlogoo heseg</li>
            </ul>
            <div>
                {!nav ? <CiMenuBurger size={20} className='text-[#00df9a]'/> :
                <CiMenuBurger size={20} className= 'text-[#00df9a]' />}
            </div>
            <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] z-0'>
                <h1 className='text-3xl font-bold text-[#00df9a] m-4'>Fenster Mongolia</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Nuur Huudas</li>
                    <li className='p-4 border-b border-gray-600'>Bidnii tuhai</li>
                    <li className='p-4 border-b border-gray-600'>Butegdehuun</li>
                    <li className='p-4 border-b border-gray-600'>Uilchilgee</li>
                    <li className='p-4 border-b border-gray-600'>Niitlel zovlogoo heseg</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
