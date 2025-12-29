import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex flex-col justify-center items-center
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-48 4xl:px-64
        pt-24 md:pt-28 lg:pt-32
        overflow-hidden bg-white
        w-full
      "
    >
      {/* Subtle decorative elements - scaled for large screens */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] 2xl:w-[1200px] 2xl:h-[1200px] bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] 2xl:w-[1200px] 2xl:h-[1200px] bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl -translate-x-32 translate-y-32" />
      </div>

      {/* Main Content - Center aligned and max width controlled */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          relative text-center
          w-full
          max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl 4xl:max-w-[1920px]
          mx-auto
        "
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12"
        >
          <h2 className="
            text-3xl sm:text-4xl md:text-5xl 
            lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl
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
            text-4xl sm:text-5xl md:text-6xl 
            lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-[10rem]
            font-extrabold mb-6 lg:mb-8 xl:mb-10 2xl:mb-12
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
            text-2xl sm:text-3xl md:text-4xl 
            lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl
            font-bold text-gray-900 leading-tight 
            mb-8 sm:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20
          "
        >
          <span className="block mb-4 lg:mb-6">
            I build modern, scalable,
          </span>
          <span className="block mb-4 lg:mb-6">
            and secure web applications
          </span>
          <span className="block">
            using React, Node.js, Express, and MongoDB.
          </span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="
            text-base sm:text-lg md:text-xl 
            lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl
            text-gray-600
            w-full
            max-w-3xl sm:max-w-4xl md:max-w-5xl 
            lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl
            mx-auto
            mb-12 sm:mb-16 lg:mb-20 xl:mb-24 2xl:mb-32
            leading-relaxed lg:leading-loose xl:leading-loose
          "
        >
          I specialize in developing e-commerce platforms, job portals, and
          management systems with clean UI, strong backend logic, and real-world
          features like authentication and payment integration.
        </motion.p>

        {/* CTA Buttons - Scaled for large screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-10 justify-center mb-16 sm:mb-20 lg:mb-24 xl:mb-32"
        >
          <a
            href="#projects"
            className="
              px-8 py-4 sm:px-10 sm:py-5 
              lg:px-12 lg:py-6 xl:px-14 xl:py-7 2xl:px-16 2xl:py-8
              text-base sm:text-lg md:text-xl 
              lg:text-2xl xl:text-3xl
              font-bold text-white 
              rounded-full 
              bg-gradient-to-r from-purple-600 to-pink-600 
              shadow-xl hover:shadow-2xl hover:scale-105 
              transition-all duration-300
            "
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="
              px-8 py-4 sm:px-10 sm:py-5 
              lg:px-12 lg:py-6 xl:px-14 xl:py-7 2xl:px-16 2xl:py-8
              text-base sm:text-lg md:text-xl 
              lg:text-2xl xl:text-3xl
              font-bold text-purple-600 
              rounded-full 
              border-2 sm:border-3 lg:border-4 
              border-purple-600 
              hover:bg-purple-600 hover:text-white 
              transition-all duration-300
            "
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}