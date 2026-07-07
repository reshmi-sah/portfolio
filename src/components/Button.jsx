import React from 'react'

const Button = ({ href, text }) => {
  return (
    <>
    <div>
         <a
              href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:h-10 sm:w-28 h-7 w-16 flex items-center justify-center sm:text-[1.1rem] text-[0.8rem] font-[500] rounded-3xl text-white
                               bg-gradient-to-r from-pink-800 via-purple-800 to-cyan-800
                               bg-[length:200%_100%] bg-left hover:bg-right
                               transition-all duration-700 ease-in-out"
                  >
                    {text}
                  </a>
    </div>
    </>
  )
}

export default Button
