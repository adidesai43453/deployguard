import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_qr8ew1k",
        "template_tdrd2yq",
        form.current,
        "IzU19EpcJrNLINA70"
      )
      .then(
        () => {
          setLoading(false);

          setSuccess(true);

          form.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },

        (error) => {
          setLoading(false);

          console.log(error.text);

          alert(
            "Something went wrong."
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-slate-900 overflow-hidden"
    >
      
      {/* Background Glow */}

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-20"
        >
          
          <p className="text-cyan-400 uppercase tracking-widest font-semibold mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Contact Me
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Interested in collaborating, hiring,
            or discussing opportunities in
            Software Development, DevOps,
            or Cloud Engineering?
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          
          {/* Left Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="space-y-8"
          >
            
            {/* Email Card */}

            <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">
              
              <div className="flex items-center gap-5 mb-6">
                
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-3xl text-cyan-400">
                  <FaEnvelope />
                </div>

                <div>
                  
                  <h3 className="text-2xl font-bold">
                    Email
                  </h3>

                  <p className="text-slate-400">
                    adityadesaii2476@example.com
                  </p>

                </div>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Feel free to reach out for
                job opportunities, freelance
                projects, collaboration, or
                networking.
              </p>

            </div>

            {/* Social Links */}

            <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">
              
              <h3 className="text-2xl font-bold mb-8">
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-5">
                
                {/* GitHub */}

                <a
                  href="https://github.com/YOUR_GITHUB_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                >
                  <FaGithub className="text-2xl" />

                  GitHub
                </a>

                {/* LinkedIn */}

                <a
                  href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                >
                  <FaLinkedin className="text-2xl" />

                  LinkedIn
                </a>

                {/* Resume */}

                <a
                  href="/resume/YourName_Resume.pdf"
                  download
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-slate-900 font-bold"
                >
                  <FaDownload />

                  Resume
                </a>

              </div>

            </div>

          </motion.div>

          {/* Right Side Form */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
          >
            
            <h3 className="text-3xl font-bold mb-8">
              Send Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              
              {/* Name */}

              <div>
                
                <label className="block text-slate-300 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300"
                />

              </div>

              {/* Email */}

              <div>
                
                <label className="block text-slate-300 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300"
                />

              </div>

              {/* Message */}

              <div>
                
                <label className="block text-slate-300 mb-3">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300 resize-none"
                ></textarea>

              </div>

              {/* Success Message */}

              {success && (
                <p className="text-green-400 font-medium">
                  Message sent successfully!
                </p>
              )}

              {/* Submit Button */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-slate-900 font-bold py-4 rounded-2xl"
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;