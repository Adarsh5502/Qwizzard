import React, { useState } from 'react'
import './LoginPopup.css'
import { useAuth } from '../../hooks/AuthContext'

const LoginPopup = () => {
  const { setShowLogin, setIsLoggedIn } = useAuth();
  const [currState, setCurrState] = useState("Login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onLogin = (event) => {
    event.preventDefault(); 

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const fixedEmail = "welcome@123.com"
    const fixedPassword = "welcome123"

    if (email === fixedEmail && password === fixedPassword) {
      alert("Login successful!");
      setIsLoggedIn(true); 
      setShowLogin(false); 
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className='login-popup'>
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

        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")} style={{color:'orange', cursor:'pointer'}}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")} style={{color:'orange', cursor:'pointer'}}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
