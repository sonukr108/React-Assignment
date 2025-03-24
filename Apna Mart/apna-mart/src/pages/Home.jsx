import React, { useEffect, useState } from 'react'

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
    return (
        <div>
            <div className='w-full flex gap-3 flex-wrap mt-5 px-[8%]'>
                {demoData.map((data) => (
                    <div key={data.id} className='h-[400px] w-[300px] m-1 flex flex-col rounded-xl gap-2 p-[2%] border-1 cursor-pointer hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)]'>
                        <img className='h-[70%]' src={data.image} />
                        <h1 className='h-[15%] overflow-hidden'>{data.title}</h1>
                        <p className='font-bold text-xl text-blue-600'>$ {data.price}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Home