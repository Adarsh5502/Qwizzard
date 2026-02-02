import React, { useState } from 'react'
import './LoginPopup.css'

const LoginPopup = ({ setShowLogin, setIsLoggedIn }) => {
  const [currState, setCurrState] = useState("Login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onLogin = (event) => {
    event.preventDefault(); 

    // Manual check instead of browser popups
    if (!email || !password) {
      console.log("Fields are empty"); // No alert, just silent or console log
      return;
    }

    const fixedEmail = "welcom123.com"
    const fixedPassword = "welcome123"

    if (email === fixedEmail && password === fixedPassword) {
      setIsLoggedIn(true); 
      setShowLogin(false); 
    } else {
      console.log("Invalid credentials");
    }
  }

  return (
    <div className='login-popup'>
      {/* noValidate stops the browser from showing 'Please fill out this field' */}
      <form noValidate onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <span onClick={() => setShowLogin(false)} style={{cursor:'pointer'}}>X</span>
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input type="text" placeholder='Your name' />}
          
          <input 
            type="email" 
            placeholder='Your email' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />
          <input 
            type="password" 
            placeholder='Password' 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        
        {/* <div className="login-popup-condition">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div> */}
        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")} style={{color:'orange', cursor:'pointer'}}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")} style={{color:'orange', cursor:'pointer'}}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup