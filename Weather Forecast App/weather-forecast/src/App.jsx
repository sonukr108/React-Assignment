import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import WeatherDisplay from "./Pages/WeatherDisplay";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-[#efd5ff] to-[#515ada] dark:from-[gray] dark:to-[black] dark:text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<WeatherDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;