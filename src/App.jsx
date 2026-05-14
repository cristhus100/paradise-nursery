import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Paradise Nursery</h1>
        <p>Tu oasis de plantas en linea</p>
        <Link to="/products">
          <button className="start-button">Comenzar</button>
        </Link>
      </div>
    </div>
  )
}

export default App
