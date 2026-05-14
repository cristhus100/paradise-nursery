import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  selectCartItems,
  selectCartTotal,
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from '../features/cart/CartSlice'
import Navbar from './Navbar'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  // Elimina un articulo del carrito por su nombre
  const handleRemove = (item) => {
    dispatch(removeItem(item.name))
  }

  // Muestra mensaje de pago proximamente
  const handleCheckout = () => {
    alert('Proximamente disponible')
  }

  // Estado vacio: muestra mensaje y enlace para seguir comprando
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

  // Calcula total dinamicamente con Redux selectors
  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        <h1>Tu Carrito de Compras</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Miniatura de la planta */}
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              {/* Detalles: nombre y precio unitario */}
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                {/* Controles de cantidad */}
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
              {/* Total por articulo y boton eliminar */}
              <div className="cart-item-total-section">
                <p className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Resumen del carrito */}
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
              onClick={handleCheckout}
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
