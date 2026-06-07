import { Link } from "react-router-dom";
import ThomeToggle from "./ThomeToggle";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">
          <div className="logo-circle">    
        <a href="projects" className="btn"> Al
            <span className="tech-focus">ema </span> yehu
            <span className="tech-highlight">Ge</span>tnet
      
         </a>
      </div>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <ThomeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </nav>
  );
}

export default Navbar;