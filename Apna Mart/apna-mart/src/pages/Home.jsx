import React, { useEffect, useState, useRef } from 'react'
import locationImg from '../assets/loactionImg.svg'

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
            <div className='hero-part flex'>
                <div className="left w-full flex flex-col p-10">
                    <h1 className='font-bold text-[#2F61AE] text-5xl/15'>Bringing<br /><span className='auto-font-extrabold border-b-8 border-yellow-400'><WordChanger/></span><br />closer to you!</h1>

                    <p className='text-xl'>The future of retail is here! <br />
                    Shop from a nearby store or order online.</p>

                    <div className="buttons">
                        <button className='bg-[#2F61AE]'>
                            <img src={locationImg} alt="" />
                            <p>Find a nearby store</p>
                        </button>
                    </div>
                </div>
                <div className="right w-full bg-red-300 h-screen">

                </div>
            </div>
        )
    }

    return (
        <div>
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
        </div>

    )
}

export default Home