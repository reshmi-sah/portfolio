
import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/30 backdrop-blur-md text-white px-6 md:px-10 py-2 shadow-lg">
      {/* Logo */}
      <div className="sm:h-[60px] sm:w-[60px] h-[35px] w-[35px] ">
        <img src="./portlogo2.png" alt="logo" className="w-full h-full" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10 text-xl">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            activeClass="bg-gradient-to-b from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold"
            className="cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleNav}>
        {navOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`absolute top-full left-0 w-full bg-black/90 backdrop-blur-md overflow-hidden md:hidden transition-all duration-500 ease-in-out ${
          navOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="text-yellow-400 font-bold"
              className="cursor-pointer text-xl"
              onClick={() => setNavOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
