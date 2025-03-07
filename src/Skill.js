import React from "react";

const skills = [
  { name: "HTML", percentage: 90, color: "#E44D26" },
  { name: "CSS", percentage: 85, color: "#1572B6" },
  { name: "JavaScript", percentage: 80, color: "#F7DF1E" },
  { name: "React.js", percentage: 75, color: "#61DAFB" },
  { name: "Node.js", percentage: 70, color: "#339933" },
  { name: "MongoDB", percentage: 65, color: "#4DB33D" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => {
          const circumference = 2 * Math.PI * 50;
          const offset = circumference * (1 - skill.percentage / 100);
          return (
            <div key={index} className="skill">
              <div className="progress-circle">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" className="bg-circle"></circle>
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    className="progress"
                    style={{
                      strokeDasharray: circumference,
                      strokeDashoffset: offset,
                      stroke: skill.color,
                    }}
                  ></circle>
                </svg>
                <span className="percentage">{skill.percentage}%</span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
