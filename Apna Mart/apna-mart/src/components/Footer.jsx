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
import locationImgDark from '../assets/loactionImgDark.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    const locations = [
        { city: "Ranchi", places: ["Upper Chutia", "Lower Chutia", "Harmu Bazaar", "Sail City New Pundag", "Shop no. 4, Tagore Palace", "JP Market Dhurwa", "Kadru, New AG Colony Road", "Latma Road", "Near Reliance Fresh", "Getlatu", "Dindayal Chowk, Argora", "Adalhatu Chowk", "Old Argora Chowk", "Lalpur", "Dumar Toli", "Gandhi Nagar", "Indrapuri Sukhdeo", "Hatia Bazar", "Krisnapuri, Chutia", "Ratu Road", "Kathal More Ranchi", "Sidhatoli Ara", "Kamde", "Lohardaga", "Rims Rd, Jora Talab", "Piska Nagri", "Chuna Bhatta Chowk", "SR COMPLEX", "Hindpiri", "Tupudana Chowk", "Main Road Hinoo", "Kanke Block Chowk", "Opp. Pitambram Palace", "Cheshire Home Road", "Ground Floor Paramsukh Apartment", "Kusai Colony", "Tatisilwai Chowk", "Aayodhya Puri", "New Piper Toli", "Bargain Road", "Pe Pee Compound", "Itki Road, Near ITI Bus Stand", "Yunush Chowk"] },
        { city: "Jamshedpur", places: ["MP Tower", "Kandra", "Mango Zakir Nagar", "Kadma", "Mango Road No. 15", "Chepapul Mango", "Hurlung Road", "Bibha Kunj Tower", "Adityapur, Railway Fatak", "Near Kabra Gas", "Chhota Govindpur", "Kasidih New Lay Out Area"] },
        { city: "Bilaspur", places: ["Deori Khurd Road Phase 2", "Bilha", "Yadunandan Nagar, Tifra", "Mannu Chowk", "Mungeli Road", "Taj Road", "Nutan Chowk", "Rama Green City", "Kapil Nagar", "Hemu Nagar", "Rajkishor Nagar", "Sirgitti Road"] },
        { city: "Raipur", places: ["Sector 2", "Tagore Nagar Chowk", "Mohaba Bazar", "Shri Nagar", "Telibandha, Gurudwara Road", "New Changorabhata", "Sector 3, Janta Colony", "ATM Chowk", "Sector 7 New Rajendra Nagar", "Near Samta Arcade"] },
        { city: "Hazaribagh", places: ["Nutan Nagar", "Sindoor Chowk", "Babugaon", "Uma Mansion, Shiv Mandir Road", "Sinchai Colony Chowk", "Pagmal Road Thana No. 139", "Hurhuru", "Julu Park", "Ramnagar Road"] },
        { city: "Kolkata", places: ["Ward No. 23, Mouza - Chinsurah", "Kalyani", "Ward No. 20, Serampore", "N.C.M. Road W15, Baidyabati", "N.G. Basak Road", "Hindmotor, Uttarpara"] },
        { city: "Asansol", places: ["Aakash Residency", "G.T. Road Gopalpur", "Court More", "Chakraborty More", "Komal Apartment"] },
        { city: "Korba", places: ["Kosabadi Korba", "Kharmora", "Main Road Gevra Basti"] },
        { city: "Bhillai", places: ["Shubhas Chowk, Bhilai 3", "Kohka, Bhilai"] },
        { city: "Durgapur", places: ["City Centre DGP", "Near Krishna Marriage Hall"] },
        { city: "Ramgarh", places: ["Gola Ramgarh"] },
        { city: "Bokaro", places: ["Pushro, Bokaro, Jharkhand"] },
        { city: "Raniganj", places: ["N.S.B Road"] },
        { city: "Rajnandgaon", places: ["Sahdev Nagar, Rajnandgaon"] }
    ];

    return (
        <div className='footer h-[600px] bg-[#2F61AE] text-white w-full lg:rounded-[60px] rounded-3xl p-[8%] flex flex-col gap-5 '>
            <div className=' flex flex-col md:block gap-5'>
                <div className='md:hidden w-full flex items-center justify-center'>
                    <img src={logoImg} alt="apna mart logo" className='w-60' />
                </div>
                <div className='xl:h-30 md:h-35 h-20 bg-white text-[#11448A] rounded-3xl flex xl:flex-row lg:gap-4 flex-col justify-evenly items-center'>
                    <div className='logo part hidden md:block'>
                        <img src={logoImgBlue} alt="apna mart logo" className='w-60' />
                    </div>
                    <div className='flex md:gap-12 md:text-xl text-sm gap-5 font-bold'>
                        <Link to="/blog">Blog</Link>
                        <Link to="https://www.linkedin.com/company/apnamart-hq/jobs/">Creears</Link>
                        <Link to="/franchise">Apply for franchise</Link>
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
            <div className="about-footer p-[5%] w-full flex items-center justify-between flex-col gap-4 xl:flex-row text-xs sm:text-xl">
                <div className="left-about w-full flex flex-col gap-1 items-center xl:items-start">
                    <div className="top flex gap-8">
                        <span>coding w0rld Pvt Ltd</span>
                        <span>All rights reserved</span>
                    </div>
                    <div className="bottom text-[11px] text-gray-300 text-center">CIN:U51100JH2021PTC016651 | Sonu Kumar Verma | +91 78578 83654 | support@apnamart.in</div>
                </div>
                <div className="right-about w-full flex justify-between sm:font-bold font-semibold">
                    <Link to='/'>Privacy Policy</Link>
                    <Link to='/'>Terms of use</Link>
                    <Link to='/'>Return & Cancellation</Link>
                </div>
            </div>
            <div className="cities text-[#11448A] bg-white p-[8%] rounded-4xl flex flex-col gap-7 border-2 border-gray-200">
                <h2 className='text-4xl font-extrabold'>Visit your nearest store!</h2>
                <div className="space-y-4">
                    {locations.map((location, index) => (
                        <div key={index} className="city-card flex flex-col gap-2 border-b border-b-[#11448A] p-3 text-[#11448A]">
                            <div className="name-part flex gap-2 items-center">
                                <img src={locationImgDark} alt="Location icon" />
                                <h3 className="font-bold text-xl ">{location.city}</h3>
                            </div>
                            <div className="locations">
                                <p className="">{location.places.join(" | ") + " |"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
