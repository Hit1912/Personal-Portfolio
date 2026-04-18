import React, { useState } from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleOpenModal = (experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              onClick={() => handleOpenModal(experience)}
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] cursor-pointer ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mt-1">
                      <h4 className="text-md sm:text-sm text-gray-300 font-medium">
                        {experience.company}
                      </h4>
                      {experience.website && (
                        <a 
                          href={experience.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#8245ec] hover:text-purple-400 text-sm flex items-center transition-colors break-all"
                        >
                          <svg className="w-3.5 h-3.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                          <span className="truncate">{experience.website.replace(/^https?:\/\//, '')}</span>
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-[#0f0b1e]/90 backdrop-blur-xl rounded-2xl shadow-[0_0_40px_rgba(130,69,236,0.3)] border border-purple-900/50 lg:w-full w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto relative flex flex-col scrollbar-hide">
            <div className="flex justify-end p-4 absolute top-0 right-0 z-20">
              <button
                onClick={handleCloseModal}
                className="text-white text-2xl hover:text-white bg-black/40 hover:bg-red-500 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-lg"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col relative w-full h-full">
              {/* Header Image/Logo Gradient */}
              <div className="w-full h-32 bg-gradient-to-r from-purple-900/50 to-pink-900/50 flex items-center justify-center relative border-b border-purple-900/50">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-2xl overflow-hidden transform border-4 border-[#0f0b1e]">
                  <img
                    src={selectedExperience.img}
                    alt={selectedExperience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-6 sm:p-10 pt-8 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-1 tracking-tight">
                  {selectedExperience.role}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
                  <h4 className="text-lg font-semibold text-white">
                    {selectedExperience.company}
                  </h4>
                  <span className="hidden sm:inline text-gray-600">•</span>
                  <p className="text-sm font-bold text-gray-400">{selectedExperience.date}</p>
                </div>

                {selectedExperience.website && (
                  <a
                    href={selectedExperience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#8245ec] hover:text-purple-400 font-bold mb-6 transition-colors group"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                <div className="border-t border-gray-800/50 pt-6">
                  <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Description</h5>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {selectedExperience.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Key Skills & Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-purple-900/30 border border-purple-500/30 text-xs sm:text-sm font-semibold text-purple-300 rounded-lg px-3 py-1.5 shadow-[0_0_10px_rgba(130,69,236,0.1)] hover:bg-purple-800/40 hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


export default Experience;
