import { motion } from "framer-motion";
import {
  FaAward,
  FaCode,
  FaCloud,
  FaTrophy,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaCode />,
    title: "Full Stack Projects",
    description:
      "Developed multiple responsive and scalable full stack applications using React, Node.js, and APIs.",
  },

  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    description:
      "Built CI/CD workflows, Dockerized applications, and deployed cloud infrastructure solutions.",
  },

  {
    icon: <FaAward />,
    title: "Certifications",
    description:
      "Completed cloud and development certifications focused on AWS, DevOps, and software engineering.",
  },

  {
    icon: <FaTrophy />,
    title: "Problem Solving",
    description:
      "Practiced data structures, algorithms, debugging, and software optimization techniques.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-28 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

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
            Accomplishments
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Achievements
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Key accomplishments, technical expertise, certifications,
            and contributions that reflect my passion for engineering
            and problem-solving.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative bg-slate-900/70 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 overflow-hidden hover:border-cyan-400 transition duration-300"
            >
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Icon */}
              <div className="relative z-10 text-5xl text-cyan-400 mb-6">
                {achievement.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold mb-4">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-400 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-400 transition duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
            <p className="text-slate-400 mt-2">Projects</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-400 transition duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
            <p className="text-slate-400 mt-2">Certifications</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-400 transition duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">AWS</h3>
            <p className="text-slate-400 mt-2">Cloud Skills</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-400 transition duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">DevOps</h3>
            <p className="text-slate-400 mt-2">Automation</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Achievements;