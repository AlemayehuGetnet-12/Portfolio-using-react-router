import bg from "../assets/project.png";


function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React.",
      github:
       "https://alemayehu-portfolio-alex.vercel.app/",
    },
    {
      title: "News-app",
      description: "Implemented a clean, modern UI with Tailwind CSS / Global Api..", // Fixed typo
      github: " https://alemayehu-news-app.vercel.app/",
    },
    {
      title: "counter", // Fixed typo
      description: "Counter with multiple featur management application.",
      github: "https://alemayehu-counter-with-multiple-feature.vercel.app/",
    },
    {
      title: "E-Commerce Website",
      description: "Online shopping platform built with React.",
      github: "https://merkato-store-web.vercel.app",
    },
    {
      title: "Digital Clock & Countdown", // Fixed typo
      description: "Online digital clock and countdown timer built with React.", // Fixed typo
      github: " https://alemayehu-digital-clock-and-down-counter.vercel.app/"
    },
    {   
      title: "Currency-Convertor",
      description: "Online Currency Convertor calculation built with reacts",
      github: "https://alex-currency-coverter.vercel.app/",
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
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;