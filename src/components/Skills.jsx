import React from "react";
import { motion } from "framer-motion";
import Animation from "../components/Animation";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import reactLogo from "../assets/atom.png";
import tailwind from "../assets/porttail.png";
import bootstrap from "../assets/bootstrap.png";
import git from "../assets/code-branch.png";
import github from "../assets/social1.png";
import respon from "../assets/responsive.png";
import vite from "../assets/portvite.png";

const skills = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: js },
  { name: "React", logo: reactLogo },
  { name: "Tailwind", logo: tailwind },
  { name: "Bootstrap", logo: bootstrap },
  { name: "Git", logo: git },
  { name: "GitHub", logo: github },
  { name: "Responsive", logo: respon },
  { name: "Vite", logo: vite },
];

const Skills = () => {
  return (
   <section id="skills">
     <div className="sm:mt-32 mt-10 sm:mb-32 mb-0 relative">
      <div className="absolute left-[35%] -top-16 w-96 h-[200px] animate-pulse bg-gradient-to-l from-orange-950 to-pink-950 opacity-30 blur-3xl"></div>
      <h2 className="flex items-center justify-center mt-20 mb-20 text-[2.5rem] font-[400] bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        Skills
      </h2>

   
      <div className="flex flex-wrap items-center justify-center sm:gap-15 md:gap-15 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
               initial={{ opacity: 0, scale: 0.8 }}    
        whileInView={{ opacity: 1, scale: 1 }}     
        viewport={{ once: false, amount: 0.5 }}    
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
          whileHover={{ scale: 1.05, y: -1 }} 
            className="h-36 w-36 p-3 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md rounded-2xl shadow-[inset_0_0_25px_rgba(168,85,247,0.7)]"
          >
             <Animation threshold={0.4} variant="fade">
            <div className="h-16 w-16 flex items-center justify-center">
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-full w-full object-cover"
              />
            </div>
              </Animation>
            <p className="text-xl mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
   </section>
  );
};

export default Skills;
