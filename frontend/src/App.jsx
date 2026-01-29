import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Menu from './pages/Menu/Menu'

const App = () => {
  // 1. Keep showLogin as false so the site starts on the Home page
  const [showLogin, setShowLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      {/* 2. The Popup sits on top of everything if showLogin is true */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />}
      
      <div className='app'>
        {/* 3. Pass setShowLogin to Navbar so the button can open the popup */}
        <Navbar setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App