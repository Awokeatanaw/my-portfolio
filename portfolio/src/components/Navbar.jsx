// src/components/Navbar.jsx — FINAL, ELEGANT NAVBAR
import { Menu, X, Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "relative text-lg font-medium text-gray-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-600 after:to-pink-600 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-600";

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
            <code className="text-white text-2xl font-bold">&lt;/&gt;</code>
          </div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            AwokeWorks
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className={linkClass}
            >
              {item}
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-5 ml-8 pl-8 border-l border-gray-200">
            <a
              href="mailto:awokeatanaw12@gmail.com"
              className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Awokeatanaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="www.linkedin.com/in/awoke-atanaw-6671a9360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-purple-600"
          aria-label="Toggle menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-100 shadow-2xl"
        >
          <div className="px-6 py-8 space-y-6">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className={`${linkClass} block text-xl`}
                onClick={handleLinkClick}
              >
                {item}
              </a>
            ))}

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex gap-6">
                <a
                  href="mailto:awokeatanaw12@gmail.com"
                  className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full shadow-lg"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://github.com/Awokeatanaw" className="text-gray-600">
                  <Github className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com/in/yourusername" className="text-gray-600">
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}