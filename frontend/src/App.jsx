import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Menu from './pages/Menu/Menu'
import Quiz from './components/Quiz/Quiz'
import Contact from './pages/Contact/Contact'
import { useAuth } from "./hooks/AuthContext";



const App = () => {
  const { showLogin } = useAuth();

  return (
    <>
      {/* Components below will access state internally via useAuth() */}
      {showLogin && <LoginPopup />}
      
      <div className='app'>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/play' element={<Quiz />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
