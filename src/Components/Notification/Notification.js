import './Notification.css';
import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useUser } from '../contexts/UserContext';

const Notification = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn, username, setUsername, doctorData, setDoctorData, appointmentData, setAppointmentData } = useUser();

  useEffect(() => {
    try {
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
    } catch (error) {
      console.error("Error retrieving data from storage:", error);
    }
  }, [setIsLoggedIn, setUsername, setDoctorData, setAppointmentData]);

  return (
    <div>
      <Navbar />
      {children}
      {isLoggedIn && appointmentData && (
  <>
    <div className="appointment-card">
      <div className="appointment-card__content">
        <h3 className="appointment-card__title">Appointment Details</h3>
        <p className="appointment-card__message">
          <strong>Doctor:</strong> {doctorData?.name || 'N/A'}
        </p>
        <p className="appointment-card__message">
          <strong>Speciality:</strong> {doctorData?.speciality || 'N/A'}
        </p>
        {appointmentData.map(appointment => (
          <div key={appointment.id}>
            <p className="appointment-card__message">
              <strong>Name:</strong> {appointment.name || 'N/A'}
            </p>
            <p className="appointment-card__message">
              <strong>Phone Number:</strong> {appointment.phoneNumber || 'N/A'}
            </p>
            <p className="appointment-card__message">
              <strong>Date of Appointment:</strong> {appointment.date || 'N/A'}
            </p>
            <p className="appointment-card__message">
              <strong>Time Slot:</strong> {appointment.time || 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  </>
)}
    </div>
  );
};

export default Notification;