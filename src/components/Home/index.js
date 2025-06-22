import Cookies from 'js-cookie'
import './index.css';
import { FaUser, FaUsers, FaRegHeart, FaSignOutAlt  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const jwtToken = Cookies.get("jwtToken");

    useEffect(() => {
        if (!jwtToken) {
            navigate("/login");
        }
    }, [jwtToken, navigate]);

    const onClickLogout = () => {
        Cookies.remove("jwtToken"); //Remove the jwtToken from js-cookie
        navigate("/login"); //Redirect to Login Route
    }

    return (
        <div className="home-wrapper">
            <button className="logout-button" onClick={onClickLogout} title="Logout">
                <FaSignOutAlt className="logout-icon" />
            </button>

            <div className="home-container">
                <div className="home-header">
                    <div className="home-logo">
                        <FaRegHeart className="logo-icon" />
                    </div>
                    <h1 className="home-title">Welcome to MediCare Companion</h1>
                    <p className="home-description">
                        Your trusted partner in medication management. Choose your role to get started with personalized features.
                    </p>
                </div>

                <div className="card-grid">
                    {/* Patient Card */}
                    <div className="card patient-card">
                        <div className="card-header">
                            <div className="card-icon patient-icon">
                                <FaUser className="icon bg-user-icon" />
                            </div>
                            <h2 className="card-title">I'm a Patient</h2>
                            <p className="card-subtitle">Track your medication schedule and maintain your health records</p>
                        </div>
                        <div className="card-content">
                            <ul className="card-list">
                                <li><span className="dot blue"></span> Mark medications as taken</li>
                                <li><span className="dot blue"></span> Upload proof photos (optional)</li>
                                <li><span className="dot blue"></span> View your medication calendar</li>
                                <li><span className="dot blue"></span> Large, easy-to-use interface</li>
                            </ul>
                            <button className="card-button patient-btn">Continue as Patient</button>
                        </div>
                    </div>

                    {/* Caretaker Card */}
                    <div className="card caretaker-card">
                        <div className="card-header">
                            <div className="card-icon caretaker-icon">
                                <FaUsers className="icon bg-users-icon" />
                            </div>
                            <h2 className="card-title">I'm a Caretaker</h2>
                            <p className="card-subtitle">Monitor and support your loved one's medication adherence</p>
                        </div>
                        <div className="card-content">
                            <ul className="card-list">
                                <li><span className="dot green"></span> Monitor medication compliance</li>
                                <li><span className="dot green"></span> Set up notification preferences</li>
                                <li><span className="dot green"></span> View detailed reports</li>
                                <li><span className="dot green"></span> Receive email alerts</li>
                            </ul>
                            <button className="card-button caretaker-btn">Continue as Caretaker</button>
                        </div>
                    </div>
                </div>

                <div className="switch-info">
                    <p>You can switch between roles anytime after setup</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
