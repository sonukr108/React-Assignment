import React, { useState, useRef, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import Sunrise from '../assets/sunrise.svg';
import Sunset from '../assets/sunset.svg';
import Humadity from '../assets/humadity.svg';
import Wind from '../assets/wind.svg';
import Pressure from '../assets/pressure.svg';
import UV from '../assets/uv.svg';

function WeatherDisplay() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const cityInputRef = useRef(null);
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);

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
            setWeather(data);
            setError(null);
        } catch (err) {
            setWeather(null);
            setError("City not found. Please try again.");
        }
    };

    useEffect(() => {
        if (weather && weather.location && weather.location.localtime) {
            // Replace with actual sunrise/sunset logic
            setSunrise("5:42 AM");
            setSunset("6:03 PM");
        }
    }, [weather]);

    return (
        <div className="min-h-screen flex flex-col gap-5 items-center px-[8%] py-[5%]">
            <FiSearch />
            <input
                type="text"
                ref={cityInputRef}
                placeholder="Search our city..."
                className="border-2 border-gray-600 dark:border-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white p-2 rounded-xl w-full bg-[url('../../public/search.svg')] bg-no-repeat bg-[8px_6px] pl-10 font-semibold  lg:w-[60%] lg:h-15 lg:bg-[15px_15px] lg:pl-12 lg:text-xl"
            />
            <button
                className="bg-blue-400 text-black py-2 px-4 font-semibold rounded-bl-xl rounded-tr-xl shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] hover:bg-blue-700 hover:text-white cursor-pointer transition-all duration-300"
                onClick={getWeather}
            >
                Search
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {weather && (
                <div className="w-full flex flex-col gap-4 lg:flex-row">
                    <div className="city w-full lg:w-[70%] flex flex-col gap-4 justify-between items-center p-[8%] lg:p-[3%] bg-gradient-to-tl from-[#efd5ff] to-[#515ada]  dark:from-[gray] dark:to-[black] dark:border-1 dark:border-white rounded-2xl shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)]">
                        <p className="text-3xl font-bold">{weather.location.name}</p>
                        <div className="temp flex flex-col items-center">
                            <p className="text-5xl font-extrabold">
                                {new Date(weather.location.localtime).getHours().toString().padStart(2, '0')}:
                                {new Date(weather.location.localtime).getMinutes().toString().padStart(2, '0')}
                            </p>
                            <p className="text-xl">
                                {new Date(weather.location.localtime).toLocaleDateString(undefined, {
                                    weekday: 'long',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                        </div>
                    </div>
                    <div className="details w-full flex flex-col gap-4 justify-between items-center p-[8%] lg:p-[3%] bg-gradient-to-tl from-[#efd5ff] to-[#515ada]  dark:from-[gray] dark:to-[black] dark:border-1 dark:border-white rounded-2xl shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] md:flex-row">
                        <div className="temperature flex flex-col items-center justify-center gap-2 md:gap-4">
                            <p className="text-5xl font-extrabold">{weather.current.temp_c}<sup>o</sup>C</p>
                            <p className="text-xl font-semibold">Feels like : {weather.current.feelslike_c}<sup>o</sup>C</p>
                        </div>
                        <div className="sun flex flex-col xl:flex-row gap-3 lg:gap-5">
                            <div className="sunrise flex gap-3">
                                <img src={Sunrise} alt="sunrise img" className='dark:invert'/>
                                <span className="flex flex-col">
                                    <p className="text-2xl font-semibold">Sunrise</p>
                                    <p className="text-xl">{sunrise}</p>
                                </span>
                            </div>
                            <div className="sunset flex gap-3">
                                <img src={Sunset} alt="sunset img" className='dark:invert'/>
                                <span className="flex flex-col">
                                    <p className="text-2xl font-semibold">Sunset</p>
                                    <p className="text-xl">{sunset}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {weather && (
                <div className="details-info w-full flex flex-col lg:flex-row gap-4 justify-between items-center p-[8%] lg:p-[2%] bg-gradient-to-tl from-[#efd5ff] to-[#515ada]  dark:from-[gray] dark:to-[black] dark:border-1 dark:border-white rounded-2xl shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)]">
                    <div className="sun-img flex flex-col items-center lg:gap-1">
                        <img src={`https:${weather.current.condition.icon}`} alt="weather img" className="h-30 lg:h-40 lg:w-50" />
                        <p className="text-2xl font-bold">{weather.current.condition.text}</p>
                    </div>
                    <div className="all-temp-cards w-full flex flex-wrap items-center gap-5 justify-evenly">
                        <div className="temp-card flex flex-col items-center justify-center gap-1 lg:gap-3">
                            <img src={Humadity} alt="humadity img" className='dark:invert'/>
                            <p className="font-bold lg:text-xl">{weather.current.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                        <div className="temp-card flex flex-col items-center justify-center gap-1 lg:gap-3">
                            <img src={Wind} alt="wind img" className='dark:invert'/>
                            <p className="font-bold lg:text-xl">{weather.current.wind_kph} km/h</p>
                            <p>Wind Speed</p>
                        </div>
                        <div className="temp-card flex flex-col items-center justify-center gap-1 lg:gap-3">
                            <img src={Pressure} alt="pressure img" className='dark:invert'/>
                            <p className="font-bold lg:text-xl">{weather.current.pressure_mb} hPa</p>
                            <p>Pressure</p>
                        </div>
                        <div className="temp-card flex flex-col items-center justify-center gap-1 lg:gap-3">
                            <img src={UV} alt="uv img" className='dark:invert'/>
                            <p className="font-bold lg:text-xl">{weather.current.uv}</p>
                            <p>UV</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeatherDisplay;