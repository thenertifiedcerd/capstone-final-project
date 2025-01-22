import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    phoneNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Patient's Name"
        required
      /><br />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="phone"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder='Phone number'
        required
      /><br />
      <label htmlFor="date">Appointment Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Appointment Date"
        required
      /><br />
      <label htmlFor="time">Time of Appointment</label>
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        placeholder="Appointment Time"
        required
      />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;