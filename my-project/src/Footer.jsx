import { Github, Linkedin, Mail, Youtube, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative mt-32 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900 text-slate-300">
      {/* Glow / divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* 1️⃣ Left: About / Socials */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Deekshitha</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400 max-w-sm">
              Passionate about crafting delightful digital experiences — merging
              creativity, clean design, and engineering precision.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="mailto:youremail@example.com"
                aria-label="Email"
                className="rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-200 transition hover:bg-slate-700 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/yourhandle"
                aria-label="GitHub"
                className="rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-200 transition hover:bg-slate-700 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/yourhandle"
                aria-label="LinkedIn"
                className="rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-200 transition hover:bg-slate-700 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@yourchannel"
                aria-label="YouTube"
                className="rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-200 transition hover:bg-red-600 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* 2️⃣ Middle: Quick Links */}
          <div className="md:mx-auto">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-4 grid gap-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-slate-400 hover:text-indigo-400 transition"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3️⃣ Right: Message */}
          <div className="md:justify-self-end">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Let’s Connect
            </h4>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Open to collaborations, creative projects, and tech conversations.
              Let’s bring ideas to life ✨
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6  text-xs text-slate-500 sm:flex-row">
          <p className="flex items-center gap-1">
            © {year} Deekshitha — Crafted with
            <Heart className="h-3.5 w-3.5 text-rose-500" /> & Tailwind.
          </p>
          <button
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-slate-300 transition hover:bg-slate-700 hover:text-white"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
