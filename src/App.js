import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Components/contexts/UserContext'
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import Landingpage from './Components/Landing_Page/Landingpage';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout'; // Updated path for ReportForm
import ProfileCard from './Components/ProfileCard/ProfileCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
         <Navbar />
         <Notification>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/instantconsultation" element={<InstantConsultation />} />
          <Route path="/searchdoctors" element={<InstantConsultation />} />
          <Route path="/reviews" element={<ReviewForm />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/reports" element={<ReportsLayout />} />
          <Route path="/profile" element={<ProfileCard />} /> {/* Ensure this route exists */}
        </Routes>
        </Notification>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App