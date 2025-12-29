import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex flex-col justify-center items-center
        px-6 md:px-10 lg:px-16 2xl:px-24
        pt-24 md:pt-28
        overflow-hidden bg-white
      "
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl -translate-x-32 translate-y-32" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          relative text-center
          max-w-5xl 2xl:max-w-7xl
          mx-auto
        "
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-extrabold">
              Awoke Atanaw
            </span>
          </h2>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            MERN Stack Web Developer
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10"
        >
          I build modern, scalable,
          <br className="hidden sm:inline" />
          and secure web applications
          <br className="hidden sm:inline" />
          using React, Node.js, Express, and MongoDB.
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="
            text-base sm:text-lg md:text-xl lg:text-2xl
            text-gray-600
            max-w-4xl 2xl:max-w-5xl
            mx-auto
            mb-16
            leading-relaxed
          "
        >
          I specialize in developing e-commerce platforms, job portals, and
          management systems with clean UI, strong backend logic, and real-world
          features like authentication and payment integration.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <a
            href="#projects"
            className="px-10 py-5 text-lg md:text-xl font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-10 py-5 text-lg md:text-xl font-bold text-purple-600 rounded-full border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
