// src/Navbar.jsx - Responsive Split Layout (Hero = black bg, DB left, Resume right, darker Home)
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

  // Detect active section + choose black/white navbar
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.name.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= 0) {
            currentSection = item.name;
          }
        }
      });

      setActiveLink(currentSection);
      // ✅ Make navbar black over Hero ("Home") and Achievements
      setIsBlackBg(currentSection === "Home" || currentSection === "Achievements");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // navItems not needed in deps

  const DesktopNavLink = ({ name }) => {
    const isActive = activeLink === name;

    // Slightly darker Home text when not active on light navbar
    const darkerHomeWhenLight =
      !isActive && !isBlackBg && name === "Home" ? " text-gray-700" : "";

    let classes = "px-4 py-2 text-sm font-medium rounded-lg transition duration-200";

    if (isActive) {
      classes += isBlackBg
        ? " bg-gray-700 text-white shadow-sm"
        : " bg-slate-100 text-gray-900 shadow-sm";
    } else {
      classes += isBlackBg
        ? " text-gray-300 hover:bg-gray-800 hover:text-white"
        : " text-gray-400 hover:bg-gray-100 hover:text-gray-900";
      classes += darkerHomeWhenLight; // apply darker for Home on light bg
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
    <>
      {/* TOP HEADER */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-sm transition-colors duration-500 border-b ${
          isBlackBg
            ? "bg-black/95 text-white shadow-lg border-gray-800"
            : "bg-white/95 text-gray-900 shadow-md border-gray-100"
        }`}
      >
        <div 
            // MODIFIED: Removing max-w-7xl and applying aggressive padding for edge-alignment on wide screens.
            // px-6 on mobile, px-10 on large, px-24 on extra large, and px-32 on 2xl.
            className="w-full mx-auto flex items-center justify-between px-6 py-3 lg:px-10 lg:py-4 xl:px-24 2xl:px-32"
        >
          {/* Logo (DB) — moved left tight */}
          <div className={`text-3xl font-semibold tracking-tight ${isBlackBg ? "text-white" : "text-gray-800"}`}>
            KR
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex flex-grow justify-center space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <DesktopNavLink key={item.name} name={item.name} />
            ))}
          </nav>

          {/* Resume button — pinned to right */}
          <button
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-xl shadow-lg transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-4 ${
              isBlackBg
                ? "text-white bg-gray-700 hover:bg-gray-600 focus:ring-gray-500/50"
                : "text-white bg-gray-800 hover:bg-gray-700 focus:ring-blue-500/50"
            }`}
            onClick={() => {
              // Replace with your resume URL if you want an actual download/open
              const url = "https://drive.google.com/file/d/1ZzkrGm0hOHFQpHWDG1O_-MromqKPIMfc/view?usp=sharing";
              window.open(url, "_blank", "noopener,noreferrer");
            }}
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>
      </header>

      {/* MOBILE BOTTOM NAV (Unchanged, as requested) */}
      <nav
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden flex justify-around border-t pt-2 pb-2 space-x-2 backdrop-blur-md ${
          isBlackBg ? "bg-black/95 border-gray-700" : "bg-white/95 border-gray-200"
        }`}
      >
        {navItems.map((item) => {
          const isActive = activeLink === item.name;
          const darkerHomeWhenLight =
            !isActive && !isBlackBg && item.name === "Home" ? " text-gray-700" : "";
          const base =
            "flex flex-col items-center p-1 text-xs font-medium rounded-lg transition-colors";
          const color = isActive
            ? isBlackBg
              ? "text-white bg-gray-800"
              : "text-gray-900 bg-slate-100"
            : isBlackBg
            ? "text-gray-300 hover:text-white hover:bg-gray-800"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50";

        return (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className={`${base} ${color}${darkerHomeWhenLight}`}
              onClick={() => setActiveLink(item.name)}
            >
              <item.icon className="w-4 h-4 mb-0.5" />
              {item.name}
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
