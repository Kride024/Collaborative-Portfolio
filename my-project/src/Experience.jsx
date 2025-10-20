// src/Experience.jsx
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/* -------------------- DATA -------------------- */
const experienceData = [
  {
    icon: "briefcase",
    title: "System Development Engineer",
    company: "Amazon",
    date: "Feb 2025 - Present",
    details: [
      "Engineered an automation script to remove deprecated major versions from service version sets, reducing dependency-related risks and cutting the associated operational backlog by 10%.",
      "Orchestrated a large-scale migration of critical backend services from JDK 8 to JDK 17, achieving up to a 15% increase in application throughput.",
      "Developed key features for an internal operations portal using AWS Lambda, SNS, and DynamoDB to provide real-time visibility into the team's operational backlog.",
      "Resolved critical blockers in CI/CD workflows to achieve full continuous deployment, accelerating the team's release-to-production cycle.",
    ],
    tags: ["AWS", "Java (JDK 17)", "CI/CD", "React", "Terraform", "DynamoDB"],
  },
  {
    icon: "fileText", // also supports "file-text"
    title: "Systems Engineer",
    company: "TATA Consultancy Services",
    date: "June 2023 - Feb 2025",
    details: [
      "Engineered a performance overhaul of a critical Microsoft library using React, resulting in an 80% reduction in component load times.",
      "Spearheaded the development of custom UI features for the Microsoft Dynamics 365 platform, using React and TypeScript to deliver significant enhancements.",
      "Delivered key features for Microsoft Ignite's high-traffic video player (viewed by 400,000+ attendees), implementing multi-language support and robust CDN integration.",
    ],
    tags: ["TypeScript", "React", "Microsoft Dynamics 365", "Azure", ".NET Core"],
  },
  {
    icon: "smartphone",
    title: "iOS Developer",
    company: "AI Droid",
    date: "Feb 2023 - June 2023",
    details: [
      "Engineered and launched multiple iOS applications leveraging both UIKit and SwiftUI, driving app success to over 10,000 impressions.",
      "Maintained an exceptional 4.8-star average rating on the App Store, showcasing strong user satisfaction and market traction.",
      "Pioneered integration of Generative AI and deep learning models using Apple's Core ML framework to deliver innovative features.",
    ],
    tags: ["Swift", "SwiftUI", "UIKit", "Core ML", "MongoDB"],
  },
];

/* ------------- Minimal inline SVG icons (no extra deps) ------------- */
const icons = {
  briefcase: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="6" width="18" height="15" rx="2" />
      <path d="M17 10v-.3C17 6.13 15.22 4 13 4h-2C8.78 4 7 6.13 7 9.7V10" />
      <path d="M12 17v-4" />
    </svg>
  ),
  fileText: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 1-2 2h-4" />
      <path d="M10 12h6" />
      <path d="M10 16h6" />
    </svg>
  ),
  "file-text": (props) => icons.fileText(props),
  smartphone: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
};

/* -------------------- ITEM -------------------- */
function TimelineItem({ data, isLast, index }) {
  const Icon = icons[data.icon] || icons.briefcase;
  const ref = React.useRef(null);

  // progress 0→1 as this item enters the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 30%"], // tweak feel
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });

  return (
    <div
      ref={ref}
      className="flex relative w-full lg:w-4/5 xl:w-2/3 mx-auto px-4"
    >
      {/* Left rail (icon + animated line) */}
      <div className="absolute left-0 top-0 h-full flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-black text-white shadow-xl"
        >
          <Icon className="h-5 w-5 text-white" />
        </motion.div>

        <motion.div
          style={{ scaleY: lineScale, transformOrigin: "top" }}
          className={`-mt-1 w-[4px] rounded-b-lg bg-gray-300 ${isLast ? "h-[calc(100%-3rem)]" : "flex-grow"}`}
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ x: -18, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
        className="flex-grow pl-14 md:pl-16 pb-10"
      >
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{data.title}</h3>
          <p className="text-md text-gray-600 font-medium">{data.company}</p>
          <p className="text-sm mb-4">{data.date}</p>

          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            {data.details.map((detail, i) => (
              <li key={i} className="text-sm leading-6">
                {detail}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            {data.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs font-medium bg-indigo-100 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------- MAIN -------------------- */
export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-50 font-sans"  /* ✅ same light background section */
    >
      <div className="max-w-7xl mx-auto py-12">
        {/* Header (kept your look) */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center lg:text-left w-full lg:w-4/5 xl:w-2/3 mx-auto px-4"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
            My Professional Experience
          </h1>
          <p className="text-lg text-gray-600">
            A timeline of my professional growth and key accomplishments.
          </p>
        </motion.header>

        <div className="relative">
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              data={item}
              isLast={index === experienceData.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
