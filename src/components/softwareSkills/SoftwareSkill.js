import React from "react";
import { Icon } from "@iconify/react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

// Import available icons from react-icons/si
import {
  SiPython, SiR, SiApachespark, SiTensorflow, SiPytorch,
  SiTableau, SiGrafana, SiSnowflake,
  SiApacheairflow, SiApachekafka, SiDocker, SiGit, SiJupyter,
  SiLinux
} from "react-icons/si";

// Map skill names to icons or fallback spans
const iconMap = {
  Python: <SiPython />,
  R: <SiR />,
  PySpark: <SiApachespark />,
  TensorFlow: <SiTensorflow />,
  PyTorch: <SiPytorch />,
  "Power BI": <span className="custom-icon">Power BI</span>,
  Tableau: <SiTableau />,
  Grafana: <SiGrafana />,
  Snowflake: <SiSnowflake />,
  Azure: <span className="custom-icon">Azure</span>,
  "Azure Data Factory": <SiApacheairflow />,
  "Vertex AI": <span className="custom-icon">Vertex AI</span>,
  "Apache Spark": <SiApachespark />,
  "Apache Airflow": <SiApacheairflow />,
  Kafka: <SiApachekafka />,
  Docker: <SiDocker />,
  Git: <SiGit />,
  Jupyter: <SiJupyter />,
  Linux: <SiLinux />,
  PowerPoint: <span className="custom-icon">PPT</span>,
  "BERT / LLMs": <span className="custom-icon">LLMs</span>,
  "LangChain / CrewAI": <span className="custom-icon">LangChain</span>
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skill.skillName}
              title={skill.skillName}
            >
              {skill.iconifyClass ? (
                <Icon icon={skill.iconifyClass} width="40" height="40" />
              ) : (
                <i className={skill.fontAwesomeClassname}></i>
              )}
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
