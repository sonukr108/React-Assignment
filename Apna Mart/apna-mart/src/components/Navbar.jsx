import React from 'react'
import logo from '../assets/apnamartLogo.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='h-[80px] w-100vw bg-[#2F61AE] text-white flex items-center px-[8%] gap-10 justify-between sticky top-0'>
      <div className='flex items-center gap-5'>
      <Link to='/'><img src={logo} alt="Apna Mart Logo" className="h-5 w-auto" /></Link>
      <span className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </span>
      </div>
      <div className="buttons">
        <button className='bg-red-600 text-white p-2 rounded-lg text-lg font-bold'>Log in</button>
      </div>

    </div>
  )
}

export default Navbar
