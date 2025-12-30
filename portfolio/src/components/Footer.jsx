import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 2xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Left: Logo + Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl">
                <code className="text-white text-3xl font-bold">&lt;/&gt;</code>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white">AwokeWorks</h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Full Stack Developer specializing in MERN stack and Django, creating innovative, scalable web solutions with clean design and solid architecture.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-8">Quick Links</h4>
            <ul className="space-y-5">
              {["About Me", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-lg text-gray-400 hover:text-purple-400 transition-colors duration-300 font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Connect With Me */}
          <div className="text-center md:text-right">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-8">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-6 mb-6">
              <a
                href="https://github.com/Awokeatanaw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 rounded-2xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:shadow-2xl transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-7 h-7 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/awoke-atanaw-6671a9360"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 rounded-2xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:shadow-2xl transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="mailto:awokeatanaw12@gmail.com"
                className="p-4 bg-gray-800 rounded-2xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:shadow-2xl transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-7 h-7 text-gray-300 group-hover:text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-lg">awokeatanaw12@gmail.com</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-10 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-base md:text-lg">
            © {new Date().getFullYear()} All rights reserved. Made with{" "}
            <span className="text-pink-500 text-xl">❤️</span> by{" "}
            <span className="text-white font-semibold">Awoke Atanaw</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
