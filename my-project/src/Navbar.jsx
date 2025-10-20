// src/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FileText, Home, Briefcase, Award, Folder, Mail } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isBlackBg, setIsBlackBg] = useState(false);

  const navItems = [
    { name: "Home", icon: Home },
    { name: "Experience", icon: Briefcase },
    { name: "Achievements", icon: Award },
    { name: "Projects", icon: Folder },
    { name: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.name.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          // Detect section when top is within 0px and 60% of viewport height
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= 0) {
            currentSection = item.name;
          }
        }
      });

      setActiveLink(currentSection);
      setIsBlackBg(currentSection === "Achievements");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ name }) => {
    const isActive = activeLink === name;
    let classes =
      "px-4 py-2 text-sm font-medium transition duration-200 rounded-lg hover:bg-gray-100 hover:text-gray-900";

    if (isActive) {
      classes += " bg-slate-100 text-gray-900 shadow-sm";
    } else {
      classes += " text-gray-400";
    }

    return (
      <a
        href={`#${name.toLowerCase()}`}
        className={classes}
        onClick={() => setActiveLink(name)}
      >
        {name}
      </a>
    );
  };

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-sm transition-colors duration-500 rounded-xl p-3 lg:p-4 border border-gray-100 ${
        isBlackBg
          ? "bg-black text-white shadow-lg border-gray-800"
          : "bg-white/95 text-gray-900 shadow-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between ">
        <div
          className={`text-3xl font-semibold tracking-tight ml-0 lg:ml-16 ${
            isBlackBg ? "text-white" : "text-gray-800"
          }`}
        >
          SM
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-grow justify-center space-x-2 xl:space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.name} name={item.name} />
          ))}
        </div>

        {/* Resume Button */}
        <button
          className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-xl shadow-lg transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-4 mr-0  lg:mr-16  ${
            isBlackBg
              ? "text-white bg-gray-800 hover:bg-gray-700 focus:ring-gray-600"
              : "text-white bg-gray-800 hover:bg-gray-700 focus:ring-blue-500/50"
          }`}
          onClick={() => console.log("Resume Download Clicked")}
        >
          <FileText className="w-4 h-4" />
          <span>Resume</span>
        </button>

        {/* Mobile Menu Placeholder */}
        <div className="lg:hidden">
          <button
            className={`p-2 rounded-lg ${
              isBlackBg
                ? "text-white hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            ...
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden mt-3 flex justify-around border-t pt-3 space-x-2 ${
          isBlackBg ? "border-gray-700" : "border-gray-200"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.name.toLowerCase()}`}
            className={`flex flex-col items-center p-1 text-xs font-medium rounded-lg transition-colors ${
              activeLink === item.name
                ? isBlackBg
                  ? "text-white bg-gray-800"
                  : "text-gray-900 bg-slate-100"
                : isBlackBg
                ? "text-gray-300 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
            onClick={() => setActiveLink(item.name)}
          >
            <item.icon className="w-4 h-4 mb-0.5" />
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
