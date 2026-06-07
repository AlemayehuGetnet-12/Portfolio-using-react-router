import bg from "../assets/project.png";
import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React.",
      github:
       "https://github.com/yourusername/react-router-portfolio",
    },
    {
      title: "Calculator",
      description: "Calculation using mathematical operations.", // Fixed typo
      github: "https://github.com/AlemayehuGetnet-12/Unlimited-calculator",
    },
    {
      title: "To_Do_ List _App", // Fixed typo
      description: "Task management application.",
      github: "https://https://github.com/AlemayehuGetnet-12/to-do-list",
    },
    {
      title: "E-Commerce Website",
      description: "Online shopping platform built with React.",
      github: "https://github.com/AlemayehuGetnet-12/ecommerce-website",
    },
    {
      title: "Digital Clock & Countdown", // Fixed typo
      description: "Online digital clock and countdown timer built with React.", // Fixed typo
      github: "https://github.com/AlemayehuGetnet-12/Digital-clock-and-Down-counter"
    },
    {   
      title: "Student Grade Calculation",
      description: "Online Student grade calculationbuilt with html,css and javasript.",
      github: "https://github.com/AlemayehuGetnet-12/student-grade-calculation",
    },
  ];

  return (
    // Added inline style here to dynamically use your imported bg image
    <section 
      className="projects-section" 
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${bg})` }}
    >
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>

            <a
              className="github-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            > 
              View GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;