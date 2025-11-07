import React from 'react'
import './Header.css'

const Header = () => {
  const baseUrl = import.meta.env.BASE_URL
  
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-main-container">
          <img 
            src={`${baseUrl}img/logo_jornadas.png`}
            alt="Logo Jornadas de Fisioterapia 2026" 
            className="logo-main"
          />
        </div>
        <h1 className="header-title">Pósters - Jornadas de Fisioterapia 2026</h1>
        <div className="logos-institutional">
          <img 
            src={`${baseUrl}img/logo_fibiohrc.jpg`}
            alt="Logo FIBIOHRC" 
            className="logo-institutional"
          />
          <img 
            src={`${baseUrl}img/logo_huryc.jpg`}
            alt="Logo Hospital Universitario Ramón y Cajal" 
            className="logo-institutional"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
