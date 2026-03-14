import React from "react";
import "../styles/skills.css";

const Skills = () => {
  // Use valid JS variable names
  const aiMlDl = ["Tensorflow", "pandas", "Numoy ", "Matplotlib", "pytorch","Seaborn"];
  const programming = ["JavaScript", "C++", "Python", "Java", "Langchain"];
  const webDevelopment = ["HTML", "CSS", "FAST API", "php", "React"];
  const Database =["MongoDB","MYSql"]

  // Reusable skill tag component
  const SkillTag = ({ name }) => <div className="skill-tag">{name}</div>;

  // Skill categories with display names
  const skillCategories = {
    "AI/ML/DL": aiMlDl,
    Programming: programming,
    "Web Development": webDevelopment,
    Database :Database,
  };

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>

        {Object.entries(skillCategories).map(([categoryName, skills]) => (
          <div className="skill-category" key={categoryName}>
            <h3 className="category-title">{categoryName}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <SkillTag key={index} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;