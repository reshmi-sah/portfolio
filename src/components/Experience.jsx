import React from 'react'
import Animation from "../components/Animation";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer ",
    intership: "Internship",
    company: "PLYM Games",
    place: "New Delhi, India",
    duration: "Jan 2026 - April 2026",
    type: "Remote",
    time: "3months",
    description: [
      "Developed responsive UI using React.js and Tailwind CSS",
      "Built scroll-based animations using GSAP & ScrollTrigger",
      "Created reusable components for scalable design",
      "Improved user experience with modern UI techniques"
    ]
  },

   
];

const Experience = () => {
  return (
      <>
 <section id="experience">
      <div className="sm:mt-32 mt-10 sm:mb-32 mb-10 relative">

        <div className="absolute left-[35%] -top-16 w-96 h-[200px] animate-pulse bg-gradient-to-l from-orange-950 to-pink-950 opacity-30 blur-3xl"></div>

        <h2 className="text-center mt-20 mb-20 text-[2.5rem] font-[400] bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>

    <Animation variant="fade">
        <div className="flex flex-col gap-10 px-6 max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl bg-transparent
              shadow-[inset_0_0_25px_rgba(168,85,247,0.7),inset_0_0_25px_rgba(236,72,153,0.6)]"
            >
              {/* Top Section */}
              

              <div className="flex justify-between items-center flex-wrap gap-3">
            
              <p className="text-gray-300 mt-1 text-2xl ">
                {exp.company} 
                <span className='text-[1rem] '> ({exp.place}) </span>
              </p>
                <span className="text-sm text-gray-400">
                  {exp.duration}
                </span>
              </div>

 <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r form bg-pink-900 to-purple-700 bg-clip-text text-transparent">
                  {exp.role}
                  <span className='text-[18px]'> ({exp.intership}) </span>
                </h3>

                <p className=' felx items-center text-gray-300 text-[1rem]'>
                    {exp.type}
                   <span className='pl-2'> ( {exp.time} )</span>
                </p>

              {/* Description */}
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-pink-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </Animation>

      </div>
    </section>
</>
  )
}

export default Experience
