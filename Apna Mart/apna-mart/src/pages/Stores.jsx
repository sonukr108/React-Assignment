import React from 'react'
import ApnaMartImg from '../assets/default_store.webp'
import Direction from '../assets/directionIcon.svg'
import { Link } from 'react-router-dom'
const Stores = () => {
  const locations = [
    {
      name: 'Apna Mart, Gola Ramgrah',
      address: 'Hotel PNR Residency, Rajrappa more, Gola, Ramgarh, Jharkhand - 829110',
      hours: '7:00 AM to 9:00 PM',
    },
    {
      name: 'Apna Mart, Ranchi',
      address: 'Main Road, Near Kanke, Ranchi, Jharkhand - 834001',
      hours: '8:00 AM to 10:00 PM',
    },
    {
      name: 'Apna Mart, Hazaribagh',
      address: 'Market Road, Hazaribagh, Jharkhand - 825301',
      hours: '9:00 AM to 8:00 PM',
    },
    {
      name: 'Apna Mart, Dhanbad',
      address: 'Saraidhela, Near IIT Dhanbad, Jharkhand - 826001',
      hours: '8:00 AM to 9:00 PM',
    },
    {
      name: 'Apna Mart, Bokaro',
      address: 'Sector 4, Near City Centre, Bokaro, Jharkhand - 827004',
      hours: '7:30 AM to 9:30 PM',
    },
    {
      name: 'Apna Mart, Jamshedpur',
      address: 'Bistupur Main Road, Jamshedpur, Jharkhand - 831001',
      hours: '9:00 AM to 10:00 PM',
    },
    {
      name: 'Apna Mart, Deoghar',
      address: 'Tower Chowk, Near Baidyanath Temple, Deoghar, Jharkhand - 814112',
      hours: '8:00 AM to 9:00 PM',
    },
    {
      name: 'Apna Mart, Giridih',
      address: 'Station Road, Giridih, Jharkhand - 815301',
      hours: '7:00 AM to 8:00 PM',
    },
    {
      name: 'Apna Mart, Dumka',
      address: 'Jama Masjid Road, Dumka, Jharkhand - 814101',
      hours: '8:30 AM to 9:00 PM',
    },
    {
      name: 'Apna Mart, Chaibasa',
      address: 'Tata Road, Near Bus Stand, Chaibasa, Jharkhand - 833201',
      hours: '7:00 AM to 8:30 PM',
    },
    {
      name: 'Apna Mart, Medininagar',
      address: 'Daltonganj, Near Red Cross Building, Medininagar, Jharkhand - 822101',
      hours: '9:00 AM to 9:00 PM',
    },
    {
      name: 'Apna Mart, Latehar',
      address: 'Main Market, Latehar, Jharkhand - 829206',
      hours: '8:00 AM to 8:30 PM',
    },
    {
      name: 'Apna Mart, Simdega',
      address: 'Church Road, Simdega, Jharkhand - 835223',
      hours: '7:30 AM to 8:30 PM',
    },
    {
      name: 'Apna Mart, Khunti',
      address: 'Main Chowk, Khunti, Jharkhand - 835210',
      hours: '8:00 AM to 9:00 PM',
    },
    {
      name: 'Apna Mart, Lohardaga',
      address: 'Sadar Bazaar, Lohardaga, Jharkhand - 835302',
      hours: '7:00 AM to 9:00 PM',
    },
  ];

  const StoreCard = ({ location }) => {
    return (
      <div className="store-card flex md:gap-5 gap-1 w-full md:h-60 h-60 rounded-2xl bg-white border-1 border-gray-400">
        <img className='h-60 w-55 hidden md:flex rounded-tl-2xl rounded-bl-2xl' src={ApnaMartImg} alt="apna mert img" />
        <div className="card-info flex flex-col gap-4 p-3 xl:p-4">
          <h2 className='md:text-2xl text-xl'>{location.name}</h2>
          <p className='text-gray-400'>{location.address}</p>
          <p className='text-gray-800'>{location.hours}</p>
          <div className="btns text-[#11448A] md:text-lg text-sm font-semibold flex gap-5">
            <button className='md:py-2 md:px-4 py-1 px-2 rounded-lg border-1 border-gray-500'><Link to='/stores'>Store Details</Link></button>
            <button className='md:py-2 md:px-4 py-1 px-2 rounded-lg bg-blue-100 flex items-center gap-3'><Link to='/stores'>Get Directions</Link><img src={Direction} alt="" /></button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='px-[8%] py-4 flex w-full justify-between gap-5 bg-gray-100'>
      <div className="store-list w-full flex flex-col gap-5">
        {locations.map((location, index) => (
          <StoreCard key={index} location={location} />
        ))}
      </div>
      <div className="map w-[40%]  border sticky top-24 rounded-xl h-[80vh] overflow-hidden hidden lg:flex">
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d466883.36658222124!2d85.43818091911714!3d23.906410547061032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sapna%20mart!5e0!3m2!1sen!2sin!4v1743188855971!5m2!1sen!2sin" ></iframe>
      </div>

    </div>
  )
}

export default Stores



