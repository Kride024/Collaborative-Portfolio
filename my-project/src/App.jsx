// src/App.jsx
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import AchievementsSection from "./AchievementSection";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <main className="container mx-auto px-4 py-8 mt-4 space-y-20">
        <section id="home">
          <HeroSection />
        </section>

       <section id="experience" className="min-h-screen">
  <Experience />
</section>
<section id="achievements">
<AchievementsSection/>
</section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <ContactSection/>
        </section>
      
      </main>
      <Footer/>
    </div>
  );
};

export default App;
