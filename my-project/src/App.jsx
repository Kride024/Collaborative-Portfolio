// src/App.jsx
import HeroSection from "./HeroSection.jsx";
import AchievementsSection from "./AchievementSection.jsx";
import ContactSection from "./ContactSection.jsx";
import Project from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export default function App() {
  return (
    <>
    <Navbar/>
    
  <HeroSection />


      {/* Experience */}

      <section id="experience">
     <Experience />
   </section>

      {/* Achievements */}
     <section id="achievements">
     <AchievementsSection/>
     </section>

      {/* Projects */}
      <section id="projects">
         <Project />
      </section>
     

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
        <Footer />
    </>
  );
}