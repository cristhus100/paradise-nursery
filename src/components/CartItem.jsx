import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  selectCartItems,
  selectCartTotal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from '../features/cart/CartSlice'
import Navbar from './Navbar'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Navbar />
        <div className="cart-empty">
          <h1>Tu Carrito esta Vacio</h1>
          <p>Agrega algunas plantas para empezar.</p>
          <Link to="/products">
            <button className="continue-shopping-btn">Continuar Comprando</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        <h1>Tu Carrito de Compras</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <div className="cart-item-controls">
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart-item-total-section">
                <p className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-total">
            <span>Total del Carrito:</span>
            <span className="total-amount">${cartTotal.toFixed(2)}</span>
          </div>
          <div className="cart-actions">
            <Link to="/products">
              <button className="continue-shopping-btn">
                Continuar Comprando
              </button>
            </Link>
            <button
              className="checkout-btn"
              onClick={() => alert('Proximamente disponible')}
            >
              Procesar Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
