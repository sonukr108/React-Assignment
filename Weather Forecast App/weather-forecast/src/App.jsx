import React, { useState, useRef } from "react";
import Navbar from "./Components/Navbar";
const App = () => {
  const cityInputRef = useRef(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    const city = cityInputRef.current.value;
    const apiKey = "44023e9516e944a0aa7145249252703";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

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
      <div className="flex flex-col gap-5 items-center h-screen bg-gray-100 dark:bg-black p-4">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full text-center">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-4"
            placeholder="Enter city name"
            ref={cityInputRef}
          />
          <button
            className="w-full p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={getWeather}
          >
            Get Weather
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full text-center">
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {weather && (
            <div className="mt-4 bg-gray-50 text-left">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{weather.location.name}</h1>
                <p>{weather.location.localtime}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-4xl font-bold text-gray-800">{weather.current.temp_c}°C</h3>
                  <p className="text-gray-600 text-lg font-medium">{weather.current.condition.text}</p>
                </div>
                <img src={weather.current.condition.icon} alt="Weather Icon" className="w-16 h-16" />
              </div>
              <hr className="my-4" />
              <div className="text-gray-700 text-sm">
                <p><span className="font-semibold">RealFeel:</span> {weather.current.feelslike_c}°</p>
                <p><span className="font-semibold">Wind:</span> {weather.current.wind_kph} km/h</p>
                <p><span className="font-semibold">Wind Gusts:</span> {weather.current.gust_kph} km/h</p>
                <p><span className="font-semibold">Air Quality:</span> <span className="text-yellow-600 font-semibold">{weather.current.air_quality.pm2_5.toFixed(2)}</span></p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <MainPart />
    </>
  );
};

export default App;