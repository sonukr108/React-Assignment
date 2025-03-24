import React from 'react'
import logo from '../assets/apnamartLogo.svg';
const Navbar = () => {
  return (
    <div className='h-[80px] w-screen bg-[#2F61AE] text-white flex items-center px-5'>
      <div>
        <img src={logo} alt="Apna Mart Logo" className="h-5 w-auto" />
      </div>
    </div>
  )
}

export default Navbar
