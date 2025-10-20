// src/ExperienceProjects.jsx

import React from 'react';
import Experience from './Experience'; // Assuming this file exists and exports Experience
import Projects from './Projects';   // Assuming this file exists and exports Projects

// This is the component that will be routed to the /experience path
const ExperienceProjects = () => {
  return (
    // You can apply a main wrapper style here if needed
    <div className="experience-and-projects-page">
      
      {/* 1. The Experience Component is rendered first */}
      <Experience />

      {/* 2. The Projects Component is rendered immediately after */}
      {/* Added some vertical spacing (py-16) to separate the two sections visually */}
      <div > 
        <Projects />
      </div>

    </div>
  );
};

export default ExperienceProjects;