import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
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
            
            {/* Define individual Route components for different pages */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;