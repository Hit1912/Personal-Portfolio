import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#050414]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-purple-900/30 py-3" 
          : "bg-transparent py-6"
      } px-[7vw] md:px-[7vw] lg:px-[20vw]`}
    >
      <div className="text-white flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleMenuItemClick('about')}
          className="text-2xl font-extrabold cursor-pointer group flex items-center tracking-tight"
        >
          <span className="text-purple-500 group-hover:text-pink-500 transition-colors duration-300">&lt;</span>
          <span className="text-white group-hover:text-gray-300 transition-colors duration-300">Hit</span>
          <span className="text-purple-500 group-hover:scale-110 transition-transform duration-300 inline-block">/</span>
          <span className="text-white group-hover:text-gray-300 transition-colors duration-300">Dungrani</span>
          <span className="text-purple-500 group-hover:text-pink-500 transition-colors duration-300">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`relative cursor-pointer transition-colors duration-300 group ${
                activeSection === item.id ? "text-purple-400" : "hover:text-white"
              }`}
            >
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className="py-1 tracking-wide"
              >
                {item.label}
              </button>
              <span className={`absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 transform origin-left ${activeSection === item.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`}></span>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/hit1912"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(130,69,236,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hit-dungrani-b2804131a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(130,69,236,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/hit1912"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hit-dungrani-b2804131a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
