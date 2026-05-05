import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 relative z-10"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hit Dungrani
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'MERN Stack Developer',
                'Fullstack Developer',
                'Web Developer',
                'Creative Developer'
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-6 mt-8 leading-relaxed">
            I am a dedicated MERN Stack Developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I enjoy solving real-world problems, developing responsive applications, and continuously learning new technologies to improve my skills.
          </p>

          <div className="text-left mb-10">
            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mt-6 mb-2 uppercase tracking-wide">Languages</h3>
            <ul className="list-disc list-inside text-gray-400 text-sm sm:text-lg mb-6 leading-relaxed">
              <li>English</li>
              <li>Hindi</li>
              <li>Gujarati</li>
            </ul>

            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mt-6 mb-2 uppercase tracking-wide">ACHIEVEMENT</h3>
            <p className="text-gray-400 text-sm sm:text-lg leading-relaxed">
              Secured 2nd position in an IT Debate Competition, showcasing communication and technical knowledge
            </p>
          </div>
          {/* Resume Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-5">
            <a
              href="/resume/resume.pdf"
              download="Hit_Dungrani_Resume.pdf"
              className="inline-block text-center text-white py-2.5 px-6 rounded-full text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 10px rgba(130, 69, 236, 0.3)',
              }}
            >
              DOWNLOAD CV
            </a>
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center text-white py-2.5 px-6 rounded-full text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105 border-2 border-purple-500 hover:bg-purple-900/40"
            >
              VIEW RESUME
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
          <Tilt
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700/50 rounded-full p-2"
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
            glareBorderRadius="50%"
          >
            <img
              src={"/images/profile.jpg"}
              alt="Hit Dungrani"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
