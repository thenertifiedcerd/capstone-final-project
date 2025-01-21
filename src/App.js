import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import Landingpage from './Components/Landing_Page/Landingpage';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          <Landingpage />
          {/* Set up the Routes for different pages */}
          <Routes>
            <Route path='/signup' element={<Sign_Up />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;