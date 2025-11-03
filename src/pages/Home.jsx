import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Contact from "./Contact";
import About from "./About";

import Projects from "./Projects";

const Home = () => {
  return (
    <>
     <section className="min-h-[100vh] bg-[#0f172a] text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 lg:px-20 gap-10 py-20 ">
      
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Hi, I'm Sam Jebaraj👋
        </h1>
        <h2 className="text-emerald-300 text-2xl mt-2">
          Junior Data Analyst
        </h2>
        <p className="text-gray-200 mt-4 max-w-md">
         Passionate Data Analyst who transforms raw data into powerful stories through analytics and visualization tools.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start mt-6 text-2xl">
          
          <a href="https://www.linkedin.com/in/samjebaraj-m19/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
            <FaLinkedin />
          </a>
        </div>

        {/* Resume Button */}
        {/* <a
          href="file:///D:/dow/SAM.%20Resume%20(5).pdf"
          download
          className="inline-block mt-6 px-6 py-2 bg-emerald-300 text-[#0f172a] font-semibold rounded shadow-md hover:bg-cyan-400 transition"
        >
          View Resume
        </a> */}
      </div>

      {/* Developer Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="https://i.pinimg.com/originals/e1/f3/41/e1f3413bf5036045713341394f617225.gif"
          alt="Developer Avatar"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
    <About/>
    
    <Projects/>
    <Contact/>
    </>
  );
};

export default Home;
