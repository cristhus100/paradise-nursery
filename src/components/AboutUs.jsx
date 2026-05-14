import React from 'react'
import Navbar from './Navbar'

function AboutUs() {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-container">
        <h1>Sobre Paradise Nursery</h1>
        <div className="about-content">
          <section className="about-section">
            <h2>Nuestra Historia</h2>
            <p>
              Paradise Nursery nacio de la pasion por las plantas y el deseo de llevar la naturaleza
              a los hogares de las personas. Fundada en 2020, nuestra mision es ofrecer plantas de
              la mas alta calidad y ayudar a nuestros clientes a crear sus propios oasis verdes en casa.
            </p>
          </section>
          <section className="about-section">
            <h2>Nuestra Mision</h2>
            <p>
              En Paradise Nursery, creemos que las plantas tienen el poder de transformar espacios y
              mejorar la calidad de vida. Nos dedicamos a proporcionar plantas saludables, consejos
              de cuidado expertos y un servicio al cliente excepcional. Queremos hacer que el mundo
              sea un lugar mas verde, una planta a la vez.
            </p>
          </section>
          <section className="about-section">
            <h2>Por que Elegirnos</h2>
            <ul>
              <li>Plantas cuidadosamente seleccionadas de los mejores viveros</li>
              <li>Envío seguro con garantía de llegada en perfectas condiciones</li>
              <li>Consejos personalizados de cuidado para cada planta</li>
              <li>Precios competitivos y ofertas especiales</li>
              <li>Atencion al cliente dedicada</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
