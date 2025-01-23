import React, { useState } from 'react';
import './sign_up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const initialFormState = {
        name: '',
        email: '',
        phone: '',
        password: '',
        role: '' // Add role to the initial form state
      };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // State for role
    const [showerr, setShowerr] = useState('');
    const [formData, setFormData] = useState(initialFormState);
    const navigate = useNavigate();

    const handleReset = () => {
        setFormData(initialFormState);
    };

 const register = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
                role: role,
            }),
        });

        const json = await response.json();

        if (response.ok) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("role", role);

            navigate("/");
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    } catch (error) {
        setShowerr("An error occurred: " + error.message);
    }
};

    return (
        <div className="container" style={{marginTop:'5%'}}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>  
                        <div className="form-group">
                            <h1>Sign Up</h1>
                            <label htmlFor="role">* Role</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)} name="role" id="role" className="form-control" required>
                                <option value="" disabled>Select your role</option>
                                <option value="admin">Doctor</option>
                                <option value="user">Patient</option>
                            </select>
                            <label htmlFor="email">* Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" required />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                            <label htmlFor="name">* Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" className="form-control" placeholder="Enter your full name" aria-describedby="helpId" required />
                            <label htmlFor="phone">* Phone number</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" required />
                            <label htmlFor="password">* Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" placeholder="Enter your new password" aria-describedby="helpId" required />
                
                            <div className="btn-group">
                                <button onClick={register} className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                                <button onClick={handleReset} className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_Up;