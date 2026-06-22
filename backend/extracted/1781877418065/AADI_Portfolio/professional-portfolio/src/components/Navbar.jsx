import { useEffect, useState } from "react";

import {
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";

const navLinks = [
  {
    name: "About",
    href: "#about",
  },

  {
    name: "Skills",
    href: "#skills",
  },

  {
    name: "Qualification",
    href: "#qualification",
  },

  {
    name: "Achievements",
    href: "#achievements",
  },

  {
    name: "Experience",
    href: "#experience",
  },

  {
    name: "Projects",
    href: "#projects",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("");

  const [scrolled, setScrolled] =
    useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <= 150 &&
          rect.bottom >= 150
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a
  href="#home"
  className="flex items-center"
>
  <img
    src="/images/Aditya_logo.png"
    alt="Aditya Desai Logo"
    className="h-16 md:h-16 w-auto"
  />
</a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          
          {navLinks.map((link, index) => (
            <li key={index}>
              
              <a
                href={link.href}
                className={`relative text-sm font-semibold transition duration-300 hover:text-cyan-400 ${
                  activeSection ===
                  link.href.substring(1)
                    ? "text-cyan-400"
                    : "text-slate-300"
                }`}
              >
                {link.name}

                {/* Active Underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    activeSection ===
                    link.href.substring(1)
                      ? "w-full"
                      : "w-0"
                  }`}
                ></span>
              </a>

            </li>
          ))}

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="lg:hidden text-4xl text-white"
        >
          {menuOpen ? (
            <HiX />
          ) : (
            <HiMenuAlt3 />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-950/95 backdrop-blur-xl border-t border-slate-800">
          
          <ul className="flex flex-col items-center py-8 gap-8">
            
            {navLinks.map((link, index) => (
              <li key={index}>
                
                <a
                  href={link.href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={`text-lg font-semibold transition duration-300 hover:text-cyan-400 ${
                    activeSection ===
                    link.href.substring(1)
                      ? "text-cyan-400"
                      : "text-slate-300"
                  }`}
                >
                  {link.name}
                </a>

              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;