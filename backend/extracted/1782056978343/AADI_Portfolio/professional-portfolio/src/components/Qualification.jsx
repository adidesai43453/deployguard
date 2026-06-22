import { motion } from "framer-motion";

const qualifications = [
  {
    title: "Bachelor of Computer Science",
    institution: "Ajara Mahavidyalay Ajara , Kolhapur",
    duration: "2021 - 2024",
    description:
      "Focused on software Development, cloud computing, data structures, operating systems, and web development.",
  },
  {
    title: "Masaters of Computer Application",
    institution: "Dr. Dy Patil Institute of MCA and Management",
    duration: "2024 - 2026",
    description:
      "Focused on software Engineering, cloud computing, data structures, operating systems, and web development.",
  },

  {
    title: "AWS Cloud Practitioner Certification",
    institution: "Amazon Web Services",
    duration: "2026",
    description:
      "Learned cloud infrastructure, deployment strategies, EC2, S3, IAM, and cloud architecture principles.",
  },

  {
    title: "DevOps & Docker Training",
    institution: "Online Certification",
    duration: "2026",
    description:
      "Hands-on experience with Docker, CI/CD pipelines, Kubernetes basics, and infrastructure automation.",
  },
];

function Qualification() {
  return (
    <section
      id="qualification"
      className="relative py-28 px-6 bg-slate-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-cyan-400 uppercase tracking-widest font-semibold mb-4">
            Education & Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Qualification
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            My academic background and certifications that support my
            expertise in software development, cloud computing, and DevOps.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-cyan-500/30 transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-900 transform md:-translate-x-1/2 z-10"></div>

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 w-full md:w-[45%] bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >
                  
                  <p className="text-cyan-400 font-semibold mb-2">
                    {item.duration}
                  </p>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <h4 className="text-lg text-slate-300 mb-4">
                    {item.institution}
                  </h4>

                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;