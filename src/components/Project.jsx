import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import { IoCaretForwardOutline } from "react-icons/io5";
import { IoCaretBack } from "react-icons/io5";

const projects = [
   {
    id: 1,
    title: "Custom-products",
    skill: "React.js, Tailwind CSS",
    img: project4,
    github: "https://github.com/reshmi-sah/custom-products",
    live: "https://custom-products.netlify.app/",
  },
  {
    id: 2,
    title: "Dashboard",
    skill: "React.js, Tailwind CSS",
    img: project5,
    github: "https://github.com/reshmi-sah/Dashboard",
    live: "https://animated-manatee.netlify.app/",
  },
  {
    id: 3,
    title: "Social media website (Bebo)",
    skill: "React.js, Tailwind CSS",
    img: project1,
    github: "https://github.com/reshmi-sah/Social-media",
    live: "https://meet-social.netlify.app/",
  },
  {
    id: 4,
    title: "E-Commerce (macy)",
    skill: "React.js, Tailwind CSS",
    img: project2,
    github: "https://github.com/reshmi-sah/macy-ecommerce",
    live: "https://shop-with-macy.netlify.app/",
  },
  {
    id: 5,
    title: "Weather App",
    skill: "React.js, API",
    img: project3,
    github: "https://github.com/reshmi-sah/Weather",
    live: "https://weather-city-country.netlify.app/",
  },

];

const Project = () => {

  const scroll = (dir) => {
    const el = document.getElementById("projectScroll");
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -el.clientWidth : el.clientWidth,
      behavior: "smooth",
    });
  };



  return (
    <section id="projects">
      <div className="mt-10 mb-20 relative px-4 md:px-8 lg:px-12 ">
        <div className="absolute left-[35%] -top-16 w-96 h-44 animate-pulse bg-gradient-to-l from-orange-950 to-pink-950 opacity-30 blur-3xl"></div>

        <h2 className="text-center mt-20 mb-20 text-[2.5rem] font-[400] bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>

        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
          bg-gradient-to-r from-pink-800 via-purple-800 to-cyan-800
      bg-[length:200%_100%] bg-left  hover:bg-right flex items-center justify-center
      transition-all duration-700 ease-in-out text-white h-10 w-10  text-2xl rounded-full"
        >
          <IoCaretBack />
        </button>

        <div
          id="projectScroll"
          className="flex items-center  gap-10 px-8 md:px-10
           overflow-x-scroll scroll-smooth  scrollbar-hide snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="snap-start sm:max-w-sm  p-4 shrink-0 bg-[#0f0f1a] transition-transform hover:scale-105 duration-300
              shadow-[inset_0_0_25px_rgba(168,85,247,0.7),inset_0_0_25px_rgba(236,72,153,0.6)] rounded-2xl"
            >
              <img
                src={project.img}
                alt={project.title}
                className="sm:w-80 sm:h-62 w-64 h-40 object-cover object-center rounded-2xl sm:m-3 m-0"
              />
              <p className="sm:text-[1.4rem] text-[1rem] mx-2 font-[500] text-gray-300 ">
                {project.title}
              </p>
              <p className="sm:text-[18px] text-[12px] mx-2 font-[500] text-white">
                {project.skill}
              </p>

              <div className="flex items-center justify-between mx-4 my-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:h-10 sm:w-28 h-7 w-16 flex items-center justify-center sm:text-[1.1rem] text-[0.8rem] font-[500] rounded-3xl text-white
                             bg-gradient-to-r from-pink-800 via-purple-800 to-cyan-800
                             bg-[length:200%_100%] bg-left hover:bg-right
                             transition-all duration-700 ease-in-out"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:h-10 sm:w-28  h-7 w-16 flex items-center justify-center sm:text-[1.1rem] text-[0.8rem] font-[500] rounded-3xl text-white
                             bg-gradient-to-r from-pink-800 via-purple-800 to-cyan-800
                             bg-[length:200%_100%] bg-left hover:bg-right
                             transition-all duration-700 ease-in-out"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 2xl:hidden 
         bg-gradient-to-r from-pink-800 via-purple-800 to-cyan-800
      bg-[length:200%_100%] bg-left  hover:bg-right flex items-center justify-center
      transition-all duration-700 ease-in-out text-white h-10 w-10  text-2xl rounded-full"
        >
          <IoCaretForwardOutline />
        </button>
      </div>
    </section>
  );
};

export default Project;


