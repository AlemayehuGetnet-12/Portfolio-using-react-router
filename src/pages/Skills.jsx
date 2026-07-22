import bg from "../assets/skill.png";
function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React", 
    "Next.js",
    "TypeScript", 
    "Git",
    "C#",
     "php",
    "python",
    "nodejs",
    "expressjs",
    "mongoos",
    "databese",
   "postgress",
     "potman",
     "cpanal",
     "api",
     
  ];

  return (
    <section 
      className="skills-section"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;