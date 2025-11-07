import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PosterGrid from './components/PosterGrid'
import Footer from './components/Footer'
import { posters } from './data/posters'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos', icon: '📚' },
    { id: 'research', name: 'Investigación Clínica', icon: '🔬' },
    { id: 'pelvic', name: 'Fisioterapia Uroginecológica', icon: '💪' },
    { id: 'advanced', name: 'Técnicas Avanzadas', icon: '⚡' },
  ]

  const filteredPosters = selectedCategory === 'all' 
    ? posters 
    : posters.filter(p => p.category === selectedCategory)

  return (
    <div className="app">
      <Header />
      
      <main className="main-container">
        <section className="welcome-section">
          <h2>Bienvenidos</h2>
          <p>
            Repositorio oficial de los pósters presentados en las <strong>Jornadas de Fisioterapia 2026</strong>.
            <br />
            Explora los trabajos organizados por temática haciendo clic en las categorías.
          </p>
        </section>

        <section className="categories-section">
          <div className="categories-filter">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="category-icon">{cat.icon}</span>
                <span className="category-name">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        <PosterGrid posters={filteredPosters} />

        <section className="info-section">
          <h2>📄 Información Adicional</h2>
          <p>Para más información sobre las jornadas, contacta con los organizadores.</p>
        </section>

        <section className="copyright-section">
          <h2>⚖️ Derechos de Autor y Propiedad Intelectual</h2>
          <p>
            Los pósters y materiales presentados en estas jornadas son propiedad intelectual de sus respectivos autores. 
            Todos los derechos están reservados.
          </p>
          
          <div className="copyright-columns">
            <div className="copyright-column">
              <h3>Uso permitido</h3>
              <ul>
                <li>Visualización y consulta con fines educativos y de formación profesional</li>
                <li>Citación académica con la debida atribución a los autores</li>
              </ul>
            </div>
            
            <div className="copyright-column">
              <h3>Uso NO permitido sin autorización expresa</h3>
              <ul>
                <li>Reproducción total o parcial de los contenidos</li>
                <li>Distribución comercial o fuera del ámbito académico-sanitario</li>
                <li>Modificación o alteración de los trabajos presentados</li>
              </ul>
            </div>
          </div>

          <p className="copyright-contact">
            Para solicitar permisos de uso o reproducción, por favor contacta directamente con los autores 
            o con la organización de las jornadas.
          </p>

          <div className="citation-box">
            <strong>Cita recomendada:</strong>
            <br />
            Autor(es). (2026). <em>Título del póster</em>. Presentado en las Jornadas de Fisioterapia 2026, 
            Hospital Universitario Ramón y Cajal, Madrid.
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
