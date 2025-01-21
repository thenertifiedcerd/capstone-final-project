// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './sign_up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

// Function component for Sign Up form
const Sign_Up = () => {
    const initialFormState = {
        name: '',
        email: '',
        phone: '',
        password: ''
      };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const [formData, setFormData] = useState(initialFormState); // Saves form state
    const navigate = useNavigate(); // Navigation hook from react-router

      const handleReset = () => {
            setFormData(initialFormState);
        };

    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // API Call to register user
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
            }),
        });

        const json = await response.json(); // Parse the response JSON

  

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    // JSX to render the Sign Up form
    return (
        <div className="container" style={{marginTop:'5%'}}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>  
                        <div className="form-group">
                            <h1>Sign Up</h1>
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
                        {/* Apply similar logic for other form elements like name, phone, and password to capture user information */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_Up; // Export the Sign_Up component for use in other components