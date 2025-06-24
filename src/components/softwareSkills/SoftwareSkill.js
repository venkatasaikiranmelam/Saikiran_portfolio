import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, i) => (
          <li
            key={i}
            className="software-skill-inline"
            name={skill.skillName}
            title={skill.skillName}
          >
            <img
              src={skill.imagePath}
              alt={skill.skillName}
              width="40"
              height="40"
              onError={(e) => {
                // fallback text if image not found
                e.target.onerror = null;
                e.target.outerHTML = `<span class='custom-icon'>${skill.skillName}</span>`;
              }}
            />
            <p>{skill.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
