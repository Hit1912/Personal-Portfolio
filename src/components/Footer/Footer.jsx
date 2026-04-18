import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-20 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#050414] border-t border-purple-900 shadow-[0_-10px_30px_rgba(130,69,236,0.1)]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
        
        {/* Name / Logo and Bio */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
            Hit Dungrani
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xs text-center md:text-left leading-relaxed">
            Passionate MERN Stack Developer building scalable and modern web applications. Always learning and creating.
          </p>
          <button 
            onClick={() => handleScroll('contact')}
            className="mt-6 font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-6 rounded-full hover:-translate-y-1 transition transform duration-300 shadow-[0_0_15px_rgba(130,69,236,0.4)]"
          >
            Let's Talk
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-3">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "projects" },
              { name: "Education", id: "education" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="text-gray-400 hover:text-purple-400 transition-colors text-base flex justify-center md:justify-start"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Social Media & Contact */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
          <div className="flex space-x-6">
            {[
              { icon: <FaGithub />, link: "https://github.com/hit1912", name: "GitHub" },
              { icon: <FaTwitter />, link: "https://x.com/hitdungrani39", name: "Twitter" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hit-dungrani-b2804131a/", name: "LinkedIn" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/_hit_dungrani_111/", name: "Instagram" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className="text-3xl text-gray-300 hover:text-purple-500 hover:scale-125 transition-transform duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-col space-y-4 text-center md:text-left text-gray-400 text-sm md:text-base">
            <div className="flex items-center justify-center md:justify-start">
              <span className="mr-3 text-xl bg-[#251f38] p-2 rounded-full text-purple-400">📍</span>
              <span>Gujarat, India</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="mr-3 text-xl bg-[#251f38] p-2 rounded-full text-purple-400">📧</span>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hitdungrani39@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                hitdungrani39@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-px bg-purple-900/50 mt-12 mb-8"></div>
      
      {/* Copyright Text */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 relative">
        <p>© 2026 Hit Dungrani. All rights reserved.</p>
        
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute -top-16 right-0 md:static md:ml-4 bg-[#251f38] p-3 rounded-full text-purple-400 hover:text-white hover:bg-purple-600 transition-colors shadow-lg"
          title="Back to Top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
