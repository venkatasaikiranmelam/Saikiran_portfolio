import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  const getIconPath = (skillName) => {
    return `/icons/${skillName.toLowerCase().replace(/\s+|\/+/g, "-")}.svg`;
  };

  return (
    <div className="software-skills-main-div">
      {skillsSection.softwareSkills.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="skill-category-title">{category.domain}</h3>
          <ul className="dev-icons">
            {category.skills.map((skill, i) => (
              <li
                key={i}
                className="software-skill-inline"
                title={skill.skillName}
              >
                <img
                  src={skill.imagePath || `/icons/${skill.skillName.toLowerCase().replace(/\s+|\/+/g, "-")}.svg`}
                  alt={skill.skillName}
                  width="40"
                  height="40"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.outerHTML = `<span class='custom-icon'>${skill.skillName}</span>`;
                  }}
                />
                <p>{skill.skillName}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
