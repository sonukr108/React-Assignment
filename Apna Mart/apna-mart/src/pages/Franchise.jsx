import React from 'react'

const Franchise = () => {

  const FranchiseInfo = () => {
    return (
      <div className="franchise-info flex lg:flex-row flex-col gap-2 justify-between">
        <div className="text-info flex flex-col gap-4">
          <h1 className='md:text-5xl text-2xl font-bold'>Join the retail revolution today!</h1>
          <p className='md:text-xl text-lg text-[#155bbc] font-semibold'>Become Apna Mart franchise partner</p>
          <p className='md:text-lg text-md'>The future of retail is here! Bring an Apna Mart store in your locality</p>
          <div className='flex gap-5'>
            <p className='text-white md:text-2xl text-xl bg-[#11448A] w-fit p-3 rounded-tl-xl rounded-br-xl font-bold'>100+ Stores</p>
            <p className='text-white md:text-2xl text-xl bg-[#11448A] w-fit p-3 rounded-tr-xl rounded-bl-xl font-bold'>20 Lacs+ Orders</p>
          </div>
        </div>
        <div className="video-info">
          <iframe className='md:h-[315px] md:w-[560px] h-[157px] w-[280px]' src="https://www.youtube.com/embed/Qy5_5H3b5Ww?si=PWP36P28ZgXHQMxC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    );
  }

  return (
    <div className='px-[8%] py-10'>
      <FranchiseInfo />
    </div>
  )
}

export default Franchise
