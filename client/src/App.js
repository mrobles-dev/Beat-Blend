import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from './components/HomePage/HomePage';
// import LoginPage from './components/LoginPage/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
