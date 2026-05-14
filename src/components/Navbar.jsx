import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItemCount } from '../features/cart/CartSlice'

function Navbar() {
  const itemCount = useSelector(selectCartItemCount)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Paradise Nursery
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/products" className="nav-link">Plantas</Link>
          <Link to="/about" className="nav-link">Nosotros</Link>
          <Link to="/cart" className="nav-link cart-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cart-icon"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {itemCount >= 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
