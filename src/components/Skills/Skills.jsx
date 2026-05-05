// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">SKILLS</h2>
      <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-xl mx-auto">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          className="mb-10 w-full sm:w-[48%]"
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor="#8245ec"
          glarePosition="all"
          glareBorderRadius="1rem"
        >
          <div
            className="bg-gray-900/80 backdrop-blur-md px-5 sm:px-10 py-6 sm:py-6 h-full rounded-2xl border border-white/10 shadow-[0_0_20px_1px_rgba(130,69,236,0.15)]"
          >
            <h3 className="text-xl sm:text-3xl font-bold text-white/90 mb-6 text-center tracking-wide">
              {category.title}
            </h3>
            {/* Progress Bar */}
            <div className="mb-6 px-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Proficiency</span>
                <span className="text-xs text-[#8245ec] font-bold">{category.percentage}%</span>
              </div>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden border border-gray-700">
                <div 
                  className="bg-gradient-to-r from-[#8245ec] to-[#a855f7] h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(130,69,236,0.5)]"
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
            </div>

            {/* Skill Items */}
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-3 sm:px-4"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
