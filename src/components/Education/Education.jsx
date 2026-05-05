import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">EDUCATION</h2>
        <div className="w-20 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-4 transform sm:-translate-x-1/2 w-1 bg-purple-500/30 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >


            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-5 sm:p-8 rounded-2xl shadow-2xl border border-white/10 bg-gray-900/80 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-12 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-300 font-semibold">
                      {edu.school}
                    </h4>
                    {edu.website && (
                      <a 
                        href={edu.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#8245ec] hover:text-purple-400 text-sm flex items-center transition-colors break-all mt-1"
                      >
                        <svg className="w-3.5 h-3.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        <span className="truncate">{edu.website.replace(/^https?:\/\//, '')}</span>
                      </a>
                    )}
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">{edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
              
              {edu.colleges && edu.colleges.length > 0 && (
                <div className="mt-4 flex flex-col space-y-3">
                  {edu.colleges.map((college, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-[#0d0a20] p-3 rounded-lg border border-gray-700">
                      <img src={college.logo} alt={college.name} className="w-10 h-10 rounded-full object-cover bg-white p-0.5 mt-1 flex-shrink-0" />
                      <a href={college.link} className="text-gray-300 hover:text-[#8245ec] hover:underline text-sm break-words" target="_blank" rel="noreferrer">
                        {college.name}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
