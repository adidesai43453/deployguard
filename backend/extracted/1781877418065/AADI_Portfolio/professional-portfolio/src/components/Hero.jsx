import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDocker,
  FaAws,
  FaReact,
  FaPython,
} from "react-icons/fa";



function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-950"
    >
      {/* Background Gradient Blobs */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Main Container */}

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          
          {/* Intro */}

          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-6">
            Welcome To My Portfolio
          </p>

          {/* Main Heading */}

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Aditya Desai 
            </span>
          </h1>

          {/* Typing Animation */}

          <div className="text-2xl md:text-4xl font-bold text-slate-300 mb-8 h-20">
            Software Developer | DevOps Engineer | Cloud Engineer
          </div>

          {/* Description */}

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
            Passionate about building scalable web applications,
            cloud-native infrastructure, DevOps automation,
            and modern software solutions with clean user experiences.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mb-10">
            
            {/* Contact Button */}

            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-slate-900 font-bold px-8 py-4 rounded-2xl"
            >
              Contact Me
            </a>

            {/* Resume Button */}

            <a
              href="/resume/YourName_Resume.pdf"
              download
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition duration-300 font-bold px-8 py-4 rounded-2xl"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}

          <div className="flex gap-5">
            
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative flex justify-center"
        >
          
          {/* Main Circle */}

          <div className="relative w-[350px] h-[350px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl">
  
            <img
                src="/images/aditya.png"
                alt="Aditya Desai"
                className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                />

</div>

          {/* Floating Tech Icons */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute top-10 left-0 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-cyan-400 text-4xl shadow-lg"
          >
            <FaReact />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-20 right-0 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-cyan-400 text-4xl shadow-lg"
          >
            <FaDocker />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
            }}
            className="absolute bottom-10 left-10 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-cyan-400 text-4xl shadow-lg"
          >
            <FaAws />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
            }}
            className="absolute bottom-0 right-10 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-cyan-400 text-4xl shadow-lg"
          >
            <FaPython />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;