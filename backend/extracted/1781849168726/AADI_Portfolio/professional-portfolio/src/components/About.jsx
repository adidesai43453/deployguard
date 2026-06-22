import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-slate-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-semibold tracking-wider uppercase mb-4">
            Introduction
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About Me
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Building Scalable Applications &
              <span className="text-cyan-400"> Cloud Solutions</span>
            </h3>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I am a passionate Software Developer and DevOps enthusiast
              focused on building modern applications, scalable cloud
              infrastructure, and automation systems.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              My interests include full-stack development, cloud computing,
              containerization, CI/CD pipelines, infrastructure automation,
              and modern UI/UX development.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              I enjoy learning new technologies and solving real-world
              engineering problems with efficient and scalable solutions.
            </p>
          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            
            {/* Card 1 */}
            <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
              <h4 className="text-4xl font-bold text-cyan-400 mb-3">
                10+
              </h4>

              <p className="text-slate-300 font-medium">
                Projects Completed
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
              <h4 className="text-4xl font-bold text-cyan-400 mb-3">
                React
              </h4>

              <p className="text-slate-300 font-medium">
                Frontend Development
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
              <h4 className="text-4xl font-bold text-cyan-400 mb-3">
                AWS
              </h4>

              <p className="text-slate-300 font-medium">
                Cloud & DevOps
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
              <h4 className="text-4xl font-bold text-cyan-400 mb-3">
                Python
              </h4>

              <p className="text-slate-300 font-medium">
                Automation & Backend
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;