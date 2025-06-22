import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    const onSignupForm = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        const userDetails = { username, name, password, location };
        console.log("Sending user details:", userDetails);

        try {
            const response = await fetch('https://srinivas-medication-management-api.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            });

            const data = await response.json();

            if (response.ok) {
                alert("User registered successfully!");
                setUsername('');
                setName('');
                setPassword('');
                setLocation('');
                navigate('/login');
            } else {
                setErrorMsg(data.error || "Registration failed");
            }
        } catch (error) {
            console.error("Signup Error:", error.message);
            setErrorMsg("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="signup-page-container">
            <div className="signup-page-card">
                <h2 className="signup-page-heading">Create Account</h2>
                <p className="signup-page-suggestion">
                    Already have an account? <a href="/login" className="text-link">Login</a>
                </p>
                <form className="form-container" onSubmit={onSignupForm}>
                    <div className="label-input-container">
                        <label className="label-element">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="input-element" placeholder="Enter name" />
                    </div>
                    <div className="label-input-container">
                        <label className="label-element">Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="input-element" placeholder="Enter username" />
                    </div>
                    <div className="label-input-container">
                        <label className="label-element">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input-element" placeholder="Enter password" />
                    </div>
                    <div className="label-input-container">
                        <label className="label-element">Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="input-element" placeholder="Enter location" />
                    </div>

                    <button type="submit" className="signup-button">Sign Up</button>
                    {errorMsg && <p className="error-message">{errorMsg}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
