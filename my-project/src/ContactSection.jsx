import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  // simple mailto submit (no backend required)
  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = encodeURIComponent(form.get("name"));
    const email = encodeURIComponent(form.get("email"));
    const msg = encodeURIComponent(form.get("message"));
    window.location.href = `mailto:saimanojdogiparthi@gmail.com?subject=Portfolio%20Contact%20from%20${name}&body=From:%20${name}%20<${email}>%0D%0A%0D%0A${msg}`;
  }

  return (
    <section
      id="contact"
      className="relative bg-white dark:bg-slate-50/0 py-20"
    >
      {/* dotted background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          color: "rgba(148,163,184,.25)", // slate-400/25
          maskImage:
            "radial-gradient(70% 70% at 50% 0%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(70% 70% at 50% 0%, black 60%, transparent 100%)",
        }}
      />

    <div className="relative mx-auto max-w-6xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl sm:text-5xl font-extrabold text-slate-900"
        >
          Get in Touch
        </motion.h2>
        <p className="mt-3 text-center text-lg text-slate-600">
          Have a question, a proposal, or just want to say hello? Go ahead.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h3 className="text-3xl font-semibold text-slate-900">
              Let’s Build Something Together
            </h3>
            <p className="mt-4 text-slate-600 leading-7">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of an ambitious vision. If you have
              something in mind and my skills align with your needs, feel free
              to reach out.
            </p>

            {/* Email row */}
            <div className="mt-8 flex items-center gap-3 text-slate-800">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300">
                <Mail className="h-5 w-5" />
              </span>
              <a
                className="text-lg font-medium hover:underline decoration-slate-300 underline-offset-4"
                href="mailto:saimanojdogiparthi@gmail.com"
              >
                saimanojdogiparthi@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-5 text-slate-500">
              <a
                aria-label="GitHub"
                href="https://github.com/yourhandle"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://linkedin.com/in/yourhandle"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                aria-label="Twitter / X"
                href="https://twitter.com/yourhandle"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right column – form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-8 px-12"
          >
            <div>
              <label className="block text-sm font-medium text-slate-600 ">
                Full Name
              </label>
              <input
                name="name"
                required
                placeholder="e.g., Jane Doe"
                className="mt-1 block w-full bg-transparent border-0 border-b border-slate-300 focus:border-slate-500 focus:outline-none py-2 text-slate-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="e.g., jane.doe@example.com"
                className="mt-1 block w-full bg-transparent border-0 border-b border-slate-300 focus:border-slate-500 focus:outline-none py-2 text-slate-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Your message here…"
                className="mt-1 block w-full resize-y bg-transparent border-0 border-b border-slate-300 focus:border-slate-500 focus:outline-none py-2 text-slate-800"
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-white font-medium shadow-sm hover:shadow-md transition"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
