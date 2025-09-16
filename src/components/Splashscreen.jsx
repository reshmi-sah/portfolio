import React, { useEffect, useRef } from "react";
import Animation from "../components/Animation";


export default function SplashScreen() {

  return (
   <>
   <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {[
        "top-10 left-10",
        "top-[20rem] -left-14",
        "bottom-[20rem] -right-14",
        "bottom-0 right-32",
        "-top-3 left-[45rem]",
        "-bottom-7 left-[25rem]",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-[100px] h-[100px] bg-gradient-to-b from-pink-400 to-cyan-800 blur-3xl rounded-full`}
        ></div>
      ))}
     <div className="flex items-center justify-center min-h-screen">
      <Animation variant="scroll">
        <div 
         className="flex items-center justify-center h-[80px] w-[80px]  sm:h-[130px] sm:w-[130px] p-1 rounded-full bg-gradient-to-t from-red-900 via-pink-800 to-orange-800  ">
             <img src="./portlogo.jpg" 
             alt="logo"
             className="rounded-full h-full w-full" />
        </div>
        </Animation>
     </div>
   </div>
   </>
  );
}
