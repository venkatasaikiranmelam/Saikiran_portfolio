/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Venkata Saikiran",
  title: "Hi all, I'm Saikiran",
  subTitle: emoji(
    "A passionate Data Enthusiast 📊 with hands-on experience in building data pipelines, crafting compelling visualizations, and delivering actionable insights using Python, SQL, and BI tools. Skilled in machine learning 🤖, LLMs, and Generative AI 🔍, with a drive to solve real-world problems through data science and intelligent automation."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/venkatasaikiranmelam",
  linkedin: "https://www.linkedin.com/in/mvsaikiran92/",
  gmail: "venkatakiranmelam@gmail.com",

  // Custom icon for StrataScratch – we'll add it below
  stratascratch: "https://platform.stratascratch.com/user/saikiranmelam",

  // Disable the rest
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};


// Skills Section

//
const skillsSection = {
  title: "What I do",
  subTitle: "Curious data enthusiast exploring the depths of analytics, AI, and visualization",
  skills: [
    emoji("⚡ Build intelligent pipelines for predictive analytics, ML, and LLM-based applications"),
    emoji("⚡ Design insightful dashboards with Power BI, Tableau, and Grafana"),
    emoji("⚡ Develop scalable AI/ML workflows using Azure, Spark, and Vertex AI"),
    emoji("⚡ Specialize in Chat Analytics, Generative AI, and multi-agent orchestration")
  ],

softwareSkills: [
  { skillName: "Python", iconifyClass: "logos:python" },
  { skillName: "R", iconifyClass: "logos:r-lang" },
  { skillName: "SQL", iconifyClass: "vscode-icons:file-type-sql" },
  { skillName: "PySpark", iconifyClass: "simple-icons:apachespark" },
  { skillName: "TensorFlow", iconifyClass: "logos:tensorflow" },
  { skillName: "PyTorch", iconifyClass: "logos:pytorch-icon" },
  { skillName: "Power BI", iconifyClass: "logos:microsoft-power-bi" },
  { skillName: "Tableau", iconifyClass: "logos:tableau-icon"  },
  { skillName: "Grafana", iconifyClass: "logos:grafana" },
  { skillName: "Snowflake", iconifyClass: "logos:snowflake-icon" },
  { skillName: "Azure", iconifyClass: "logos:microsoft-azure" },
  { skillName: "Azure Data Factory", iconifyClass: "logos:microsoft-azure" },
  { skillName: "Vertex AI", iconifyClass: "logos:google-cloud" },
  { skillName: "Apache Spark", iconifyClass: "simple-icons:apachespark" },
  { skillName: "Apache Airflow", iconifyClass: "simple-icons:apacheairflow" },
  { skillName: "Kafka", iconifyClass: "simple-icons:apachekafka" },
  { skillName: "Docker", iconifyClass: "logos:docker-icon" },
  { skillName: "Git", iconifyClass: "logos:git-icon" },
  { skillName: "Jupyter", iconifyClass: "logos:jupyter" },
  { skillName: "Linux", iconifyClass: "logos:linux-tux" },
  { skillName: "PowerPoint", iconifyClass: "vscode-icons:file-type-powerpoint2" },
  { skillName: "BERT / LLMs", iconifyClass: "ph:brain-duotone" },
  { skillName: "LangChain / CrewAI", iconifyClass: "material-symbols:hub" },
  { skillName: "AWS", iconifyClass: "logos:aws" },
  { skillName: "AWS Lambda", iconifyClass: "logos:aws-lambda" },
  { skillName: "AWS S3", iconifyClass: "logos:aws-s3" },
  { skillName: "AWS Glue", iconifyClass: "logos:aws-glue" }, // No icon exists yet, fallback to AWS
 ],
  display: true
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Rensselaer Polytechnic Institute",
      logo: require("./assets/images/rpiLogo.png"),
      subHeader: "Master of Science in Business Analytics",
      duration: "2022 - 2023",
      desc: "Coursework focused on applied analytics, machine learning, and decision sciences for business applications.",
      descBullets: [
        "Coursework: Machine Learning, Fundamentals of Data Science, Statistics, Modeling & Optimization, Marketing Analytics, Business Capstone, Financial Investing & Trading, Intro to Financial Accounting & Management",
        "Activities & Societies: Beta Gamma Sigma Honor Society 🏅, Badminton Club"
      ],
      badge: {
        title: "Beta Gamma Sigma",
        image: require("./assets/images/bgsLogo.png"),
        url: "https://www.betagammasigma.org/"
      }
    },
    {
      schoolName: "SRM Institute of Science and Technology, Kattankulathur",
      logo: require("./assets/images/srmLogo.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "2009 - 2013",
      desc: "Completed undergraduate degree with a focus on electronics, communication systems, and applied mathematics.",
      descBullets: [
        "Hands-on experience in microprocessors, VLSI design, and digital systems",
        "Coursework: Probability and Stochastic Processes, Advanced Calculus, Complex Analysis, and Linear Algebra",
        "Participated in college-level tech symposiums and sports events"
      ]
    }
  ]
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "SQL",
      progressPercentage: "90%"
    },
    {
      Stack: "Power BI / Tableau",
      progressPercentage: "70%"
    },
    {
      Stack: "AI / LLMs",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some notable work and open-source contributions.",
  projects: [
    {
      image: require("./assets/images/keelworks.png"),
      projectName: "KeelWorks ChatBot API",
      projectDesc:
        "As the Project Manager, I led and coordinated a cross-functional team to develop a chatbot for KeelWorks, a nonprofit helping youth with career development. The chatbot automates FAQs, manages user queries, and streamlines internal communication enabling volunteers to interact effectively with the organization’s management.",
      footerLink: [
        {
          name: "🌐 Website",
          url: "https://keelworks.org/"
        },
        {
          name: "💻 GitHub Repo",
          url: "https://github.com/venkatasaikiranmelam/keelworks-chatbot-api"
        }
      ]
    },
    {
      image: require("./assets/images/Dashboard.png"),
      projectName: "Global Market Dashboard",
      projectDesc:
        "An interactive dashboard visualizing real-time economic data: Top 30 GDP nations, S&P 500, currency exchange, oil prices, and correlation trends using Streamlit and Plotly.",
      footerLink: [
        {
          name: "🌐 Live Monitor",
          url: "https://global-market-dashboard.streamlit.app/"
        },
        {
          name: "💻 GitHub Repo",
          url: "https://github.com/venkatasaikiranmelam/global-market-dashboard"
        }
      ]
    }
  ],
  display: true
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Select certifications I've completed",

  achievementsCards: [
    {
      title: "AWS Certified Developer – Associate",
      subtitle: "Earned certification for demonstrating proficiency in AWS development tools and services.",
      image: require("./assets/images/awsLogo.png"), // Ensure this logo is in assets/images
      imageAlt: "AWS Certification Logo",
      footerLink: [
        {
          name: "Credly Badge",
          url: "https://www.credly.com/badges/ce1dff40-28a5-40e2-bcb0-582a17a9a532/linked_in_profile"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let’s connect — I’m open to collaboration, projects, or just a good data talk!",
  number: "",
  email_address: "venkatakiranmelam@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
