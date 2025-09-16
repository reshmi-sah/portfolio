import React, { useEffect, useRef } from "react";
import Animation from "../components/Animation";


const About = () => {

  return (
  <section id="about" className="">
      <div className="sm:mt-24 mt-10 sm:mb-14 mb-10 relative">
      {/* background blobs */}
      <div className="absolute left-[35%] -top-16 w-96 h-[200px] animate-pulse bg-gradient-to-l from-orange-950 to-pink-950 opacity-30 blur-3xl"></div>
      {[
        "top-10 left-10",
        "top-[20rem] -left-14",
        "bottom-[20rem] -right-14",
        "bottom-0 right-32",
        "-bottom-7 left-[25rem]",
        "top-[50%] left-[50%]",
        "top-[50%] left-[60%] ",
        "top-[80%] left-[70%] ",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-[100px] h-[100px] bg-gradient-to-l from-orange-950 to-pink-950 blur-3xl rounded-full`}
        ></div>
      ))}

      {/* heading */}
      <h2 className="flex items-center justify-center text-[2.5rem] font-[400] bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        About me
      </h2>

      {/* content */}
      <div className="flex flex-col md:flex-row item-center justify-center space-x-16 mt-20">
        <div
          className="relative flex-shrink-0 
                       w-48 h-48     
                       sm:w-60 sm:h-60  
                       md:w-72 md:h-72  
                       lg:w-80 lg:h-80  
                       xl:w-96 xl:h-96"
        >
          <img
            src="./reshmipost9.jpg"
            alt="post"
            className="h-full w-full object-cover rounded-full border-[3px] border-gray-700 
            shadow-[0_0_25px_rgba(236,72,153,0.6),0_0_50px_rgba(147,51,234,0.3),0_0_70px_rgba(34,211,238,0.2)]"
          />
        </div>

<Animation variant="fade">
        <div
          className="right w-full flex-1 max-w-xl md:text-left space-y-4 sm:p-0 pt-5"
          // ref={aboutRef}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-[600] tracking-wider">
            Hello! My name is Reshmi Kumari
          </h1>
          <p className="text-xl sm:text-base md:text-lg lg:text-[22px] text-white leading-6 sm:leading-9">
            I am a Frontend Developer passionate about creating modern,
            responsive, and accessible web applications. I enjoy working with
            React, Tailwind CSS, and JavaScript to craft smooth user
            experiences. Currently, I’m learning advanced animation techniques
            and deepening my React skills. My long-term goal is to grow into a
            full-stack developer while contributing to meaningful projects. When
            I’m not coding, I love exploring new design inspirations and tech
            innovations.
          </p>
        </div>
        </Animation>
      </div>
    </div>
  </section>
  );
};

export default About;

