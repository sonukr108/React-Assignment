import React from 'react'
import logoImg from '../assets/apnamartLogoblue.svg'
import Facebook from '../assets/fb.svg'
import Instagram from '../assets/insta.svg'
import Youtube from '../assets/youtube.svg'
import Linkedin from '../assets/linkdin.svg'

const Footer = () => {
  return (
    <div className='bg-[#2F61AE] text-white w-full rounded-[60px] p-[8%]'>
        <div className='h-27 bg-white text-[#11448A] rounded-3xl flex justify-evenly items-center'>
            <div className='logo part'>
                <img src={logoImg} alt="apna mart logo" className='w-60' />
            </div>
            <div className='flex gap-12 text-xl font-bold'>
                <a href="/">Blog</a>
                <a href="/">Creears</a>
                <a href="/">Apply for franchise</a>
            </div>
            <div className='flex gap-5'>
                <img src={Linkedin} alt="Linkedin" />
                <img src={Facebook} alt="Facebook" />
                <img src={Youtube} alt="Youtube" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </div>
        
    </div>
  )
}

export default Footer
