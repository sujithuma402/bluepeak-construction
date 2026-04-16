import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="tagline">WHO WE ARE</span>
          <h2>About Blue Peak Infra</h2>
          <p className="section-subtitle">Building Excellence Since 1999</p>
        </div>

        <div className="about-grid">
          
          <div className="about-image">
            <img src="/Construction%20Website/55.webp" alt="Blue Peak Team" />
            <div className="experience-box">
              <h3>25+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>

          <div className="about-content">
            <h3>Your Trusted Construction Partner</h3>
            <p className="about-desc">
              Blue Peak Infra & Constructions is a premier construction company 
              specializing in residential, commercial, and industrial projects across Tamil Nadu. 
              With over two decades of expertise, we combine innovative design, superior craftsmanship, 
              and cutting-edge technology to deliver projects that exceed expectations.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🏗️</div>
                <div>
                  <h4>500+ Projects</h4>
                  <p>Successfully completed across South India</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">👷</div>
                <div>
                  <h4>150+ Experts</h4>
                  <p>Skilled architects, engineers & technicians</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🏆</div>
                <div>
                  <h4>100% Quality</h4>
                  <p>ISO certified materials & processes</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">⏱️</div>
                <div>
                  <h4>On-Time Delivery</h4>
                  <p>98% projects delivered on schedule</p>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <button className="btn-primary">Download Brochure</button>
              <button className="btn-secondary">View Certificates</button>
            </div>
          </div>

        </div>

        <div className="stats-row">
          <div className="stat-box">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h3>25+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <h3>150+</h3>
            <p>Expert Team</p>
          </div>
          <div className="stat-box">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;