import cvFile from "../assets/CV.pdf";
import profileImage from "../assets/image/photo.png";
import bg from "../assets/home.png";
import React from "react";


function Home() {
  return (
    <section 
      className="home"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="container">
        <h1 className="section-title">Home</h1>
        <div className="marquee-wrapper">
          <div className="track-right">
            <marquee direction="right" 
            scrollAmount="10"> 
          
            <h1>Wellcome to know me . I'm Alemayehu &nbsp;&nbsp;(just as Alex) &nbsp;!!!&nbsp; </h1>
             </marquee>
          </div>
        </div>
                
        <p className="description">
          I create modern, responsive
           and user-friendly web applications 
           using React.
        </p>

        <div className="cta-buttons">
          <a href={cvFile} download="Alemayehu_CV.pdf" className="cv-btn">
            Download CV
          </a>
          <a href="#projects" className="p-btn">
            View Projects
          </a>
        </div>

        <div className="marquee-wrapper">
          <div className="track-left">
             <marquee direction="right" 
            scrollAmount="15">
            <h2>Frontend Developer &nbsp;!!!&nbsp; 
              backend developer &nbsp;•&nbsp; </h2> </marquee> 
          </div>
        </div>

        <div className="home-image">
          <div className="image-circle">
            <img src={profileImage} alt="Alemayehu" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Home;