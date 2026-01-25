import Header from "../component/header.jsx";
import myAv from "../image/myAvatar.png";
import { useEffect, useState } from "react";
import Certifications from "../component/certifications.js";
import Projects from "../component/projects.js";
function Intro() {
  const icons = {
    linkedin: [
      "https://www.linkedin.com/in/henry-zou-3b1908b2/",
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    ],
    github: [
      "https://github.com/HenryZou1",
      "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    ],
    hackerrank: [
      "https://www.hackerrank.com/profile/henryzou2",
      "M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95a.111.111 0 0 1-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 0 1-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 0 1-.11.112h-5.78a.11.11 0 0 1-.11-.11v-7.77c0-.06.05-.11.11-.11z",
    ],
  };
  return (
    <section className="flex items-center h-full p-4">
      <div className="w-2/3 flex justify-center">
        <img src={myAv} className="w-150 h-150"></img>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start p-8 space-y-2 ">
        <h1 className="text-7xl font-extrabold text-gray-800 dark:text-cyan-400 leading-tight">
          Hello, I'm
          <span className="text-blue-800 dark:text-blue-800"> Henry</span>
        </h1>

        <br />
        <h2 className="text-5xl font-semibold text-gray-700 dark:text-cyan-400 leading-relaxed">
          Software Engineer
        </h2>

        <br />
        <p className="text-3xl text-gray-600 dark:text-cyan-400 font-medium">
          based in Toronto
        </p>
        <br />
        <div className="flex gap-9">
          {Object.entries(icons).map(([platform, [href, pathData]]) => (
            <a
              key={platform}
              href={href}
              className="text-gray-600 hover:text-blue-600 dark:text-cyan-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-32 h-32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={pathData} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
const WorkExperience = () => {
  const workExperience = [
    {
      id: "work1",
      title: "Ai Trainer",
      company: "Outlier",
      period: "2025-present",
      description:
        "I worked as an AI trainer and Prompt Engineer, where I designed and engineered datasets used to train AI models, enhancing overall model accuracy and performance. My responsibilities included evaluating AI outputs based on instruction following, truthfulness, localization, safety, and multi-turn coherence. I conducted code reviews of AI-generated code to ensure correctness and quality. I also created targeted prompts to identify weaknesses in model responses and assessed output quality across multiple dimensions. Over the course of the project, I successfully completed 729 tasks with an average completion time of 13 minutes on tasks estimated at 20 minutes, consistently demonstrating efficiency and attention to detail. Additionally, I reviewed tasks submitted by others to ensure compliance with project standards and guidelines.",
      skills: ["React", "TypeScript", "Node.js", "Python", "Java"],
    },
    {
      id: "work2",
      title: "Java Developer",
      company: "FDM Group",
      period: "2022-2023",
      description:
        "I worked as a Java Developer at FDM Group, where I served as the Technical Team Lead for their Ticketing Consultant Portal. In this role, I was responsible for prioritizing the Jira story backlog, writing and refining user stories, conducting code reviews, troubleshooting bugs, and developing features to fulfill sprint objectives. Every two weeks, I led the team's code merge meetings and presented sprint demos to stakeholders, showcasing newly implemented features and enhancements.",
      skills: [
        "React",
        "TypeScript",
        "Angular",
        "Selenium",
        "Java",
        "Python",
        "Jira",
        "Git",
        "REST API",
        "JavaScript",
        "HTML/CSS",
        "SQL",
      ],
    },
    {
      id: "work3",
      title: "IT Consultant",
      company: "TD Bank",
      period: "2022-2022",
      description:
        "I worked as a IT Consultant at TD Bank, where I was part of the Level 2 application support team for TD’s CORE Products. In this role, I analyzed, troubleshot, and resolved 143 production application incidents and fulfilled 184 service requests using ServiceNow, all within the defined service level agreements. I created and coordinated emergency change orders, executed application change tasks, and ensured smooth implementation of critical updates. I actively participated in daily scrum stand-ups and handover meetings to track progress, identify blockers, and maintain up-to-date documentation. I used CA-7 to monitor batch job scheduling and ensured no lead times were missed. Additionally, I worked with TSO and TDBSAVERS to retrieve accounting data for jobs running on SOC and BDC systems. I also performed data extraction and transformation to generate reports from mainframe customer data for business use.",
      skills: [
        "Mainframe",
        "COBOL",
        "CA-7",
        "ServiceNow",
        "JCL",
        "Unix/Linux CLI",
        "CyberArk",
        "Excel",
        "SQL",
        "Autosys",
        "Rest API",
      ],
    },
    {
      id: "work4",
      title: "IT Consultant Trainee",
      company: "FDM Group",
      period: "2021-2021",
      description:
        "I completed professional training as an IT Consultant Trainee, gaining hands-on experience in core technologies including SQL, UNIX, Java fundamentals, RESTful APIs, and the Spring framework. This training provided a strong foundation in backend development, database interaction, and software architecture best practices, preparing me for real-world application development and support roles.",
      skills: [
        "Unix/Linux",
        "SQL",
        "Selenium",
        "Java",
        "JavaScript",
        "HTML/CSS",
      ],
    },
    {
      id: "work5",
      title: "Software Developer Intern",
      company: "Hatchways",
      period: "2021-2021",
      description:
        "I worked as a Software Developer Intern at Hatchways, where I contributed to the development of a full-stack web crawler application designed to search Reddit and Twitter for company-related information. I implemented new features using React, Material-UI, Express, and MongoDB, including user authentication by validating salted passwords against a MongoDB user database. On the backend, I utilized Redis as a background worker to fetch data from external APIs and scheduled tasks using cron jobs to ensure regular data collection. This project enhanced the platform’s ability to deliver timely and relevant insights for users researching companies online.",
      skills: [
        "React",
        "Material-UI",
        "JavaScript",
        "MongoDB",
        "Express",
        "Node.js",
      ],
    },
  ];
  const [visibleItems, setVisibleItems] = useState(new Set());
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(
              (prev) => new Set([...prev, entry.target.dataset.id]),
            );
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px" },
    );

    const workItems = document.querySelectorAll("[data-animate='work']");
    workItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section id="work" className="py-20 space-y-8 mx-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-16">
          Work Experience
        </h2>
      </div>

      {workExperience.map((work, index) => (
        <div
          key={work.id}
          data-animate="work"
          data-id={work.id}
          className={` max-w-6xl  mx-auto backdrop-blur-sm bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-600/20 rounded-lg h-96 transform transition-all duration-700 ${visibleItems.has(work.id) ? "translate-x-0 opacity-100" : index % 2 === 0 ? "-translate-x-32 opacity-0" : "translate-x-32 opacity-0"}`}
          style={{
            boxShadow:
              "6px 6px 12px rgba(0, 0, 0, 0.5), -6px -6px 12px rgba(100, 116, 139, 0.1)",
            borderRadius: "12px",
          }}
        >
          <div className="justify-center h-full flex flex-col bg-white  dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-300 dark:border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 ">
              <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-1">
                {work.title}
              </h3>
              <p className="text-sm md:text-base dark:text-gray-300">
                {work.company}
              </p>
              <p className="dark:text-slate-400 font-medium mt-2 md:mt-0">
                {work.period}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {work.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 dark:bg-blue-600/20 dark:text-blue-300 rounded-full text-sm border border-blue-600/30"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="dark:text-slate-400 font-medium mt-2 md:mt-0 flex-1 ">
              {work.description}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
const Project = () => {};
const Index = () => {
  return (
    <div
      className={
        "w-full min-h-screen bg-gradient-to-br from-slate-300 via-violet-200 to-slate-200 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900"
      }
    >
      <Header />
      <section className="h 2/3 dark:text-white ">
        <Intro />
      </section>
      <div className="space-y-8  ">
        <WorkExperience></WorkExperience>
      </div>
      <Certifications></Certifications>
      <Projects></Projects>
    </div>
  );
};
export default Index;
