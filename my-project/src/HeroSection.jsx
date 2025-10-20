import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

/**
 * HeroSection.jsx
 * A sleek, responsive hero for a personal portfolio.
 * 
 * Usage:
 * <HeroSection
 *   avatarSrc="/headshot.jpg"
 *   resumeHref="/Sai_Manoj_Resume.pdf"
 *   onSeeWork={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
 *   links={{ github: 'https://github.com/yourname', linkedin: 'https://linkedin.com/in/yourname', email: 'mailto:you@example.com' }}
 * />
 */
export default function HeroSection({
  avatarSrc = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  resumeHref = "#",
  onSeeWork = () => {},
  links = { github: "#", linkedin: "#", email: "#" },
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* decorative rings */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 sm:py-20 md:grid-cols-2 lg:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Open to opportunities
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            <span className="block">Deekshitha</span>
            <span className="block text-slate-800 dark:text-slate-200">Busireddy</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Software Engineer building and optimizing high‑impact applications. My experience includes
            migrating backend services at
            <strong className="mx-1 font-semibold text-slate-900 underline decoration-indigo-500/60 underline-offset-4 dark:text-white">Amazon</strong>
            and delivering features for
            <strong className="mx-1 font-semibold text-slate-900 underline decoration-blue-400/60 underline-offset-4 dark:text-white">Microsoft</strong>
            platforms, serving 400,000+ users.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={resumeHref}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-white dark:text-slate-900"
            >
              <ExternalLink className="h-4 w-4" />
              View Resume
            </a>

            <button
              onClick={onSeeWork}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              See My Work
            </button>

            <div className="ml-1 flex items-center gap-3 sm:ml-3">
              <a aria-label="GitHub" href={links.github} className="rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800">
                <Github className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              </a>
              <a aria-label="LinkedIn" href={links.linkedin} className="rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800">
                <Linkedin className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              </a>
              <a aria-label="Email" href={links.email} className="rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800">
                <Mail className="h-5 w-5 text-slate-600 dark:text-slate-300" />
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
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500/30 to-blue-400/30 blur-2xl" />
            <img
              src={avatarSrc}
              alt="Sai Manoj Dogiparthi headshot"
              className="relative aspect-square h-64 w-64 rounded-full border-8 border-slate-100 object-cover shadow-2xl dark:border-slate-900 sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-8 ring-slate-200/60 dark:ring-slate-700/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
