import React, { useState } from 'react'
import './Navbar.css'

// Add isLoggedIn and setIsLoggedIn to the props
const Navbar = ({ setShowLogin, isLoggedIn, setIsLoggedIn }) => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <h1 className='logo'>Quizzard</h1>

            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</li>
                
                {/* Only show this link if the user is NOT logged in */}
                {!isLoggedIn && (
                    <li onClick={() => { setMenu("signup/login"); setShowLogin(true); }} 
                        className={menu === "signup/login" ? "active" : ""}>
                        Signup/Login
                    </li>
                )}
            </ul>

            <div className="navbar-right">
                <div className="navbar-search-icon">
                    <input type="text" placeholder="Search quizzes..." />
                </div>

                {/* Conditional Rendering: Show Logout if logged in, otherwise show Sign In */}
                {isLoggedIn ? (
                    <div className='navbar-profile'>
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    </div>
                ) : (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                )}
            </div>
        </div>
    )
}

export default Navbar