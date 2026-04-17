import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/construction-website/logo.png"alt="Logo" />
              <h3>BLUE PEAK</h3>
            </div>
            <p>Building dreams with quality, integrity and innovation since 1999. Your trusted construction partner.</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">f</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">ig</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">in</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">▶</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Residential Construction</a></li>
              <li><a href="#services">Commercial Projects</a></li>
              <li><a href="#services">Renovation</a></li>
              <li><a href="#services">Interior Design</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>📍 123 Construction St, Madurai, TN 625001</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@bluepeakinfra.com</li>
              <li>🕒 Mon - Sat: 9AM - 6PM</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 BLUE PEAK INFRA & CONSTRUCTIONS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;