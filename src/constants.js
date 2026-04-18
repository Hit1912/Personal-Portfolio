// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', logo: reactjsLogo },
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'SQL Server', logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'REST APIs', logo: "https://img.icons8.com/nolan/64/api-settings.png" },
      { name: 'JWT Authentication', logo: "https://jwt.io/img/pic_logo.svg" },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: "https://www.google.com/s2/favicons?domain=laminds.com&sz=128",
      role: "MERN Stack Developer Intern",
      company: "LAMIND",
      date: "6 Months",
      website: "https://laminds.com/",
      desc: "Developed 7+ MERN Stack projects, built RESTful APIs, managed MongoDB database, implemented authentication systems, fixed bugs, optimized performance, built responsive UI, and collaborated with team members.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Tailwind CSS",
      ],
    },
    {
      id: 1,
      img: "https://www.google.com/s2/favicons?domain=group.teamlease.com&sz=128",
      role: "Retail Associate",
      company: "Teamlease Private Limited",
      date: "1+ Year",
      website: "https://group.teamlease.com/",
      desc: "Customer service handling, sales operations, inventory management, team collaboration, maintained smooth operations.",
      skills: [
        "Customer Service",
        "Sales",
        "Inventory Management",
        "Team Collaboration",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: "https://www.google.com/s2/favicons?domain=vnsgu.ac.in&sz=128",
      school: "Veer Narmad South Gujarat University, Surat",
      date: "",
      grade: "Grade: A",
      desc: "Completed education with studies at the following affiliated colleges:",
      degree: "University",
      colleges: [
        { 
          name: "Prof. V. B. Shah Institute of Management, R. V. Patel College of Commerce, V. L. Shah College of Commerce & Sutex Bank College", 
          link: "https://amrolicollege.ac.in/", 
          logo: "https://www.google.com/s2/favicons?domain=amrolicollege.ac.in&sz=128" 
        }
      ]
    },
    {
      id: 1,
      img: vpsLogo,
      school: "Shri Gopinathji Dev High School",
      date: "",
      grade: "92.77%",
      desc: "Completed Higher Secondary Certificate.",
      degree: "HSC",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Shree Nayalkaran Sadvidhya Mandir Prathmik Shala",
      date: "",
      grade: "95.32%",
      desc: "Completed Secondary School Certificate.",
      degree: "SSC",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Finance Platform Management System",
      description: "Financial dashboard, Transaction management, Authentication system, Reports generation.",
      image: "/images/finance-platform.png",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/Hit1912/finance-platform-management-system",
      webapp: "#",
    },
    {
      id: 1,
      title: "Attendance Management System",
      description: "Attendance tracking, Admin panel, Reports generation.",
      image: "/images/attendance-system.png",
      tags: ["Angular", "C# .NET", "SQL Server"],
      github: "https://github.com/Hit1912/Attendance-Management-System",
      webapp: "#",
    },
    {
      id: 2,
      title: "ExamNest",
      description: "Online examination system, Timer-based tests, Result system.",
      image: "/images/examnest.png",
      tags: ["Angular", "C# ASP.NET", "SQL Server"],
      github: "https://github.com/Hit1912/ExamNest",
      webapp: "#",
    },
    {
      id: 3,
      title: "Stock Market System",
      description: "Stock visualization, Market trend analysis.",
      image: "/images/stock-market.png",
      tags: ["Python", "React.js", "Charts"],
      github: "https://github.com/hit1912",
      webapp: "#",
    },
    {
      id: 4,
      title: "Advanced MERN AI Financial SaaS Platform",
      description: "AI-based financial insights, SaaS dashboard, Secure login system.",
      image: "/images/ai-financial-saas.png",
      tags: ["MERN Stack", "AI Integration"],
      github: "https://github.com/hit1912",
      webapp: "#",
    },
    {
      id: 5,
      title: "Future Project",
      description: "Upcoming innovative application.",
      image: "/images/project6.png",
      tags: ["Coming Soon"],
      github: "#",
      webapp: "#",
    },
    {
      id: 6,
      title: "Future Project",
      description: "Upcoming innovative application.",
      image: "/images/project7.png",
      tags: ["Coming Soon"],
      github: "#",
      webapp: "#",
    },
    {
      id: 7,
      title: "Future Project",
      description: "Upcoming innovative application.",
      image: "/images/project8.png",
      tags: ["Coming Soon"],
      github: "#",
      webapp: "#",
    },
  ];  