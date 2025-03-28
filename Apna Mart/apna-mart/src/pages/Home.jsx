import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import locationImg from '../assets/loactionImg.svg'
import playstoreImg from '../assets/playstoreImg.svg'
import grocery from '../assets/grocery.png'
import bestprice from '../assets/bestPrice.svg'
import offerDeals from '../assets/offerDeals.svg'
import quality from '../assets/quality.svg'
import delivery from '../assets/delivery.svg'
import scroll1 from '../assets/scroll1.webp'
import scroll2 from '../assets/scroll2.webp'
import scroll3 from '../assets/scroll3.webp'
import scroll4 from '../assets/scroll4.webp'
import story1 from '../assets/story1.webp'
import story2 from '../assets/story2.webp'
import story3 from '../assets/story3.webp'


const words = ["Noodles", "Cleaning Supplies", "Snacks", "Electronics", "Kitchen Ware", "Vegetables", "Groceries", "Dairy Products"];

const WordChanger = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return <span className='text-6xl font-extrabold'>{words[currentWordIndex]}</span>;
};

const Home = () => {
    const HeroPart = () => {
        return (
            <div className='min-h-screen'>
                <div className='hero-part flex h-full w-full'>
                    <div className="left lg:w-[55%] w-full text-[#11448A] flex flex-col justify-center py-[5%] px-[8%] lg:gap-13 gap-5">
                        <h1 className='font-bold md:text-5xl/15 text-4xl/12'>Bringing<br /><span className='auto-font-extrabold lg:border-b-8 border-b-5 border-yellow-400'><WordChanger /></span><br />closer to you!</h1>

                        <p className='lg:text-2xl text-xl'>The future of retail is here! <br />
                            Shop from a nearby store or order online.</p>

                        <div className="buttons lg:text-xl text-sm font-bold sm:font-normal text-white flex xl:flex-row flex-col gap-10">
                            <button className='bg-[#2F61AE] lg:w-60 w-50 py-2 px-5 flex gap-2 items-center cursor-pointer rounded-lg shadow-[4px_4px_0_#234275] border-2 border-[#234275] hover:bg-[#427cd3] hover:border-[#2F61AE] hover:shadow-none transition-all'>
                                <span><img src={locationImg} /></span>
                                <Link to='/stores'>Find a nearby store</Link>
                            </button>
                            <button className='bg-[#2F61AE] lg:w-60 w-50 py-2 px-5 flex gap-2 items-center cursor-pointer rounded-lg shadow-[4px_4px_0_#234275] border-2 border-[#234275] hover:bg-[#427cd3] hover:border-[#2F61AE] hover:shadow-none transition-all'>
                                <span><img src={playstoreImg} /></span>
                                <a href='https://play.google.com/store/apps/details?id=com.apnamart.apnaconsumer&referrer=singular_click_id%3Dc2dd2f68-898c-4686-9fb6-9ead795424ef' target='_blank'>Order oline now</a>
                            </button>
                        </div>
                    </div>
                    <div className="right w-[45%] lg:flex hidden items-center justify-center bg-[url('../../public/topbg.svg')] bg-bottom bg-contain bg-no-repeat">
                        <img src={grocery} alt="grocery" className='h-70' />
                    </div>
                </div>
                <div className='features-part w-full text-[#11448A] px-[10%] py-[5%] xl:h-[150px] xl:pt-12 xl:mb-60 flex flex-wrap gap-5 items-center justify-between bg-[#FFCA49] '>
                    <div className="apna-card text-center w-[250px] h-[300px] flex flex-col items-center justify-between">
                        <img src={bestprice} alt="best price img" className='' />
                        <p className='text-4xl font-extrabold'>Best Price</p>
                        <p className='text-md'>Our products are priced with care and love towards YOU.</p>
                    </div>
                    <div className="apna-card text-center w-[250px] h-[300px] flex flex-col items-center justify-between">
                        <img src={delivery} alt="delivery img" className='' />
                        <p className='text-4xl font-extrabold'>15 Minutes Delivery</p>
                        <p className='text-md'>We deliver in minutes. 15 mins is all it takes.</p>
                    </div>
                    <div className="apna-card text-center w-[250px] h-[300px] flex flex-col items-center justify-between">
                        <img src={quality} alt="quantity img" className='relative top-[-30px]' />
                        <p className='text-4xl font-extrabold'>Quality Assortments</p>
                        <p className='text-md'>We’ve got the BEST. Global, local, you name it.</p>
                    </div>
                    <div className="apna-card text-center w-[250px] h-[300px] flex flex-col items-center justify-between">
                        <img src={offerDeals} alt="best price img" className='relative top-[-20px]' />
                        <p className='text-4xl font-extrabold'>Offers and deals</p>
                        <p className='text-md'>Shopping is an everyday fun and pocket friendly experience with our regular offers and deals</p>
                    </div>
                </div>
                <div className=''>
                    <h1>&nbsp;</h1>
                </div>
            </div>
        )
    }
    const ScrollThings = () => {
        const categories = [
            "Pet Care", "Baby Care", "Stationery & Toys", "Personal Care", "Beverages", "Grocery & Staples", "Biscuits & Snacks", "Kitchen Needs", "Pooja Needs"
        ];

        return (
            <div className="w-full bg-[#11448A] text-white py-8 overflow-hidden">
                <div className="flex w-max animate-marquee">
                    {categories.concat(categories).map((item, index) => (
                        <div key={index} className="flex items-center text-lg font-semibold">
                            <div className="bg-white h-2 w-2 rounded-full"></div>
                            <span className='px-8 italic text-xl'>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const FindLocation = () => {
        return (
            <div className=" w-full h-[70vh] bg-[url('../../public/bgmap.png')] bg-top bg-cover bg-no-repeat flex flex-col lg:flex-row lg:gap-30 gap-10 p-[8%] justify-center items-center">
                <div className='lg:text-6xl text-3xl font-extrabold text-[#11448A]'>
                    <h1><span className='text-yellow-600 underline'>Closer</span> <br />to you</h1>
                </div>
                <div className='flex flex-col gap-10'>
                    <p className='lg:text-4xl text-2xl italic font-bold text-[#2F61AE]'>We’re never far away. <br /> Find an Apna Mart <br /> near you.</p>
                    <button className='bg-[#2F61AE] lg:w-60 w-50 py-2 px-5 flex gap-2 items-center cursor-pointer rounded-lg shadow-[4px_4px_0_#234275] border-2 border-[#234275] hover:bg-[#427cd3] hover:border-[#2F61AE] hover:shadow-none transition-all lg:text-xl text-sm font-bold sm:font-normal text-white'>
                        <span><img src={locationImg} /></span>
                        <Link to='/stores'>Find a nearby store</Link>
                    </button>
                </div>
            </div>
        );
    }

    const Franchise = () => {
        return (
            <div className='w-full h-[60vh] p-[8%] flex flex-col items-center justify-center md:gap-10 gap-5 text-[#11448A] text-center'>
                <div>
                    <p className='md:text-6xl text-3xl font-extrabold'>You can own an <span className='underline text-yellow-600'>Apna Mart store!</span></p>
                </div>
                <div className='md:text-xl text-md'>
                    What you may NOT need : a business experience. <br className='hidden lg:block' />
                    Take the first step towards the best and the future! <br className='hidden lg:block' />
                    Our team, tools and time to build “YOUR” Apna store!
                </div>
                <div>
                    <button className='bg-white text-[#2F61AE] py-2 px-5 cursor-pointer rounded-lg shadow-[4px_4px_0_#234275] border-2 border-[#234275] hover:bg-yellow-500 hover:shadow-none transition-all text-lg font-bold'>
                        <Link to='/franchise'>Apply for franchise</Link>
                    </button>
                </div>
            </div>
        );
    }

    const FranchiseNext = () => {
        return (
            <div className='w-full h-[100vh] p-[8%] bg-[#FFCA49] flex flex-col items-center justify-center md:gap-10 gap-5 text-[#11448A] text-center lg:rounded-[60px]'>
                <div>
                    <p className='md:text-6xl text-3xl font-extrabold'>We’re growing, come <span className='underline text-white'>join us.</span></p>
                </div>
                <div className='md:text-xl text-md'>
                    Upgrade your store with Apna Mart. <br className='hidden lg:block' />
                    With your trust and your passion, we refashion <br className='hidden lg:block' />
                    your store's experience!
                </div>
                <div>
                    <div class="relative overflow-hidden">
                        <div class="flex space-x-4 animate-marquee-scroll">
                            <img src={scroll1} class="lg:h-80 lg:w-120 h-40 w-60 object-cover rounded-lg" />
                            <img src={scroll2} class="lg:h-80 lg:w-120 h-40 w-60 object-cover rounded-lg" />
                            <img src={scroll3} class="lg:h-80 lg:w-120 h-40 w-60 object-cover rounded-lg" />
                            <img src={scroll4} class="lg:h-80 lg:w-120 h-40 w-60 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
                <div>
                    <button className='bg-white text-[#2F61AE] py-2 px-5 cursor-pointer rounded-lg shadow-[4px_4px_0_#234275] border-2 border-[#234275] hover:bg-yellow-500 hover:shadow-none transition-all text-lg font-bold'>
                        <Link to='/franchise'>Apply for franchise</Link>
                    </button>
                </div>
            </div>
        );
    }

    const ContactUs = () => {
        return (
            <div className="w-full h-[90vh] p-[8%] flex flex-col items-center justify-center md:gap-10 gap-5 text-[#11448A] text-center md:bg-[url('../../public/Maskgroup.svg')] bg-top bg-cover bg-no-repeat">
                <div>
                    <p className='md:text-6xl text-3xl font-extrabold'>Build your brand <span className='underline text-yellow-600'>with us.</span></p>
                </div>
                <div className='md:text-xl text-md'>
                    Launch your products with Apna Mart across tier-2 and tier-3 cities. We offer an <br className='hidden lg:block' />ambitious, efficient, multi-medium experience uniformly.
                </div>
                <div>
                    <button className='bg-white text-[#2F61AE] py-2 px-5 cursor-pointer rounded-lg shadow-[4px_4px_0_#234275] border-2 border-[#234275] hover:bg-yellow-500 hover:shadow-none transition-all text-lg font-bold'>
                        <a href='/contact'>Contact Us</a>
                    </button>
                </div>
            </div>
        );
    }
    const Stories = () => {
        return (
            <div className="w-full lg:h-[80vh] h-[140vh] p-[8%] flex flex-col items-center justify-center md:gap-10 gap-5 text-[#11448A] text-center bg-[#FFCA49] lg:rounded-[60px]">
                <div>
                    <p className='md:text-6xl text-3xl font-extrabold'>Apna Stories!</p>
                </div>
                <div className='md:text-xl text-md'>
                    Visit our blogs for happy stories and the latest Apna Mart updates
                </div>
                <div className="stories flex flex-col lg:flex-row gap-5 w-full items-center justify-between">
                    <div className="story-card lg:w-[30%] w-[70%] flex items-center justify-center flex-col gap-5">
                        <img src={story1} alt="storycard" className='lg:w-80 w-100 rounded-lg'/>
                        <p className='md:text-lg text-sm font-bold'>Steps to Download Apna Mart App and Order Groceries Online in Ranchi</p>
                    </div>
                    <div className="story-card lg:w-[30%] w-[70%] flex items-center justify-center flex-col gap-5">
                        <img src={story2} alt="storycard" className='lg:w-80 w-100 rounded-lg'/>
                        <p className='md:text-lg text-sm font-bold'>Online Grocery Delivery in Ranchi: Get Daily Essentials at Your Doorstep 15 min</p>
                    </div>
                    <div className="story-card lg:w-[30%] w-[70%] flex items-center justify-center flex-col gap-5">
                        <img src={story3} alt="storycard" className='lg:w-80 w-100 rounded-lg'/>
                        <p className='md:text-lg text-sm font-bold'>Apna Mart Brings 15 minutes Ultra Fast Grocery Delivery in Jamshedpur</p>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <>
            <HeroPart />
            <ScrollThings />
            <FindLocation />
            <Franchise />
            <FranchiseNext />
            <ContactUs />
            <Stories />
        </>

    )
}

export default Home