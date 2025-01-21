import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import Landingpage from './Components/Landing_Page/Landingpage';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
            <Route path='/' element={<Landingpage />} /> />
            <Route path='/signup' element={<Sign_Up />} />
            <Route path='/login' element={<Login />} />
            <Route path='/appointments' element={<FindDoctorSearch />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;