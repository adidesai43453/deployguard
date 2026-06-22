import {
    FaGithub,
    FaLinkedin,
    FaArrowUp,
    FaEnvelope,
  } from "react-icons/fa";
  
  function Footer() {
    return (
      <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full"></div>
  
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Branding */}
            <div>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Aditya Desai
              </h2>
  
              <p className="text-slate-400 leading-relaxed">
                Software Developer, Cloud Enthusiast, and DevOps Engineer
                focused on building scalable applications and modern
                infrastructure solutions.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">
                Quick Links
              </h3>
  
              <ul className="space-y-4 text-slate-400">
                
                <li>
                  <a
                    href="#about"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    About
                  </a>
                </li>
  
                <li>
                  <a
                    href="#skills"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Skills
                  </a>
                </li>
  
                <li>
                  <a
                    href="#projects"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Projects
                  </a>
                </li>
  
                <li>
                  <a
                    href="#contact"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
  
              </ul>
            </div>
  
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">
                Connect
              </h3>
  
              <div className="flex gap-5">
                
                {/* GitHub */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                >
                  <FaGithub />
                </a>
  
                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                >
                  <FaLinkedin />
                </a>
  
                {/* Email */}
                <a
                  href="mailto:yourmail@example.com"
                  className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                >
                  <FaEnvelope />
                </a>
  
              </div>
            </div>
  
          </div>
  
          {/* Divider */}
          <div className="border-t border-slate-800 my-10"></div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <p className="text-slate-500 text-center md:text-left">
              © 2026 Aditya Desai. All rights reserved.
            </p>
  
            {/* Back To Top */}
            <a
              href="#home"
              className="w-14 h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition duration-300 flex items-center justify-center text-slate-900 text-2xl font-bold"
            >
              <FaArrowUp />
            </a>
  
          </div>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;