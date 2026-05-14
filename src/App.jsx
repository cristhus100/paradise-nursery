import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()
  const [started, setStarted] = useState(false)

  const handleStart = () => {
    setStarted(true)
    navigate('/products')
  }

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Tu oasis de plantas en linea</p>
        <button className="start-button" onClick={handleStart}>
          Comenzar
        </button>
      </div>
    </div>
  )
}

export default App
