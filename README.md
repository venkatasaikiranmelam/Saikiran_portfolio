# 💼 Saikiran Melam – Personal Portfolio Website

[![Live](https://img.shields.io/badge/Visit-Live%20Site-green?style=for-the-badge&logo=vercel&logoColor=white)](https://www.saikiranmelam.com/)

A responsive portfolio site to showcase my skills, projects, and experience as a Data Enthusiast focused on Analytics, Machine Learning, LLMs, and Intelligent Automation.

---

## 🧠 Domain-Wise Skills Section

This project uses **domain-based grouping** for software skills, allowing each group to be displayed under a specific domain title.

### ✅ Configure in `portfolio.js` like so:

```js
softwareSkills: [
  {
    domain: "Programming Languages",
    skills: [
      { skillName: "Python", imagePath: "icons/python.svg" },
      { skillName: "R", imagePath: "icons/r.svg" },
      { skillName: "SQL", imagePath: "icons/sql.svg" }
    ]
  },
  {
    domain: "AI / ML / LLMs",
    skills: [
      { skillName: "TensorFlow", imagePath: "icons/tensorflow.svg" },
      { skillName: "BERT / LLMs", imagePath: "icons/bert.svg" },
      { skillName: "LangChain", imagePath: "icons/langchain.svg" },
      { skillName: "OpenAI", imagePath: "icons/openai.svg" },
      { skillName: "Hugging Face", imagePath: "icons/huggingface.svg" }
    ]
  },
  {
    domain: "Cloud Platforms",
    skills: [
      { skillName: "Azure", imagePath: "icons/azure.svg" },
      { skillName: "Azure Data Factory", imagePath: "icons/azure-data-factory.svg" },
      { skillName: "AWS", imagePath: "icons/aws.svg" },
      { skillName: "AWS Lambda", imagePath: "icons/aws-lambda.svg" },
      { skillName: "AWS EC2", imagePath: "icons/aws-ec2.svg" },
      { skillName: "AWS Glue", imagePath: "icons/aws-glue.svg" }
    ]
  },
  {
    domain: "Big Data & Orchestration",
    skills: [
      { skillName: "Apache Spark", imagePath: "icons/apache-spark.svg" },
      { skillName: "Airflow", imagePath: "icons/apache-airflow.svg" },
      { skillName: "Kafka", imagePath: "icons/kafka.svg" },
      { skillName: "Snowflake", imagePath: "icons/snowflake.svg" },
      { skillName: "PySpark", imagePath: "icons/pyspark.svg" }
    ]
  },
  {
    domain: "BI & Visualization",
    skills: [
      { skillName: "Power BI", imagePath: "icons/power-bi.svg" },
      { skillName: "Tableau", imagePath: "icons/tableau.svg" },
      { skillName: "Grafana", imagePath: "icons/grafana.svg" }
    ]
  },
  {
    domain: "Dev Tools",
    skills: [
      { skillName: "Git", imagePath: "icons/git.svg" },
      { skillName: "GitHub", imagePath: "icons/github.svg" },
      { skillName: "Docker", imagePath: "icons/docker.svg" },
      { skillName: "Jupyter", imagePath: "icons/jupyter.svg" },
      { skillName: "Excel", imagePath: "icons/excel.svg" },
      { skillName: "Linux", imagePath: "icons/linux.svg" }
    ]
  }
];
```

📌 **All icons must be stored in `public/icons/` and named exactly as specified in `imagePath`** (e.g., `python.svg`, `azure-data-factory.svg`, etc).

---

## 📁 Folder Structure

```
Saikiran_portfolio/
├── public/
│   └── icons/              # All skill icons go here
├── src/
│   ├── containers/
│   │   └── Skills/
│   │       └── SoftwareSkill.js  # Skill rendering component
│   └── portfolio.js        # Configuration file for profile and skills
├── assets/
│   └── lottie/             # Optional animations (e.g., splashAnimation)
├── README.md               # This file
```

---

## 🚀 Getting Started

### To run locally:

```bash
git clone https://github.com/venkatasaikiranmelam/Saikiran_portfolio.git
cd Saikiran_portfolio
npm install
npm start
```

---

## 🌍 Deployment

Deploy your portfolio site for **free** using:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

---

## 🛠 Tech Stack

- **React.js**
- **JavaScript / JSX**
- **HTML / CSS**
- **Lottie animations**
- **Node.js (for development)**

---

## 📬 Connect with Me

- 🌐 [Website](https://www.saikiranmelam.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/saikiranmelam)
- 💻 [GitHub](https://github.com/venkatasaikiranmelam)

---

© 2025 Saikiran Melam. All rights reserved.
