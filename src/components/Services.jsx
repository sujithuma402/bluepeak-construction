import React from 'react'
import './Services.css'

const services = [
  { 
    img: "/construction-website/Residential Construction.png", 
    title: "Residential Construction", 
    desc: "Custom home building with premium materials and modern design." 
  },
  { 
    img: "/construction-website/commercial.png", 
    title: "Commercial Projects", 
    desc: "Office buildings and commercial complexes built to perfection." 
  },
  { 
    img: "/construction-website/maint.png", 
    title: "Building Maintenance", 
    desc: "Complete maintenance solutions for your property year-round." 
  },
  { 
    img: "/construction-website/Interior Finishing.png", 
    title: "Interior Finishing", 
    desc: "Professional interior work with premium fixtures and fittings." 
  },
  { 
    img: "/construction-website/Renovation Services.png", 
    title: "Renovation Services", 
    desc: "Transform old spaces into modern masterpieces." 
  },
  { 
    img: "/construction-website/Architectural Design.png", 
    title: "Architectural Design", 
    desc: "Innovative architectural planning and 3D visualization." 
  }
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">We provide world-class construction services</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.img} alt={service.title} />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;