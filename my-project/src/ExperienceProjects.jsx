import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, CheckCircle, XCircle, Loader } from "lucide-react";

// --- Formspree Configuration ---
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblzepaz";

export default function App() {
  // State for managing form submission status
  const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Use the native Fetch API to POST the form data to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          // This header is required by Formspree for AJAX submissions
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // Clear the form fields on successful submission
      } else {
        const errorData = await response.json();
        const msg = errorData.error || "An unexpected error occurred.";
        setErrorMessage(msg);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Network failure. Please check your connection.");
      setStatus('error');
    }
  }

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  // Component to display status messages
  const SubmissionStatus = () => {
    if (isSuccess) {
      return (
        <div className="flex items-center p-3 rounded-xl bg-green-50 text-green-700 font-medium border border-green-200 transition-opacity duration-300">
          <CheckCircle className="w-5 h-5 mr-2" />
          Message sent successfully! I'll get back to you soon.
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
    <section id="contact" className="relative bg-white pt-20 pb-10 min-h-screen font-['Inter']">
      {/* Tailwind CSS Script for Inter Font and General Styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        body { font-family: 'Inter', sans-serif; }
        .input-style {
            transition: all 0.3s ease;
            @apply mt-1 block w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-slate-800 focus:ring-0 focus:outline-none py-2 text-slate-800 rounded-none;
        }
        .input-style:focus {
            box-shadow: none;
        }
        /* Framer Motion requires a global layout fix in some environments */
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

      <div className="relative mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
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
        <p className="mt-3 text-center text-lg text-slate-600 px-2 py-2 max-w-3xl mx-auto">
          Have a question, a proposal, or just want to say hello? Use the form below, and your message will be delivered instantly.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2 bg-white rounded-2xl shadow-2xl p-6 lg:p-12">
          {/* Left column - Information */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="hidden md:block"
          >
            <h3 className="text-3xl font-bold text-slate-900">
              Let’s Build Something Together
            </h3>
            <p className="mt-4 text-slate-600 leading-7">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of an ambitious vision. If you have
              something in mind and my skills align with your needs, feel free
              to reach out.
            </p>

            <div className="mt-10 flex items-center gap-3 text-slate-800">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 border border-slate-300 shadow-inner">
                <Mail className="h-6 w-6 text-slate-600" />
              </span>
              <a
                className="text-lg font-medium text-slate-800 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4 transition"
                href="mailto:busireddydeekshithareddy@gmail.com"
              >
                busireddydeekshithareddy@gmail.com
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-slate-500">
              {/* Note: Updated anchor tags to include rel="noopener noreferrer" for security */}
              <a
                aria-label="GitHub"
                href="" // Placeholder URL
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 hover:bg-slate-100 transition hover:text-slate-900"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://linkedin.com/in/yourhandle" // Placeholder URL
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 hover:bg-slate-100 transition hover:text-slate-900"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                aria-label="Twitter / X"
                href="https://twitter.com/yourhandle" // Placeholder URL
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 hover:bg-slate-100 transition hover:text-slate-900"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Right column – form (visible on all screens) */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-8 p-4 border-l md:border-l-slate-200 md:pl-12"
          >
            {/* Submission Status Message */}
            <SubmissionStatus />

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="e.g., Jane Doe"
                className="input-style"
                disabled={isSubmitting || isSuccess}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="e.g., jane.doe@example.com"
                className="input-style"
                disabled={isSubmitting || isSuccess}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Your message here…"
                className="input-style resize-y"
                disabled={isSubmitting || isSuccess}
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-slate-900 px-6 py-3 text-white font-medium text-lg shadow-xl hover:bg-slate-700 transition duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 spinner" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {isError && (
                <p className="mt-3 text-sm text-red-500">Please correct the errors and try again.</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
