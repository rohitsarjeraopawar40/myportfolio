import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt'
import profile from '../../assets/profile2.png';


const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4 leading-tight">
            Rohit Pawar
          </h2>
          {/* Typewriter effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span style={{ color: "#8245ec", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "Web Developer",
                  "SpringBoot Dev",
                  "Java Developer",
                  "Coder",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* about me paragraph  */}
          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Java full-stack developer with knowledge in building modern
            web applications using React.js and Spring Boot. Though I have no
            professional experience yet, I am passionate about learning and
            building real-world projects to improve my skills and become
            industry-ready.
          </p>
          {/* resume button  */}
          <a
            href="https://docs.google.com/document/d/1Gkw1EvFVzn6WAgPUjvQQu10Y7KboHg4I/edit?usp=sharing&ouid=104132238736686882792&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-110"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 5px #a855f7",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* right side  */}
        <div className="md:w-1/2 flex justify-center md:justify-end ">
        <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full" tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
        >
            <img src={profile} alt="Rohit Pawar" className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" loading="lazy" />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
