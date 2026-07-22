import bg from "../assets/service.png";

function Services() {
  return (
    <section 
      className="services-section" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay">
        <h2>Our Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Web Design</h3>
            <p>Modern and responsive website designs.</p>
          </div>

          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>React-based web applications.</p>
          </div>

          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>User-friendly interfaces and experiences.</p>
          </div>
          
          <div className="service-card">
            <h3>Computer Programming</h3>
            <p>User-friendly CMD and Architectural applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;