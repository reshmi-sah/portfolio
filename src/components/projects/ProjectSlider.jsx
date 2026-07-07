import React, { useRef } from 'react'
import { IoCaretForwardOutline } from "react-icons/io5";
import { IoCaretBack } from "react-icons/io5";
import { projects } from '../../data/project.js'
import Button from '../../components/Button.jsx'

const ProjectSlider = ()=> {

    const scrollRef = useRef(null)
    const scroll = (direction) => {
      console.log(scrollRef.current);
    
      if (!scrollRef.current) return;
    
      scrollRef.current.scrollBy({
        left:
          direction === "left"
            ? -scrollRef.current.clientWidth
            : scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    };

  return (
  <>
   <div className='relative'>

      <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10  cursor-pointer
              bg-gradient-to-r from-pink-800 via-purple-800 to-cyan-800
          bg-[length:200%_100%] bg-left  hover:bg-right flex items-center justify-center
          transition-all duration-700 ease-in-out text-white h-10 w-10  text-2xl rounded-full"
            >
              <IoCaretBack />
            </button>

      <div
              ref={scrollRef}
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
                 
                  <Button 
                    href={project.github}
                    text='GitHub'
                  />

                  <Button 
                  href={project.live}
                  text="Live"
                  />
                </div>
              </div>
            ))}
          </div>

            <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 2xl:hidden 
                   bg-gradient-to-r from-pink-800 via-purple-800 to-cyan-800 cursor-pointer
                bg-[length:200%_100%] bg-left  hover:bg-right flex items-center justify-center
                transition-all duration-700 ease-in-out text-white h-10 w-10  text-2xl rounded-full"
                  >
                    <IoCaretForwardOutline />
                  </button>
   </div>
  </>
  )
}

export default ProjectSlider
