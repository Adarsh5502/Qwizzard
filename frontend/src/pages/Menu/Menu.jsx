import React from 'react'
import './Menu.css'

const Menu = () => {
  const categories = [
    { id: 1, name: "Javascript", icon: "", color: "#f7df1e" },
    { id: 2, name: "React JS", icon: "", color: "#61dafb" },
    { id: 3, name: "General Science", icon: "", color: "#4caf50" },
    { id: 4, name: "Geography", icon: "", color: "#ff9800" }
  ];

  return (
    <div className='menu-page'>
      <h1>Select a Category</h1>
      <div className="menu-list">
        {categories.map((item) => (
          <div key={item.id} className="menu-card" style={{ borderBottom: `5px solid ${item.color}` }}>
            <span className="menu-icon">{item.icon}</span>
            <h3>{item.name}</h3>
            <button className='start-btn'>Start Quiz</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu  