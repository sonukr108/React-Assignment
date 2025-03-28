import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/apnamartLogo.svg';
import sideline from '../assets/sideline.svg'

const Navbar = () => {
  return (
    <div className='h-[80px] w-100vw bg-[#2F61AE] text-white flex items-center px-[8%] gap-10 justify-between sticky top-0 z-10'>
      <div className='flex items-center gap-5'>
        <Link to='/'><img src={logo} alt="Apna Mart Logo" className="h-5 w-auto" /></Link>
      </div>
      <div className="buttons lg:flex hidden gap-7 items-center text-lg font-bold">
        <span className='flex gap-10'>
          <Link to='/stores' className='hover:text-yellow-500'>Stores</Link>
          <Link to='https://play.google.com/store/apps/details?id=com.apnamart.apnaconsumer' target='_blank' className='hover:text-yellow-500'>Download App</Link>
        </span>

        <button className='bg-white text-[#2F61AE] py-2 px-5 cursor-pointer rounded-lg shadow-[4px_4px_0_#234275] border-2 border-[#234275] hover:bg-yellow-500 hover:shadow-none transition-all'>
          <Link to='/franchise'>Apply for franchise</Link>
        </button>

      </div>
      <button className='block lg:hidden bg-white text-[#2F61AE] p-2 pt-3 cursor-pointer rounded-full border-2 border-[#234275] hover:bg-yellow-500 transition-all'>
        <Link to='/'><img src={sideline} alt="" /></Link>
      </button>

    </div>
  )
}

export default Navbar
