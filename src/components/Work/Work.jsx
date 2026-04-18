import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(showAll ? projects : projects.slice(0, 3)).map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center text-white bg-gradient-to-r from-purple-600 to-pink-500 py-3 px-8 font-bold rounded-full hover:opacity-90 transition transform hover:scale-105 shadow-[0_0_15px_rgba(130,69,236,0.6)]"
          >
            {showAll ? "View Less Projects" : "View More Projects"}
          </button>
        </div>
      )}

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-[#0f0b1e]/90 backdrop-blur-xl rounded-2xl shadow-[0_0_40px_rgba(130,69,236,0.3)] border border-purple-900/50 lg:w-full w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto relative flex flex-col scrollbar-hide">
            <div className="flex justify-end p-4 absolute top-0 right-0 z-20">
              <button
                onClick={handleCloseModal}
                className="text-white text-2xl hover:text-white bg-black/40 hover:bg-red-500 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-lg"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col relative w-full h-full">
              <div className="w-full flex justify-center bg-transparent border-b border-gray-800/50 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-56 sm:max-h-72 object-cover object-top rounded-t-2xl mask-image-bottom"
                  style={{ WebkitMaskImage: 'linear-gradient(to bottom, block 70%, transparent 100%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1e]/90 via-transparent to-transparent pointer-events-none"></div>
              </div>
              <div className="lg:px-10 lg:pb-10 lg:pt-2 px-6 pb-6 pt-4 relative z-10 flex flex-col">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 lg:text-lg text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-900/30 border border-purple-500/30 text-xs sm:text-sm font-semibold text-purple-300 rounded-lg px-3 py-1.5 shadow-[0_0_10px_rgba(130,69,236,0.1)] hover:bg-purple-800/40 hover:text-white transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 flex items-center justify-center relative p-[2px] rounded-xl overflow-hidden group hover:shadow-[0_0_20px_rgba(130,69,236,0.5)] transition-shadow duration-300"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl"></span>
                    <span className="relative flex items-center justify-center w-full h-full bg-[#0f0b1e] rounded-[10px] py-3 text-white font-semibold text-sm sm:text-base group-hover:bg-transparent transition-colors duration-300">
                      View Code
                    </span>
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl py-3 text-sm sm:text-base font-bold shadow-lg shadow-purple-500/30 hover:shadow-pink-500/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
