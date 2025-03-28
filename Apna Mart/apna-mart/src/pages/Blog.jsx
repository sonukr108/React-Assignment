import React from 'react'
import story1 from '../assets/story1.webp'
import story2 from '../assets/story2.webp'
import story3 from '../assets/story3.webp'
const Blog = () => {
  const Stories = () => {
    return (
      <div className="w-full lg:h-[80vh] h-[140vh] p-[8%] flex flex-col items-center md:gap-10 gap-5 text-[#11448A]">
        <div className="stories flex flex-col lg:flex-row gap-5 w-full items-center justify-between">
          <div className="story-card bg-blue-200 p-5 rounded-xl lg:w-[30%] w-[70%] flex items-center justify-center flex-col gap-5">
            <img src={story1} alt="storycard" className='lg:w-80 w-100 rounded-lg' />
            <p className='md:text-lg text-sm font-bold'>Steps to Download Apna Mart App and Order Groceries Online in Ranchi</p>
          </div>
          <div className="story-card bg-blue-200 p-5 rounded-xl lg:w-[30%] w-[70%] flex items-center justify-center flex-col gap-5">
            <img src={story2} alt="storycard" className='lg:w-80 w-100 rounded-lg' />
            <p className='md:text-lg text-sm font-bold'>Online Grocery Delivery in Ranchi: Get Daily Essentials at Your Doorstep 15 min</p>
          </div>
          <div className="story-card bg-blue-200 p-5 rounded-xl lg:w-[30%] w-[70%] flex items-center justify-center flex-col gap-5">
            <img src={story3} alt="storycard" className='lg:w-80 w-100 rounded-lg' />
            <p className='md:text-lg text-sm font-bold'>Apna Mart Brings 15 minutes Ultra Fast Grocery Delivery in Jamshedpur</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='px-[8%] py-10 flex flex-col gap-5'>
      <h1 className='md:text-5xl text-2xl text-[#11448A] font-bold'>We like to write about <br /> stuff! Glad you’re here <br /> to read to it!</h1>
      <p className='md:text-2xl text-xl font-semibold'>Latest Articles</p>
      <div className="articles">
        <Stories />
      </div>
    </div>
  )
}

export default Blog
