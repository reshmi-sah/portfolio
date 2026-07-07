import React, {useRef} from "react";
import FeaturedProject from "./FeaturedProject";
import ProjectSlider from "./ProjectSlider";


const Project = () => {
  

  return (
    <section id="projects" >
      <div className="mt-10 mb-20 relative px-4 md:px-8 lg:px-12 ">
        <div className="absolute left-[35%] -top-16 w-96 h-44 animate-pulse bg-gradient-to-l from-orange-950 to-pink-950 opacity-30 blur-3xl"></div>

        <h2 className="text-center mt-20 mb-20 text-[2.5rem] font-[400] bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>

  <FeaturedProject />

      

      <ProjectSlider />

      
      </div>
    </section>
  );
};

export default Project;


