import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ setShowLogin, isLoggedIn, setIsLoggedIn }) => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            {/* 1. Logo should be outside the <ul> and link to Home */}
            <Link to='/' onClick={() => setMenu("home")} style={{ textDecoration: 'none' }}>
                <h1 className='logo'>Quizzard</h1>
            </Link>

            <ul className="navbar-menu">
                {/* 2. Simplified Home Link */}
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
                    <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                </li>
                
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
                    <Link to='/menu' style={{ textDecoration: 'none', color: 'inherit' }}>Menu</Link>
                </li>
                
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
                    Contact us
                </li>
                
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