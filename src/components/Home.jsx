import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion} from "framer-motion";
import { Link } from "react-scroll";
import link from '../assets/linkedin.png'
import github from '../assets/social1.png'


const Home = () => {

  const headref = useRef(null);

  useEffect(() =>{
    gsap.fromTo(
      headref.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale:1,
        rotate: 0,
        duration: 1.5,
      ease: "back.out(1.4)"
      }
    )
  }, []);

  return (
   <>
    <section id='home'>


       <div className='flex flex-col md:flex-row relative justify-between items-center gap-4 '>
      <div className='absolute -z-10 -top-20 left-6 bg-gradient-to-r from-pink-700 to-sky-700 blur-3xl md:h-[30rem] md:w-96 h-[20rem] w-60 opacity-30 rounded-full '></div>
        <div className='pt-2 flex flex-col max-w-xl lg:space-y-10 md:space-y-6 space-y-3 '>
            <h1
            ref={headref}
             className='text-4xl md:text-5xl lg:text-7xl font-[600] leading-tight text-white'>
               <span className='relative'>
                 Welcome to my 
                 <span className='absolute left-0 bottom-0 w-full h-4 lg:h-6 md:h-4 bg-pink-400 -z-10'></span>
               </span>
                <br /> 
                <span className=' bg-gradient-to-r form bg-pink-900 to-purple-700 bg-clip-text text-transparent'>
                Portfolio!</span>
                </h1>

                  <div className='flex items-center gap-5 '>
                <h1 className='lg:text-3xl md:text-2xl text-[20px] '>connect with me:</h1>
                    <div className='flex items-center gap-5'>
                        <div>
                            <motion.a 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.85 }}
                               href="https://github.com/reshmi-sah" 
                               target="_blank" 
                              rel="noopener noreferrer"
                               className="inline-block p-0.5 text-white rounded-full shadow-lg hover:opacity-90 transition"
                             >
                              <img src={github} alt="github" 
                               className='lg:h-14 lg:w-14 h-12 w-12 object-cover rounded-full'
                              />
                           </motion.a>
                        </div>
                           <div>
                            <motion.a 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.85 }}
                               href="https://www.linkedin.com/in/reshmi-kumari-311217380/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-block p-0.5 text-white shadow-lg hover:opacity-90 rounded-[2px]"
                             >
                            <img src={link} alt="link" 
                               className='lg:h-12 lg:w-12 h-10 w-10 object-cover rounded-[2px] '
                              />
                           </motion.a>
                        </div>
                    </div>
                </div>
                 <div className="flex items-center gap-8">
  <Link
  to="contact"
  smooth={"easeInOutQuart"}   // 👈 easing function
  duration={1200}             // 👈 increase time for slower scroll
  offset={-80}
>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.85 }}
    className="sm:h-12 sm:w-32 h-10 w-24 flex items-center justify-center sm:text-[1.3rem] text-[1rem] font-[500] rounded-3xl text-white
      bg-gradient-to-r from-pink-800 via-purple-800 to-cyan-800
      bg-[length:200%_100%] bg-left
      hover:bg-right
      transition-all duration-700 ease-in-out"
  >
    Hire Me
  </motion.button>
</Link>


  <motion.a 
  href="/reshmi-resume.pdf"   
  target="_blank" 
  rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.85 }}
    className="sm:h-12 sm:w-32 h-10 w-24 flex items-center justify-center sm:text-[1.3rem] text-[1rem] font-[500] rounded-3xl text-white
      bg-gradient-to-r from-pink-800 via-purple-800 to-cyan-800
      bg-[length:200%_100%] bg-left
      hover:bg-right
      transition-all duration-700 ease-in-out"
  >
 Resume
</motion.a>

</div>
        </div>

        <div className=' relative sm:mt-0 mt-5'>
                <div className="absolute inset-0 rounded-full -z-10 blur-3xl opacity-70 animate-pulse  bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500"></div>
            <img src="./download.jpeg" alt="image"
             className='lg:h-96 lg:w-96 md:h-72 md:w-72 h-64 w-64 object-cover rounded-full z-10 border-[3px] border-gray-800 '
            />
        </div>
     </div>
    </section>

   </>
  )
}

export default Home
