import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award, Medal, // achievements
  BadgeCheck, // header for Certifications
  Layers, // header for Key Tech
  Globe, Atom, Server, Smartphone, // rows in Key Tech
} from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-900/95 border border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition ${className}`}>
    {children}
  </div>
);

const Header = ({ icon: Icon, colorClass, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className={`p-2 rounded-full ${colorClass}`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-2xl font-semibold">{title}</h3>
  </div>
);

const Row = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-200">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="font-semibold text-slate-100">{title}</p>
      <p className="text-sm text-slate-400">{subtitle}</p>
    </div>
  </div>
);

export default function AchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="achievements"
      ref={ref}
      className="bg-slate-950 text-white py-20 px-6" // 👈 Fixed
    >
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-3">
          Skills & Accolades
        </h2>
        <p className="text-slate-400 text-lg">
          A summary of my qualifications, awards, and technical expertise.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="grid max-w-6xl mx-auto gap-8 md:grid-cols-3"
      >
        {/* Achievements */}
        <Card>
          <Header icon={Award} colorClass="bg-yellow-500/20 text-yellow-400" title="Achievements" />
          <div className="space-y-6 text-slate-300">
            <Row
              icon={Medal}
              title="Selected for GDSC 2025 Solution Challenge"
              subtitle="Attended Prestigious Lucknow Bootcamp (Top Regional Qualifier)."
            />
            <Row
              icon={Medal}
              title="Top 400, Build with India Hackathon 2025 "
              subtitle="Showcasing superior problem-solving skills and rapid prototyping ability."
            />
            <Row
              icon={Medal}
              title="Technical Pipeline Architect & DSA/CP Program Lead "
              subtitle="Personally instructing and preparing 400+ junior engineers for competitive technical interviews."
            />
          </div>
        </Card>

        {/* Certifications */}
        <Card>
          <Header icon={BadgeCheck} colorClass="bg-blue-500/20 text-blue-400" title="Certifications" />
          <div className="space-y-6 text-slate-300">
            <Row
              icon={BadgeCheck}
              title="GDSC'25 Solution Challenge "
              subtitle="Google"
            />
            <Row
              icon={BadgeCheck}
              title="GraphTheory Programming Camp"
              subtitle="AlgoUniversity"
            />
            <Row
              icon={BadgeCheck}
              title="Loreal sustainability challenge "
              subtitle="L'Oréal"
            />
             <Row
              icon={BadgeCheck}
              title="Frontend Battle 2.0"
              subtitle="Web and Design Society - IIT Bhubaneswar"
            />
          </div>
        </Card>

        {/* Key Technologies */}
        <Card>
          <Header icon={Layers} colorClass="bg-emerald-500/20 text-emerald-400" title="Key Technologies" />
          <div className="space-y-6 text-slate-300">
            <Row
              icon={Globe}
              title="Frontend & UI Engineering"
              subtitle="React.js, JavaScript, Tailwind CSS, Figma, Material Design"
            />
            <Row
              icon={Atom}
              title="Backend & Core Logic"
              subtitle="Node.js, Express.js, Python, C/C++, RESTful API Design, WebSockets"
            />
            <Row
              icon={Server}
              title="Data Management & Persistence"
              subtitle="MySQL, MongoDB, Redis (Caching), Amazon S3"
            />
            <Row
              icon={Smartphone}
              title="DevOps & Specialized Tech"
              subtitle="GitHub Actions (CI/CD), Docker, WebRTC, Git/GitHub, Gradle"
            />
          </div>
        </Card>
      </motion.div>
    </section>
  );
}