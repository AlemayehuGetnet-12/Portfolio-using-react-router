import React from "react";
import bg from "../assets/image/Alex.png";


function About() {
  return (
    <section className="tech-about-section">
      <div className="tech-about-container">
        
        {/* Left Side: Text Content */}
        <div className="tech-about-content">
            < marquee direction="right" 
            scrollAmount="5"> 
          <h1 className="tech-subtitle"> About Me</h1>
          </marquee>

          <h2 className="tech-about-title"> My name is Alemayehu Getnet</h2>
          
          <p className="tech-intro-text">
            My name is <span className="tech-highlight">Alemayehu</span>. I was born from my Mother 
            <strong className="tech-strong"> Asabie Melese </strong>   
            and my Father <strong className="tech-strong">Getnet Amare</strong> on 
            <strong className="tech-strong"> May 16, 1999 (G.C.)</strong> in West Gojam, Amhara, 
            <span className="tech-highlight"> Ethiopia</span>. Currently i am living in 
            <strong className="tech-strong"> Addis Ababa, Ethiopia</strong>.
          </p>

          <p className="tech-body-text">
            I graduated in Electrical and Computer Engineering 
            <span className="tech-focus"> (Computer Engineering focus)</span> from the 
            <strong className="tech-strong"> Debre Markos University</strong> Institute of Technology.
          </p>

          <div className="tech-stats-bar">
            <div className="stat-item">
              <span className="stat-value">68%</span>
              <span className="stat-label">National Exit Exam Score</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">2023</span>
              <span className="stat-label">Graduation Year</span>
            </div>
          </div>
          
          <p className="tech-body-text tech-terminal-box">
            <span className="terminal-prompt">user@Alemayehu Gtnet:~$</span> I am a passionate frontend developer with experience in building modern web applications using 
            React, JavaScript, and CSS. I love creating responsive, interactive, and user-friendly interfaces.
          </p>

          <div className="tech-tagline-container">
            <div className="tech-tags">
              <span className="tech-tag">Junior Web Developer</span>
              <span className="tech-tag">UI/UX Designer</span>
              <span className="tech-tag">Programmer</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image Display with Cyberpunk Frame effect */}
        <div className="tech-image-wrapper">
          <div className="tech-image-frame">
            <div 
              className="tech-image-panel" 
              style={{ backgroundImage: `url(${bg})` }}
              aria-label="Alemayehu tech background graphic"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;