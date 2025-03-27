import React from 'react'
import logoImgBlue from '../assets/apnamartLogoblue.svg'
import logoImg from '../assets/apnamartLogo.svg'
import Facebook from '../assets/fb.svg'
import FacebookWhite from '../assets/fbWhite.svg'
import Instagram from '../assets/insta.svg'
import InstagramWhite from '../assets/instaWhite.svg'
import Youtube from '../assets/youtube.svg'
import YoutubeWhite from '../assets/youtubeWhite.svg'
import Linkedin from '../assets/linkdin.svg'
import LinkedinWhite from '../assets/linkdinWhite.svg'

const Footer = () => {
    return (
        <div className='bg-[#2F61AE] text-white w-full lg:rounded-[60px] rounded-3xl p-[8%] flex flex-col md:block gap-5'>
            <div className='md:hidden w-full flex items-center justify-center'>
            <img src={logoImg} alt="apna mart logo" className='w-60'/>
            </div>
            <div className='lg:h-27 md:h-35 h-20 bg-white text-[#11448A] rounded-3xl flex lg:flex-row lg:gap-4 flex-col justify-evenly items-center'>
                <div className='logo part hidden md:block'>
                    <img src={logoImgBlue} alt="apna mart logo" className='w-60' />
                </div>
                <div className='flex md:gap-12 md:text-xl text-sm gap-5 font-bold'>
                    <a href="/">Blog</a>
                    <a href="/">Creears</a>
                    <a href="/">Apply for franchise</a>
                </div>
                <div className='md:flex gap-5  hidden'>
                    <img src={Facebook} alt="Facebook" />
                    <img src={Linkedin} alt="Linkedin" />
                    <img src={Youtube} alt="Youtube" />
                    <img src={Instagram} alt="Instagram" />
                </div>
            </div>
            <div className='flex gap-5 md:hidden justify-center'>
                <img src={FacebookWhite} alt="Facebook" />
                <img src={LinkedinWhite} alt="Linkedin" />
                <img src={YoutubeWhite} alt="Youtube" />
                <img src={InstagramWhite} alt="Instagram" />
            </div>
        </div>
    )
}

export default Footer
