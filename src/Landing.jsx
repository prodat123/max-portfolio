import { faCss3, faHtml5, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Landing() {
  const skills = [
    { name: "ReactJS", icon: faReact },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "MySQL", icon: faDatabase },
    { name: "Firebase", icon: faFire },
    { name: "Python", icon: faPython },
  ];

  return (
    <div className="flex bg-gray-900 items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 w-full h-[95%] mt-20 max-w-6xl">
        
        {/* Profile Box */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 bg-orange-400 text-white p-6 rounded-2xl flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-2">Hi, I'm Maxwell :)</h1>
          <p className="text-sm">
            Passionate Fullstack Developer who loves building applications that merge APIs, databases, and sleek UI.
          </p>
        </div>
  
        {/* Skills Box */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-2 bg-gray-700 text-white p-6 rounded-2xl flex flex-col">
          <h2 className="text-xl font-semibold">Technologies I Use</h2>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-600 p-3 rounded-xl">
                <FontAwesomeIcon icon={skill.icon} className="text-lg mb-1" />
                <p className="text-xs">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Profile Image */}
        <div className="col-span-1 row-span-1 lg:row-span-2 bg-gray-800 rounded-2xl overflow-hidden">
          <img className="w-full lg:h-full object-cover" src="/assets/personal-pic.jpg" alt="Personal" />
        </div>
  
        {/* About Me Box */}
        <div className="col-span-1 row-span-1 flex items-center justify-center flex-col bg-gray-700 text-white p-6 rounded-2xl">
          <h2 className="text-lg font-semibold">About Me</h2>
          <p className="text-xs">
            Programmer looking to intern at a company that will provide me with the experience and skills required to build impactful products. 
          </p>
        </div>
  
        {/* Education Box */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-3 row-span-3 bg-gray-700 text-white p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <div className="space-y-2">
            <div className="bg-gray-600 p-3 rounded-xl flex justify-between">
              <div>
                <p className="font-semibold">Pasadena City College</p>
                <p className="text-xs">Associate's Degree: Computer Science</p>
                <p className="text-xs">GPA: 4.0</p>
              </div>
              <p className="text-gray-300 text-xs">Aug 2024 - Present</p>
            </div>
  
            <div className="bg-gray-600 p-3 rounded-xl flex justify-between">
              <div>
                <p className="font-semibold">Singapore Intercultural School PIK</p>
                <p className="text-xs">IB Diploma: 37</p>
              </div>
              <p className="text-gray-300 text-xs">June 2021 - June 2024</p>
            </div>
          </div>
          <h2 className="text-xl font-semibold my-2">Work Experience</h2>
          
          <div className="bg-gray-600 p-3 rounded-xl flex justify-between">
            <div>
              <p className="font-semibold">Web Developer</p>
              <p className="text-xs">BLB Marketplace - Offline</p>
            </div>
            <p className="text-gray-300 text-xs">September 2024 - Present</p>
          </div>
          <div className="bg-gray-600 p-3 rounded-xl flex justify-between mt-2">
            <div>
              <p className="font-semibold">Web Freelancer</p>
              <p className="text-xs">Freelancing - Remote</p>
            </div>
            <p className="text-gray-300 text-xs">June 2022 - Present</p>
          </div>
        </div>
  
        {/* Certifications Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-1 row-span-2 bg-gray-700 text-white p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Third Place Winner(FuturistFest 2024 X NASA Hackathon)</li>
            <li>Third Place Winner & Best Use(AI Winner of IngeniumSTEM Summer Hacks 2.0)</li>
          </ul>
        </div>
      </div>
    </div>
  );
  
}

export default Landing;
