import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex flex-col justify-center items-center
        px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 3xl:px-48
        pt-24 md:pt-28
        overflow-hidden bg-white
      "
    >
      {/* Subtle decorative elements — scale for huge screens */}
      <div className="absolute inset-0 -z-10">
        <div className="
          absolute top-0 right-0
          w-96 h-96 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px]
          lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] 2xl:w-[1200px] 2xl:h-[1200px] 3xl:w-[1400px] 3xl:h-[1400px]
          bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl
          translate-x-32 -translate-y-32
        " />
        <div className="
          absolute bottom-0 left-0
          w-96 h-96 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px]
          lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] 2xl:w-[1200px] 2xl:h-[1200px] 3xl:w-[1400px] 3xl:h-[1400px]
          bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl
          -translate-x-32 translate-y-32
        " />
      </div>

      {/* Main Content — full width on huge screens */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          relative text-center
          w-full max-w-none
          px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20
        "
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-8"
        >
          <h2 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
            font-bold text-gray-800
          ">
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
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
            font-extrabold mb-6
          "
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
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
            font-bold text-gray-900 leading-tight mb-10
          "
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
            text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
            text-gray-600
            max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl
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
            className="
              px-10 py-5 md:px-12 md:py-6 lg:px-16 lg:py-7 xl:px-20 xl:py-8
              text-lg md:text-xl lg:text-2xl xl:text-3xl
              font-bold text-white rounded-full
              bg-gradient-to-r from-purple-600 to-pink-600
              shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300
            "
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="
              px-10 py-5 md:px-12 md:py-6 lg:px-16 lg:py-7 xl:px-20 xl:py-8
              text-lg md:text-xl lg:text-2xl xl:text-3xl
              font-bold text-purple-600 rounded-full
              border-4 border-purple-600
              hover:bg-purple-600 hover:text-white transition-all duration-300
            "
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="flex justify-center gap-8 lg:gap-12"
        >
          {[
            { Icon: Github, href: "https://github.com/Awokeatanaw", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/awoke-atanaw-6671a9360", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:awokeatanaw12@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="
                p-5 md:p-6 lg:p-8 xl:p-10
                bg-white rounded-full shadow-lg
                hover:shadow-2xl hover:scale-110 transition-all duration-300 group
              "
            >
              <Icon className="
                w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14
                text-purple-600 group-hover:text-purple-700
              " />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}