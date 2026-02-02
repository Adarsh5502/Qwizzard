import React from 'react'
import { useNavigate } from 'react-router-dom' // Import the navigation hook
import './Header.css'

const Header = () => {
  const navigate = useNavigate(); // Initialize the hook

  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Let's Quiz</h2>
            <p>Challenge yourself and master new skills. Pick a category and start your journey today!</p>
            
            {/* Change the path to '/menu' to take them to the category list */}
            <button onClick={() => navigate('/menu')}>View Quiz</button>
        </div>
    </div>
  )
}

export default Header