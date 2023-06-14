import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from './components/HomePage/HomePage';
import RecordingPage from './components/HomePage/pages/Record/Record';
// import LoginPage from './components/LoginPage/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/record" element={<RecordingPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
