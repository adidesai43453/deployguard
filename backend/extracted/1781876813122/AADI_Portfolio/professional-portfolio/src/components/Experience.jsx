import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCodeBranch,
  FaServer,
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaBriefcase />,
    role: "Backend Developer Intern",
    company: "UpToSkills",
    duration: " Feb - May 2026",
    description:
      "Built responsive web applications using React, Tailwind CSS, and REST APIs with focus on performance and user experience.",
    skills: ["React", "Tailwind", "JavaScript"],
  },

  {
    icon: <FaServer />,
    role: "DevOps & Cloud Intern",
    company: "Cloud Container",
    duration: "2026 - Present",
    description:
      "Working on Docker containerization, CI/CD automation, Linux administration, and cloud deployment workflows.",
    skills: ["Docker", "AWS", "CI/CD"],
  },

  {
    icon: <FaCodeBranch />,
    role: "Open Source Contributor",
    company: "GitHub Projects",
    duration: "2025 - Present",
    description:
      "Contributed to development projects, collaborated on debugging, feature improvements, and version control workflows.",
    skills: ["Git", "GitHub", "Open Source"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-slate-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-widest font-semibold mb-4">
            Career Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Experience
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            My practical experience in software development,
            DevOps engineering, cloud technologies, and
            collaborative development environments.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-10">
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
            >
              
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-4xl text-cyan-400 group-hover:scale-110 transition duration-300">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  
                  {/* Role */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        {exp.role}
                      </h3>

                      <p className="text-cyan-400 text-lg mt-2">
                        {exp.company}
                      </p>
                    </div>

                    <div className="px-5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-medium w-fit">
                      {exp.duration}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed text-lg mb-6">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-4">
                    {exp.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 font-medium"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-slate-800 border border-slate-700 rounded-3xl px-10 py-8">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Passionate About Engineering
            </h3>

            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Continuously learning and building modern applications,
              cloud-native systems, and scalable automation solutions
              with focus on performance, reliability, and user experience.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;