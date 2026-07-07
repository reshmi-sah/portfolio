import React from "react";
import { featuredProject } from "../../data/project";
import  Button  from "../../components/Button"

const FeaturedProject = () => {
  return (
    <section className="mb-20">

      <div
        className="grid lg:grid-cols-2 gap-5 sm:gap-10 items-center bg-[#0f0f1a] rounded-3xl p-3 sm:p-6 
        shadow-[inset_0_0_25px_rgba(168,85,247,0.4)]"
      >
    
        <div>
          <img
            src={featuredProject.image}
            alt={featuredProject.title}
            className="w-full rounded-xl sm:rounded-2xl border border-gray-700"
          />
        </div>

        
        <div className="space-y-1.5 sm:space-y-3">
          <p className="text-pink-500 font-medium animate-pulse ">
            Latest Project
          </p>

          <h2 className="text-xl sm:text-3xl font-[400] sm:font-[600] text-white ">
            {featuredProject.title}
          </h2>

          <p className="text-gray-300 text-[0.7rem] sm:text-[1rem]  ">
            {featuredProject.description}
          </p>

          
      <p className="text-[0.7rem] sm:text-[1rem] font-[500] text-white">
  {featuredProject.techStack.join(" • ")}
</p>

         
          <div className="flex items-center justify-between ">
           
            <Button 
             href={featuredProject.live}
             text="Live"
            />

            <Button 
              href={featuredProject.github}
              text="GitHub"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;