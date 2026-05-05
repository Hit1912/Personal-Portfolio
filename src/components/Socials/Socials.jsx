import React from "react";
import { SocialMedia } from "../../constants";
import Tilt from "react-parallax-tilt";

const Socials = () => {
  return (
    <section
      id="socials"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans relative z-10 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight uppercase">Connect With Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          Feel free to connect with me on any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities!
        </p>
      </div>

      {/* Social Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {SocialMedia.map((social) => (
          <Tilt
            key={social.name}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.1}
            transitionSpeed={1000}
            className="group"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-gray-900/40 backdrop-blur-xl transition-all duration-300 ${social.hover} group-hover:border-white/20 h-full`}
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${social.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <span className="text-sm sm:text-base font-bold text-gray-300 group-hover:text-white transition-colors">
                {social.name}
              </span>
              <span className="text-[10px] text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">
                Follow
              </span>
            </a>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Socials;
