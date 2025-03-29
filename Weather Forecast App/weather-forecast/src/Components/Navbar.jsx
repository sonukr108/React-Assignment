import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [dark, setDark] = useState(false);

    const changeTheme = (setDark) => {
        document.getElementById("root").classList.toggle("dark");
        setDark(prev => !prev);
    }
    return (
        <nav className='h-16 w-full bg-orange-500 dark:bg-orange-800 flex items-center justify-between px-5 py-5 xl:px-10'>
            <h1 className='text-xl font-bold dark:text-white text-black'>Weather App</h1>
            <button
                onClick={() => changeTheme(setDark)}
                className='h-10 w-fit px-4 xl:px-6 bg-orange-800 hover:bg-orange-700 dark:bg-orange-500 text-white font-semibold rounded transition-all duration-300 cursor-pointer'>
                {dark ? "Light" : "Dark"}
            </button>
        </nav>
    )
}

export default Navbar