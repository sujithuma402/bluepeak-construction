import React from 'react'
import './Projects.css'

const Projects = () => {
  const projectData = [
    {
      id: 1,
      tag: 'Residential',
      image: `${process.env.PUBLIC_URL}/construction-website/villa.png`,
      title: 'Luxury Villa',
      location: 'Tenkasi',
      desc: 'Modern 3BHK villa with premium finishes'
    },
    {
      id: 2,
      tag: 'Commercial',
      image: `${process.env.PUBLIC_URL}/construction-website/commercial.png`,
      title: 'Commercial Complex',
      location: 'Courtallam',
      desc: '5-floor shopping complex with parking'
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Our Projects</h2>
        <p className="projects-subtitle">Explore our latest completed works across Tenkasi</p>
        
        <div className="projects-grid">
          {projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <span className="tag">{project.tag}</span>
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="location">📍 {project.location}</p>
                <p>{project.desc}</p>
                <button className="btn-view">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;