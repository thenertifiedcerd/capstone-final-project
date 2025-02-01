import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername, doctorData, setDoctorData, appointmentData, setAppointmentData }}>
      {children}
    </UserContext.Provider>
  );
};