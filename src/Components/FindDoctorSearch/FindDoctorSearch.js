import React, { useState, useRef, useEffect } from 'react';
import './FindDoctorSearch.css';
import { useNavigate,  Navigate } from 'react-router-dom';


const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ENT) Specialist', 'Homeopath', 'Geriatrics'
]

const FindDoctorSearch = ({ onSpecialitySelect }) => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instantconsultation?speciality=${speciality}`);
        window.location.reload();
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className='finddoctor' style={{paddingTop:'100px'}}>
        <center>
            <div>
                <h1>Find a Doctor</h1>
            </div>
            <div>
                <i style={{ color: '#000000', fontSize: '10rem' }} className="fa fa-user-md"></i>
            </div>
            <div className="home-search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="doctor-search-box" ref={searchRef}>
                    <input 
                        type="text" 
                        className="search-doctor-input-box" 
                        placeholder="Search doctors, clinics, hospitals, etc." 
                        onFocus={() => setDoctorResultHidden(false)} 
                        value={searchDoctor} 
                        onChange={(e) => setSearchDoctor(e.target.value)} 
                    />
                    <div className="findiconimg">
                        <img className='findIcon' src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" />
                    </div>
                    <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                        {specialities.map(speciality => (
                            <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                <span>
                                    <img src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" style={{ height: "10px", width: "10px" }} width="12" />
                                </span>
                                <span>{speciality}</span>
                                <span>SPECIALITY</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </center>
    </div>
)
}

export default FindDoctorSearch