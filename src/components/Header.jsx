import React, { useState } from 'react'
import './Header.css'  

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/construction-website/logo.png" alt="Blue Peak Infra" className="logo-img" />
          <span className="logo-text">Blue Peak</span>
        </div>
        
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        
        <a href="#contact" className="btn-quote-header" onClick={closeMenu}>Get Quote</a>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header;