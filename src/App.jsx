import React, { useEffect, useState } from "react";
import SplashScreen from "./components/Splashscreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 sec
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <div className="text-white">
      <Navbar />
      <div className=" sm:mx-[4.5rem] mx-4">
         <div className="mt-20 sm:mt-32"><Home /></div>
      
      <About />
      <Skills />
      <Project />
      <Contact />
      </div>
      <Footer />
    </div>
  );
}
