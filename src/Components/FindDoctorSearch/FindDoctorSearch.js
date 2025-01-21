import React, { useState, useRef } from 'react';
import './FindDoctorSearch.css';

const FindDoctorSearch = () => {
  const [specialty, setSpecialty] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setSpecialty(event.target.value);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = (event) => {
    // Check if the click is outside the input and suggestions list
    if (!inputRef.current.contains(event.relatedTarget)) {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="location-search-box" ref={inputRef}>
      <input
        type="text"
        value={specialty}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Enter doctor's specialty"
      />
      {showSuggestions && (
        <ul className="suggestions-list">
          {/* Replace with dynamic list of specialties */}
          <li>Cardiology</li>
          <li>Dermatology</li>
          <li>Neurology</li>
          <li>Obstetrics and Gynaecology (Ob/Gyn)</li>
          <li>General Physiology</li>
          <li>Geriatrics</li>
        </ul>
      )}
    </div>
  );
};

export default FindDoctorSearch;