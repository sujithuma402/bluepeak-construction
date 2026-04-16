import React, { useState } from 'react'
import './Hero.css'

function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    location: 'Tenkasi'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', phone: '', projectType: '', location: 'Tenkasi' })
  }

  return (
    <section className="hero" id="home" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/construction-website/hero-bg.png)`}}>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Build Your Future with <span>Confidence</span></h1>
          <p>Premium construction materials with guaranteed quality checks, price protection, and 24/7 project tracking.</p>
        </div>

        <div className="hero-form-card">
          <h3>Talk to Our Expert</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <div className="phone-input">
              <span>🇮🇳 +91-</span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <label>Project Type</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Institutional">Institutional</option>
              <option value="Renovation">Renovation</option>
            </select>

            <label>Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="Tenkasi">Tenkasi</option>
              <option value="Courtallam">Courtallam</option>
              <option value="Shenkottai">Shenkottai</option>
              <option value="Kadayanallur">Kadayanallur</option>
              <option value="Surandai">Surandai</option>
            </select>

            <button type="submit" className="btn-book-consultation">
              Book Free Consultation <span></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero;