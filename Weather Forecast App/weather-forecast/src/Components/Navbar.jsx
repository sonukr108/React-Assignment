import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [dark, setDark] = useState(false);

    const changeTheme = (setDark) => {
        document.getElementById("root").classList.toggle("dark");
        setDark(prev => !prev);
    }
    return (
        <nav className='h-16 w-full bg-none flex items-center justify-between px-5 py-5 xl:px-10'>
            <h1 className='text-xl font-bold dark:text-white text-black'>Sonu's Weather App</h1>
            <button
                onClick={() => changeTheme(setDark)}
                className='h-10 w-fit px-4 xl:px-6 bg-black hover:bg-gray-500 dark:bg-white dark:text-black text-white font-bold rounded transition-all duration-300 cursor-pointer'>
                {dark ? "Light" : "Dark"}
            </button>
        </nav>
    )
}

export default Navbar