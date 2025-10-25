import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Loader, CheckCircle, XCircle } from "lucide-react";

// --- Formspree Configuration ---
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblzepaz";

// Renamed from ContactSection to App for the single-file React environment
export default function App() {
  // ADDED State for managing form submission status
  const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  // REFRACTORED: Changed from mailto: to Formspree fetch API
  async function onSubmit(e) {
    e.preventDefault();

    if (isSubmitting) return; // Prevent double submission

    setStatus('submitting');
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // Clear the form fields on successful submission
        // Optionally revert to null after a delay
        setTimeout(() => setStatus(null), 5000);
      } else {
        const errorData = await response.json();
        const msg = errorData.error || "Formspree failed to process submission.";
        setErrorMessage(msg);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Network error. Could not connect to the submission service.");
      setStatus('error');
    }
  }
  
  // ADDED Status component for feedback
  const SubmissionStatus = () => {
    if (isSuccess) {
      return (
        <div className="flex items-center p-3 rounded-xl bg-green-50 text-green-700 font-medium border border-green-200 transition-opacity duration-300">
          <CheckCircle className="w-5 h-5 mr-2" />
          Message sent successfully!
        </div>
      );
    }
    if (isError) {
      return (
        <div className="flex items-start p-3 rounded-xl bg-red-50 text-red-700 font-medium border border-red-200 transition-opacity duration-300">
          <XCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <p className="font-bold">Submission Failed:</p>
            <p className="text-sm">{errorMessage}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section 
      id="contact" 
      // 👇 FIX APPLIED HERE: Using py-24 as base and scaling up to lg:py-32 for generous, controlled desktop spacing.
      className="relative bg-white dark:bg-slate-50/0 py-18 lg:py-18"
    >
      {/* ADDED necessary style for the spinner */}
      <style>{`
        @keyframes spinner {
          to {transform: rotate(360deg);}
        }
        .spinner {
          animation: spinner 1s linear infinite;
        }
      `}</style>

      {/* dotted background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          color: "rgba(148,163,184,.25)",
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
          className="text-center text-4xl sm:text-5xl font-bold text-slate-900"
        >
          Get in Touch
        </motion.h2>
        <p className="mt-3 text-center text-lg text-slate-600 px-2 py-2">
          Have a question, a proposal, or just want to say hello? Go ahead.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Left column - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            // 👇 EDITED: Added px-6 md:px-12 to mirror the form's padding for uniformity.
            className="hidden md:block px-6 md:px-12" 
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

            <div className="mt-8 flex items-center gap-3 text-slate-800">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300">
                <Mail className="h-5 w-5" />
              </span>
              <a
                className="text-lg font-medium hover:underline decoration-slate-300 underline-offset-4"
                href="mailto:busireddydeekshithareddy@gmail.com"
              >
                ky740837@gmail.com
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-slate-500">
              <a
                aria-label="GitHub"
                href="https://github.com/Kride024"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/kriti-yadav3/"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                aria-label="Twitter / X"
                href="https://x.com/I_am_Kriti_A"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right column – form (visible on all screens) */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            // 👇 EDITED: Increased gap from gap-10 to gap-16 for more separation in the grid container.
            className="grid gap-8 px-6 md:px-12"
          >
            {/* ADDED Submission Status Display */}
            <SubmissionStatus />

            <div>
              <label className="block text-sm font-medium text-slate-600">
                Full Name
              </label>
              <input
                name="name"
                required
                placeholder="e.g., Jane Doe"
                className="mt-1 block w-full bg-transparent border-0 border-b border-slate-300 focus:border-slate-500 focus:outline-none py-2 text-slate-800"
                // ADDED disabled state
                disabled={isSubmitting || isSuccess}
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
                // ADDED disabled state
                disabled={isSubmitting || isSuccess}
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
                // ADDED disabled state
                disabled={isSubmitting || isSuccess}
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-white font-medium shadow-sm hover:shadow-md transition disabled:opacity-50"
                // ADDED disabled property
                disabled={isSubmitting || isSuccess}
              >
                {/* ADDED dynamic button text/spinner */}
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 spinner" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
