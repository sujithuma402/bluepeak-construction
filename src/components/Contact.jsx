import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact Form:', formData)
    alert('Message sent successfully! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">Serving Tenkasi & Surrounding Areas</p>
        
        <div className="contact-content">
          
          <div className="contact-info">
            <h3>Build Your Dream Home in Tenkasi</h3>
            <p>Courtallam kaathu, Tenkasi ooru. Unga kanavu veeda naanga kattrom. Free consultation ku call pannunga.</p>
            
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h4>Office Address</h4>
                <p>Blue Peak Infra, Main Road, Tenkasi, Tamil Nadu 627811</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@bluepeakinfra.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">⏰</span>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon facebook">f</a>
                <a href="#" className="social-icon instagram">ig</a>
                <a href="#" className="social-icon linkedin">in</a>
                <a href="#" className="social-icon youtube">▶</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
              <textarea 
                name="message"
                placeholder="Tell us about your project..." 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>

        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62961.75596555615!2d77.24769265!3d8.9588374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c15ac547f7%3A0x9a7077e1425a9b21!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1728999999!5m2!1sen!2sin"
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Blue Peak Infra - Tenkasi Office"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Contact;