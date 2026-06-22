import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const featuredProject = {
  title: "Cloud DevOps Deployment Platform",

  description:
    "A scalable cloud-native deployment platform built using Docker, AWS, CI/CD pipelines, and modern frontend technologies. Designed to automate deployments and improve infrastructure scalability.",

  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

  tech: [
    "React",
    "Docker",
    "AWS",
    "GitHub Actions",
    "Node.js",
  ],

  github: "#",

  live: "#",

  stats: [
    "CI/CD Automation",
    "Cloud Deployment",
    "Containerized Infrastructure",
  ],
};

const projects = [
  {
    title: "DevOps Monitoring Dashboard",

    description:
      "Real-time monitoring dashboard for cloud infrastructure and deployments.",

    gradient:
      "from-cyan-500 to-blue-600",

    tech: [
      "React",
      "AWS",
      "MongoDB",
    ],

    github: "#",

    live: "#",
  },

  {
    title: "Modern Portfolio Website",

    description:
      "Responsive developer portfolio with modern animations and UI.",

    gradient:
      "from-purple-500 to-pink-600",

    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],

    github: "#",

    live: "#",
  },

  {
    title: "Python Automation Tool",

    description:
      "Automation scripts for deployment workflows and system operations.",

    gradient:
      "from-emerald-500 to-cyan-600",

    tech: [
      "Python",
      "Linux",
      "Automation",
    ],

    github: "#",

    live: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

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
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Projects focused on software engineering,
            cloud infrastructure, DevOps automation,
            and modern web technologies.
          </p>

        </motion.div>

        {/* Featured Project */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="grid lg:grid-cols-2 gap-10 bg-slate-900/70 backdrop-blur-lg border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 mb-20"
        >
          
          {/* Left Image */}

          <div className="relative overflow-hidden min-h-[400px]">
            
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40"></div>

          </div>

          {/* Right Content */}

          <div className="p-10 flex flex-col justify-center">
            
            <p className="text-cyan-400 uppercase tracking-widest font-semibold mb-4">
              Featured Project
            </p>

            <h3 className="text-4xl font-bold mb-6">
              {featuredProject.title}
            </h3>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {featuredProject.description}
            </p>

            {/* Stats */}

            <div className="space-y-4 mb-8">
              
              {featuredProject.stats.map(
                (stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

                    <p className="text-slate-300">
                      {stat}
                    </p>
                  </div>
                )
              )}

            </div>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3 mb-10">
              
              {featuredProject.tech.map(
                (tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 font-medium"
                  >
                    {tech}
                  </div>
                )
              )}

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5">
              
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-slate-900 font-bold px-7 py-4 rounded-2xl"
              >
                <FaExternalLinkAlt />

                Live Demo
              </a>

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition duration-300 font-bold px-7 py-4 rounded-2xl"
              >
                <FaGithub />

                GitHub
              </a>

            </div>

          </div>

        </motion.div>

        {/* Secondary Projects */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-slate-900/70 backdrop-blur-lg border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300"
            >
              
              {/* Top Gradient */}

              <div
                className={`h-40 bg-gradient-to-br ${project.gradient}`}
              ></div>

              {/* Content */}

              <div className="p-8">
                
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mb-8">
                  
                  {project.tech.map(
                    (tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-medium"
                      >
                        {tech}
                      </div>
                    )
                  )}

                </div>

                {/* Buttons */}

                <div className="flex gap-4">
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-slate-900 font-bold px-5 py-3 rounded-xl"
                  >
                    <FaExternalLinkAlt />

                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition duration-300 font-bold px-5 py-3 rounded-xl"
                  >
                    <FaGithub />

                    Code
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;