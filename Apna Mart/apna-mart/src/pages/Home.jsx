import React, { useEffect, useState, useRef } from 'react'
import locationImg from '../assets/loactionImg.svg'
import playstoreImg from '../assets/playstoreImg.svg'
import grocery from '../assets/grocery.png'

const words = ["Noodles", "Cleaning Supplies", "Snacks", "Electronics", "Kitchen Ware", "Vegetables", "Groceries", "Dairy Products"];

const WordChanger = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1500);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return <span className='font-extrabold'>{words[currentWordIndex]}</span>;
};

const Home = () => {
    const [demoData, setDemoData] = useState([]);
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                throw new Error("Failed to fetch API");
            }
            const data = await response.json();

            setDemoData(data);
        } catch (error) {
            console.log(error);
            setErr(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) return (
        <div>Loading...</div>
    )

    if (err != "") return (
        <div>{err}</div>
    )


    const HeroPart = () => {
        return (
            <>
            <div className='hero-part flex h-full w-full px-[8%]'>
                <div className="left lg:w-[70%] w-full text-[#2F61AE] flex flex-col py-10 px-0 lg:gap-10 gap-5">
                    <h1 className='font-bold lg:text-5xl/15 text-4xl/12'>Bringing<br /><span className='auto-font-extrabold lg:border-b-8 border-b-5 border-yellow-400'><WordChanger /></span><br />closer to you!</h1>

                    <p className='lg:text-2xl text-xl'>The future of retail is here! <br />
                        Shop from a nearby store or order online.</p>

                    <div className="buttons sm:text-xl text-sm font-bold sm:font-normal text-white flex lg:flex-row flex-col gap-10">
                        <button className='bg-[#2F61AE] py-2 px-5 flex gap-2 items-center cursor-pointer rounded-lg shadow-[4px_4px_0_#234275] border-2 border-[#234275] hover:bg-[#427cd3] hover:border-[#2F61AE] hover:shadow-none transition-all'>
                            <span><img src={locationImg} /></span>
                            <a href='/stores'>Find a nearby store</a>
                        </button>
                        <button className='bg-[#2F61AE] py-2 px-5 flex gap-2 items-center cursor-pointer rounded-lg shadow-[4px_4px_0_#234275] border-2 border-[#234275] hover:bg-[#427cd3] hover:border-[#2F61AE] hover:shadow-none transition-all'>
                            <span><img src={playstoreImg} /></span>
                            <a href='https://play.google.com/store/apps/details?id=com.apnamart.apnaconsumer&referrer=singular_click_id%3Dc2dd2f68-898c-4686-9fb6-9ead795424ef' target='_blank'>Order oline now</a>
                        </button>
                    </div>
                </div>
                <div className="right w-[30%] lg:flex hidden items-center justify-items-start" >

                    <img src={grocery} alt="grocery"  className='h-70'/>

                </div>
            </div>
            <div className='h-20 w-full bg-yellow-400'></div>
            </>
        )
    }

    return (
        <>
            <HeroPart />
            {/* <div className='w-full flex gap-3 flex-wrap mt-5 px-[8%]'>
                {demoData.map((data) => (
                    <div key={data.id} className='h-[400px] w-[300px] m-1 flex flex-col rounded-xl gap-2 p-[2%] border-1 cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)]'>
                        <img className='h-[70%]' src={data.image} />
                        <h1 className='h-[15%] overflow-hidden'>{data.title}</h1>
                        <p className='font-bold text-xl text-blue-600'>$ {data.price}</p>
                    </div>
                ))}
            </div> */}
        </>

    )
}

export default Home