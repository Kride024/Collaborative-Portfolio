import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function HeroSection({
  avatarSrc = "/Img_kriti.jpg",
  resumeHref = "https://drive.google.com/file/d/1ZzkrGm0hOHFQpHWDG1O_-MromqKPIMfc/view?usp=sharing",
   onSeeWork = () => {
    const experienceSection = document.getElementById('experience');
    experienceSection?.scrollIntoView({ behavior: 'smooth' });
  },
  // FIX: Corrected object key syntax: "linkedin": "#" instead of "linkedin": "#"
  links = { github: "https://github.com/Kride024", linkedin: "https://www.linkedin.com/in/kriti-yadav3/", email: "mailto:ky740837@gmail.com" }, 
}) {
  return (
    <section 
      // Background: Solid bg-slate-950 as requested
      className="relative overflow-hidden bg-slate-950"
      id="home"
    >
      {/* Decorative elements were removed for the solid black background */}

      <div 
        // 👇 FIX APPLIED HERE:
        // 1. Removed min-h-screen and lg:min-h-[calc(100vh-80px)]
        // 2. Changed base py-4 to a more generous py-20 for better spacing.
        // 3. Added sm:py-24 to increase padding on small/medium screens.
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 sm:py-24 md:grid-cols-2 lg:gap-16"
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          {/* Tag styling */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Open to opportunities
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl">
            <span className="inline-flex">
              Kriti  <span className="text-indigo-300 ml-1">Yadav</span>
</span>

            {/* Highlighted name color */}
            
          </h1>

          {/* Text color is light gray */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Full-Stack Software Engineer specializing in high-impact applications. Experienced in building scalable solutions at 
            {/* Highlighted text within paragraph */}
            <strong className="mx-1 font-semibold text-indigo-300 underline decoration-indigo-500/60 underline-offset-4">QTIMINDS</strong>
            and optimizing enterprise Successfully delivered full-stack features that drove operational  efficiency by 40%, with proven technical excellence.
            {/* Highlighted text within paragraph */}
            
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* White button */}
            <a
              href={resumeHref}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <ExternalLink className="h-4 w-4" />
              View Resume
            </a>

            {/* Dark, subtle button */}
            <button
              onClick={onSeeWork}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-sm transition hover:bg-slate-700/70 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              See My Work
            </button>

            {/* Social links styling */}
            <div className="ml-1 flex items-center gap-3 sm:ml-3">
              <a aria-label="GitHub" href={links.github} className="rounded-xl p-2 transition hover:bg-slate-800">
                <Github className="h-5 w-5 text-slate-300" />
              </a>
              <a aria-label="LinkedIn" href={links.linkedin} className="rounded-xl p-2 transition hover:bg-slate-800">
                <Linkedin className="h-5 w-5 text-slate-300" />
              </a>
              <a aria-label="Email" href={links.email} className="rounded-xl p-2 transition hover:bg-slate-800">
                <Mail className="h-5 w-5 text-slate-300" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            {/* Purple/blue glow around the avatar */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500/50 to-indigo-400/50 blur-2xl" />
            <img
              src={avatarSrc}
              alt="Kriti headshot"
              // Dark border color of the avatar
              className="relative aspect-square h-64 w-64 rounded-full border-8 border-gray-900 object-cover shadow-2xl sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]"
            />
            {/* Dark ring color around the avatar */}
            <div className="pointer-events-none absolute inset-0 rounded-full ring-8 ring-slate-800/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}