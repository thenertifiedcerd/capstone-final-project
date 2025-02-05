import './Notification.css';
import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useUser } from '../contexts/UserContext';

const Notification = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn, username, setUsername, doctorData, setDoctorData, appointmentData, setAppointmentData } = useUser();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, [setIsLoggedIn, setUsername, setDoctorData, setAppointmentData]);

  return (
    <div>
      <Navbar />
      {children}
      {isLoggedIn && appointmentData && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p className="appointment-card__message">
              <strong>Doctor:</strong> {doctorData?.name}
              <strong>Specialty:</strong> {doctorData?.specialty}
              <strong>Phone:</strong> {doctorData?.phone}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;