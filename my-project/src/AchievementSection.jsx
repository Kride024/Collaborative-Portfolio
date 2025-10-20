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
      className="min-h-screen bg-slate-950 text-white py-20 px-6"
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
              title="1st Place, Amazon CSO Hackathon 2025"
              subtitle="Secured top prize in a competitive, organization-wide hackathon."
            />
            <Row
              icon={Medal}
              title="22nd, TCS Microsoft GenAI Hackathon"
              subtitle="Achieved a high rank among thousands in a major AI competition."
            />
            <Row
              icon={Medal}
              title="Silver Medalist, INEX-GYSC 2021"
              subtitle="Recognized for outstanding project work in a global science challenge."
            />
          </div>
        </Card>

        {/* Certifications */}
        <Card>
          <Header icon={BadgeCheck} colorClass="bg-blue-500/20 text-blue-400" title="Certifications" />
          <div className="space-y-6 text-slate-300">
            <Row
              icon={BadgeCheck}
              title="AZ-900: Azure Fundamentals"
              subtitle="Microsoft"
            />
            <Row
              icon={BadgeCheck}
              title="Machine Learning"
              subtitle="Coursera (Stanford)"
            />
            <Row
              icon={BadgeCheck}
              title="The Web Developer Bootcamp"
              subtitle="Udemy"
            />
          </div>
        </Card>

        {/* Key Technologies */}
        <Card>
          <Header icon={Layers} colorClass="bg-emerald-500/20 text-emerald-400" title="Key Technologies" />
          <div className="space-y-6 text-slate-300">
            <Row
              icon={Globe}
              title="Web & Development"
              subtitle="HTML, CSS, JS, TS"
            />
            <Row
              icon={Atom}
              title="React Ecosystem"
              subtitle="React, Next.js, Redux"
            />
            <Row
              icon={Server}
              title="Backend"
              subtitle="Node.js, Express, .NET"
            />
            <Row
              icon={Smartphone}
              title="iOS Development"
              subtitle="Swift, SwiftUI, UIKit"
            />
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
