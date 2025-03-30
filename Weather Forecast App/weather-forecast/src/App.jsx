import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import WeatherDisplay from "./Pages/WeatherDisplay";
import Navbar from "./Components/Navbar";

import Sunrise from './assets/sunrise.svg'
import Sunset from './assets/sunset.svg'
import Weather from './assets/weather.svg'
import Humadity from './assets/humadity.svg'
import Wind from './assets/wind.svg'
import Pressure from './assets/pressure.svg'
import UV from './assets/uv.svg'

const App = () => {
  const cityInputRef = useRef(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    const city = cityInputRef.current.value;
    const apiKey = "44023e9516e944a0aa7145249252703";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      console.log(data)
      setWeather(data);
      setError(null);
    } catch (err) {
      setWeather(null);
      setError("City not found. Please try again.");
    }
  };

  const MainPart = () => {
    return (
      <div className="min-h-screen flex flex-col gap-5 items-center bg-gradient-to-br from-[#efd5ff] to-[#515ada] dark:from-[gray] dark:to-[black] p-[8%]">
        <input type="text" placeholder="Search our city..." className="border-2 border-gray-600 p-2 rounded-xl w-full bg-[url('../../public/search.svg')] bg-no-repeat bg-[8px_6px] pl-10 font-semibold focus:outline-none focus:border-gray-900 lg:w-[60%] lg:h-15 lg:bg-[15px_15px] lg:pl-12 lg:text-xl" />
        <button className="bg-blue-400 text-black py-2 px-4 font-semibold rounded-xl">Search</button>

        <div className="w-full flex flex-col gap-4 lg:flex-row">
          <div className="city w-full lg:w-[70%] flex flex-col gap-4 justify-between items-center p-[8%] lg:p-[3%] bg-gradient-to-tl from-[#efd5ff] to-[#515ada] rounded-2xl shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)]">
            <p className="text-3xl font-bold">Hazaribagh</p>
            <div className="temp flex flex-col items-center">
              <p className="text-5xl font-extrabold">09:05</p>
              <p className="text-xl">Saturday, 30 March</p>
            </div>
          </div>
          <div className="details w-full flex flex-col gap-4 justify-between items-center p-[8%] lg:p-[3%] bg-gradient-to-tl from-[#efd5ff] to-[#515ada] rounded-2xl shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)]  md:flex-row">
            <div className="temperature flex flex-col items-center justify-center gap-2 md:gap-4">
              <p className="text-5xl font-extrabold">24.5<sup>o</sup>C</p>
              <p className="text-xl font-semibold">Feels like : 24.5<sup>o</sup>C</p>
            </div>
            <div className="sun flex flex-col xl:flex-row gap-3 lg:gap-5">
              <div className="sunrise flex gap-3">
                <img src={Sunrise} alt="sunrise img" />
                <span className="flex flex-col">
                  <p className="text-2xl font-semibold">Sunrise</p>
                  <p className="text-xl">06:20 AM</p>
                </span>
              </div>
              <div className="sunset flex gap-3">
                <img src={Sunset} alt="sunset img" />
                <span className="flex flex-col">
                  <p className="text-2xl font-semibold">Sunset</p>
                  <p className="text-xl">05:30 PM</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="details-info w-full flex flex-col lg:flex-row gap-4 justify-between items-center p-[8%] lg:p-[2%] bg-gradient-to-tl from-[#efd5ff] to-[#515ada] rounded-2xl shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)]">
          <div className="sun-img flex flex-col items-center lg:gap-1">
            <img src={Weather} alt="weather img" className="h-30 lg:h-40 lg:w-50" />
            <p className="text-2xl font-bold">Sunny</p>
          </div>
          <div className="all-temp-cards w-full flex flex-wrap items-center gap-5 justify-evenly">
            <div className="temp-card flex flex-col items-center justify-center gap-1 lg:gap-3">
              <img src={Humadity} alt="humadity img" />
              <p className="font-bold lg:text-xl">41%</p>
              <p>Humadity</p>
            </div>
            <div className="temp-card flex flex-col items-center justify-center gap-1 lg:gap-3">
              <img src={Wind} alt="wind img" />
              <p className="font-bold lg:text-xl">2 km/h</p>
              <p>Wind Speed</p>
            </div>
            <div className="temp-card flex flex-col items-center justify-center gap-1 lg:gap-3">
              <img src={Pressure} alt="Preseure img" />
              <p className="font-bold lg:text-xl">997hPa</p>
              <p>Pressure</p>
            </div>
            <div className="temp-card flex flex-col items-center justify-center gap-1 lg:gap-3">
              <img src={UV} alt="uv img" />
              <p className="font-bold lg:text-xl">8</p>
              <p>UV</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      {/* <MainPart /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WeatherDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;