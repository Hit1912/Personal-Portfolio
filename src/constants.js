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
    percentage: 90,
    skills: [
      { name: 'React.js', logo: reactjsLogo },
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Angular', logo: angularLogo },
    ],
  },
  {
    title: 'Backend',
    percentage: 60,
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
    ],
  },
  {
    title: 'Database',
    percentage: 50,
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'SQL Server', logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
    ],
  },
  {
    title: 'Tools',
    percentage: 100,
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'REST APIs', logo: "https://img.icons8.com/nolan/64/api-settings.png" },
      { name: 'JWT Authentication', logo: "https://jwt.io/img/pic_logo.svg" },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
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
      grade: "SGPA :- 8.45 | Grade :- A+",
      desc: "Completed education with studies at the following affiliated colleges:",
      degree: "University",
      website: "https://www.vnsgu.ac.in/",
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
      grade: "Percentage: 92.77%",
      desc: "Completed Higher Secondary Certificate.",
      degree: "HSC",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Shree Nayalkaran Sadvidhya Mandir Prathmik Shala",
      date: "",
      grade: "Percentage: 95.32%",
      desc: "Completed Secondary School Certificate.",
      degree: "SSC",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Jewelry Management System",
      description: "A premium, mobile-responsive website for a luxury jewelry business (Shubham Invitation) featuring an elegant dark-gold aesthetic, interactive product gallery, and smooth animations.",
      image: "/images/jewelry.png",
      tags: ["React.js", "Tailwind CSS", "Frontend", "UI/UX"],
      github: "https://github.com/Hit1912/Jewelry-Management-System",
      webapp: "https://jewelry-management-system-4csq49rgv-hit1912s-projects.vercel.app/",
    },
    {
      id: 1,
      title: "Finance Platform Management System",
      description: "Financial dashboard, Transaction management, Authentication system, Reports generation.",
      image: "/images/finance-platform.png",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/Hit1912/finance-platform-management-system",
      webapp: "https://dhrfinanceplatform.vercel.app",
    },
    {
      id: 2,
      title: "Attendance Management System",
      description: "Attendance tracking, Admin panel, Reports generation.",
      image: "/images/attendance-system.png",
      tags: ["Angular", "C# .NET", "SQL Server"],
      github: "https://github.com/Hit1912/Attendance-Management-System",
      webapp: "https://ams1-seven.vercel.app?_vercel_share=cc6Le5RPtKrGqw5OV5g3bFigsLYzNr4v",
    },
    {
      id: 3,
      title: "ExamNest",
      description: "Online examination system, Timer-based tests, Result system.",
      image: "/images/examnest.png",
      tags: ["Angular", "C# ASP.NET", "SQL Server"],
      github: "https://github.com/Hit1912/ExamNest",
      webapp: "https://papaya-sawine-89fa28.netlify.app/",
    },
    {
      id: 4,
      title: "DHR Nest - Cloud Storage",
      description: "A decentralized, secure cloud storage platform for storing files beyond the clouds with enhanced security.",
      image: "/images/filestorage.png",
      tags: ["React.js", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Hit1912/filestorage-management-system",
      webapp: "https://dhrfilestorage.vercel.app/",
    },
    {
      id: 5,
      title: "DHR Supermart - Grocery Store",
      description: "A premium next-gen grocery shopping experience with real-time inventory and state-of-the-art precision.",
      image: "/images/grocery.png",
      tags: ["React.js", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Hit1912/grocery-managment-system",
      webapp: "https://dhrsupermart.vercel.app/",
    },
  ];  

  export const tradingData = [
    {
      category: "Options Trading",
      icon: "https://cdn-icons-png.flaticon.com/512/2933/2933116.png",
      items: [
        { name: "Nifty 50", symbol: "NIFTY" },
        { name: "Bank Nifty", symbol: "BANKNIFTY" },
        { name: "Fin Nifty", symbol: "FINNIFTY" },
        { name: "Midcap Nifty", symbol: "MIDCPNIFTY" },
        { name: "Sensex", symbol: "SENSEX" },
      ],
    },
    {
      category: "Favorite Stocks",
      icon: "https://cdn-icons-png.flaticon.com/512/3594/3594415.png",
      items: [
        { name: "HDFC Bank", symbol: "HDFCBANK" },
        { name: "State Bank of India", symbol: "SBIN" },
        { name: "Reliance Industries", symbol: "RELIANCE" },
        { name: "Tata Motors", symbol: "TATAMOTORS" },
        { name: "Infosys", symbol: "INFY" },
      ],
    },
    {
      category: "Forex & Crypto",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png",
      items: [
        { name: "Gold", symbol: "XAU/USD" },
        { name: "Bitcoin", symbol: "BTC/USDT" },
        { name: "Ethereum", symbol: "ETH/USDT" },
        { name: "Euro / US Dollar", symbol: "EUR/USD" },
        { name: "Solana", symbol: "SOL/USDT" },
        { name: "Silver", symbol: "XAG/USD" },
      ],
    },
  ];

  export const referralLinks = {
    indian: [
      { name: "Zerodha", url: "https://zerodha.com/open-account?c=HLS953", icon: "https://cdn-icons-png.flaticon.com/512/3594/3594415.png" },
      { name: "Angel One", url: "https://angel-one.onelink.me/Wjgr/x7pc3ckw", icon: "https://cdn-icons-png.flaticon.com/512/3594/3594415.png" },
    ],
    global: [
      { name: "Binance", url: "https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_BYNSD&utm_source=referral_entrance&utm_medium=app_share_link_whatsapp", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png" },
      { name: "Delta Exchange", url: "https://www.delta.exchange/?code=PEYCQZ", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png" },
      { name: "CoinDCX", url: "https://invite.coindcx.com/77970764", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png" },
      { name: "CoinSwitch", url: "https://coinswitch.co/in/refer?tag=5xdbg", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png" },
    ]
  };

  export const tickerData = [
    { symbol: "NIFTY 50", price: "22,519.40", change: "+0.85%", isUp: true },
    { symbol: "BANKNIFTY", price: "48,159.00", change: "+1.20%", isUp: true },
    { symbol: "HDFCBANK", price: "1,530.20", change: "-0.45%", isUp: false },
    { symbol: "RELIANCE", price: "2,930.50", change: "+2.10%", isUp: true },
    { symbol: "SBIN", price: "760.10", change: "+0.60%", isUp: true },
    { symbol: "INFY", price: "1,450.80", change: "-1.15%", isUp: false },
    { symbol: "BTC/USDT", price: "64,230.00", change: "+3.40%", isUp: true },
    { symbol: "XAU/USD", price: "2,340.50", change: "+0.15%", isUp: true },
  ];

  export const SocialMedia = [
    {
      name: "GitHub",
      url: "https://github.com/hit1912",
      icon: "https://img.icons8.com/ios-filled/100/ffffff/github.png",
      color: "bg-[#181717]",
      hover: "hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hit-dungrani-b2804131a/",
      icon: "https://img.icons8.com/ios-filled/100/ffffff/linkedin.png",
      color: "bg-[#0A66C2]",
      hover: "hover:shadow-[0_0_20px_rgba(10,102,194,0.4)]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hit_dungrani_1912/",
      icon: "https://img.icons8.com/ios-filled/100/ffffff/instagram-new.png",
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      hover: "hover:shadow-[0_0_20px_rgba(238,42,123,0.4)]",
    },
    {
      name: "Twitter",
      url: "https://x.com/DungraniHit",
      icon: "https://img.icons8.com/ios-filled/100/ffffff/x-coordinate.png",
      color: "bg-[#000000]",
      hover: "hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    },
    {
      name: "Email",
      url: "mailto:hitdungrani1912@gmail.com",
      icon: "https://img.icons8.com/ios-filled/100/ffffff/gmail-new.png",
      color: "bg-[#DB4437]",
      hover: "hover:shadow-[0_0_20px_rgba(219,68,55,0.4)]",
    },
  ];