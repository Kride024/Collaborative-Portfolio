import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/* -------------------- DATA -------------------- */
const experienceData = [
  {
  icon: "layers",
  title: "Full-Stack Developer",
  company: "QTIMinds",
  date: "Aug 2025 – Present",
  details: [
    "Designed and implemented responsive dashboards and role-based interfaces (Owner, Manager, Guest, Admin, Staff) using React and TailwindCSS, ensuring seamless user experience across all devices.",
    "Built and integrated multiple frontend modules including Occupancy Overview, Maintenance Tracking, and Payment Insights, improving usability and reducing manual tracking time by 40%.",
    "Developed secure REST APIs and backend logic in Node.js and Express, handling authentication, role management, and data synchronization between services.",
    "Implemented MySQL for structured relational data, Redis for caching high-traffic requests, and integrated Amazon S3 for file storage and media management.",
    "Integrated Razorpay for real-time payments and automated invoice generation, enhancing financial transparency for property owners and managers.",
    "Collaborated with a small cross-functional team to optimize deployment pipelines, reducing build times and improving system stability across updates.",
  ],
  tags: ["React", "TailwindCSS", "Node.js", "Express", "MySQL", "Redis", "AWS S3", "Razorpay", "REST APIs"],
},
  {
  icon: "cpu",
  title: "Frontend Developer Intern",
  company: "Elicit Interiors & Engineers",
  date: "May 2025 – Jul 2025",
  details: [
    "Engineered a specialized cost estimation tool that leveraged Local Storage to persist and compute user inputs, providing immediate, accurate estimates and improving qualified lead submissions by 25%.",
    "Automated client data acquisition and storage by integrating Google Sheets via Apps Script, eliminating manual data entry and establishing a single source of truth for all customer records.",
    "Spearheaded the full-cycle development and independent launch of the company's core website, initial design to final deploy.",
    "Enhanced user engagement and client conversion by implementing a consultation booking system and essential SEO strategies, resulting in measurable improvements in organic visibility.",
  ],
  tags: ["JavaScript", "React.js", "GitHub", "Google Analytics", "App Script"],
}
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
  layers: (props) => ( // Added 'layers' icon from the data
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m12 1.5 8 4.5-8 4.5-8-4.5 8-4.5" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 19.5 8 4.5 8-4.5" />
    </svg>
  ),
  cpu: (props) => ( // Added 'cpu' icon from the data
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="5" width="14" height="14" rx="2" ry="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M15 2v3" />
      <path d="M15 19v3" />
      <path d="M2 9h3" />
      <path d="M19 9h3" />
      <path d="M2 15h3" />
      <path d="M19 15h3" />
      <path d="M9 2v3" />
      <path d="M9 19v3" />
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
  // Ensured icons for 'layers' and 'cpu' are correctly mapped.
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
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
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
              <span key={i} className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
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
      // 👇 FIX APPLIED: Reduced bottom padding significantly from pb-16/lg:pb-20 to pb-12/lg:pb-16
      className="bg-gray-50 font-sans pt-16 pb-12 lg:pt-16 lg:pb-12" 
    >
      {/* Removed py-12 from this div as padding is now on the section */}
      <div className="max-w-7xl mx-auto">
        {/* Header (kept your look) */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center lg:text-left w-full lg:w-4/5 xl:w-2/3 mx-auto px-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
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
