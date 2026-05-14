import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartItems } from '../features/cart/CartSlice'
import Navbar from './Navbar'
import { categories } from '../data/products'

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const isInCart = (plantId) => cartItems.some(item => item.id === plantId)

  return (
    <div className="product-page">
      <Navbar />
      <div className="product-container">
        <h1 className="product-title">Nuestras Plantas</h1>
        {categories.map((category) => (
          <section key={category.id} className="category-section">
            <div className="category-header">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <div className="plant-grid">
              {category.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <div className="plant-image-container">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-price">${plant.price.toFixed(2)}</p>
                    <button
                      className={`add-to-cart-btn ${isInCart(plant.id) ? 'added' : ''}`}
                      onClick={() => dispatch(addToCart(plant))}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? 'Agregado' : 'Agregar al Carrito'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default ProductList
