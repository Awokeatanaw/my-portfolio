import { motion } from 'framer-motion';
import myphoto from '../assets/myphoto.jpg';
import { Database, Server, Code, Smartphone } from 'lucide-react';

export default function About() {
  const competencies = [
    { name: "Full Stack Development", percentage: 95 },
    { name: "Backend Architecture", percentage: 92 },
    { name: "Database Design", percentage: 90 },
    { name: "UI/UX Development", percentage: 88 },
  ];

  const stats = [
    { 
      value: "2+", 
      label: "Years Experience", 
      icon: <Code className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18" />,
      iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    { 
      value: "6+", 
      label: "Projects Completed", 
      icon: <Server className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18" />,
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    { 
      value: "15+", 
      label: "Technologies", 
      icon: <Database className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18" />,
      iconBg: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    { 
      value: "", 
      label: "Reliable Project Delivery", 
      icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18" />,
      iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
  ];

  const tags = ["MERN Stack", "Django", "PostgreSQL"];

  return (
    <section 
      id="about" 
      className="
        py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-48 4xl:px-64
        bg-white overflow-hidden
        w-full
      "
    >
      <div className="
        max-w-7xl lg:max-w-8xl xl:max-w-9xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] 4xl:max-w-[2600px]
        mx-auto
      ">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-32"
        >
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl 
            lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-[10rem]
            font-black mb-4 sm:mb-6
            bg-gradient-to-r from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent
          ">
            About Me
          </h2>
        </motion.div>

        {/* Main Layout - Equal Height Columns */}
        <div className="
          grid lg:grid-cols-2 
          gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-32
          items-stretch
        ">
          {/* Left: Text, Tags & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-between space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
          >
            {/* Introduction Text */}
            <div className="text-center lg:text-left">
              <div className="
                space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8
                text-gray-700
                text-base sm:text-lg md:text-xl 
                lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl
                leading-relaxed lg:leading-loose xl:leading-loose
              ">
                <p>
                  I am a full-stack web developer with hands-on experience building complete web applications from frontend to backend. I focus on creating responsive user interfaces, secure APIs, and scalable systems using modern technologies.
                </p>
                <p>
                  I have developed multiple real-world projects including e-commerce platforms, library management systems, and job portals, applying best practices in authentication, database design, and API integration.
                </p>
                <p>
                  I am committed to writing clean code, delivering projects on time, and maintaining clear communication throughout development.
                </p>
              </div>

              {/* Skill Tags */}
              <div className="
                flex flex-wrap 
                gap-3 sm:gap-4 md:gap-5 lg:gap-6
                justify-center lg:justify-start 
                mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20
              ">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-6 py-3 sm:px-8 sm:py-4 
                      md:px-10 md:py-5 lg:px-12 lg:py-6 xl:px-14 xl:py-7
                      bg-gradient-to-r from-purple-50 to-pink-50 
                      text-purple-700 font-semibold 
                      rounded-full shadow-lg hover:shadow-xl transition-shadow
                      text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats - 2x2 Grid */}
            <div className="
              grid grid-cols-2 
              gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16
            ">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`
                    inline-flex p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-10
                    rounded-3xl ${stat.iconBg} shadow-xl 
                    group-hover:scale-110 transition-transform mb-3 sm:mb-4
                  `}>
                    {stat.icon}
                  </div>
                  <h4 className="
                    text-3xl sm:text-4xl md:text-5xl 
                    lg:text-6xl xl:text-7xl 2xl:text-8xl
                    font-black 
                    bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent 
                    mb-1 sm:mb-2
                  ">
                    {stat.value}
                  </h4>
                  <p className="
                    text-gray-600 font-medium
                    text-sm sm:text-base md:text-lg 
                    lg:text-xl xl:text-2xl 2xl:text-3xl
                  ">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Decorated Photo + Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="
              flex flex-col items-center lg:items-start
              space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16
            "
          >
            {/* Decorated Photo */}
            <div className="relative group w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
              {/* Outer glow ring */}
              <div className="
                absolute inset-0 rounded-3xl 
                bg-gradient-to-br from-purple-400/30 to-pink-400/30 
                blur-3xl group-hover:blur-4xl transition-all duration-700 -z-10
              " />
              
              {/* Inner gradient border */}
              <div className="
                relative p-1 sm:p-2 md:p-3 
                bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl
              ">
                <div className="bg-white rounded-3xl p-2 sm:p-3">
                  <img
                    src={myphoto}
                    alt="Awoke Atanaw"
                    className="
                      w-full h-auto
                      rounded-3xl object-cover shadow-inner
                    "
                  />
                </div>
              </div>

              {/* Hover tilt effect */}
              <div className="absolute inset-0 rounded-3xl group-hover:-rotate-3 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
            </div>

            {/* Compact Core Competencies */}
            <div className="
              w-full 
              max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl
              bg-white rounded-3xl shadow-2xl 
              p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14
              border border-purple-100
            ">
              <h3 className="
                text-xl sm:text-2xl md:text-3xl 
                lg:text-4xl xl:text-5xl 2xl:text-6xl
                font-bold text-gray-900 
                mb-4 sm:mb-6 md:mb-8 lg:mb-10
                text-center lg:text-left
              ">
                Core Competencies
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                {competencies.map((comp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <span className="
                        text-sm sm:text-base md:text-lg 
                        lg:text-xl xl:text-2xl 2xl:text-3xl
                        font-medium text-gray-800
                      ">
                        {comp.name}
                      </span>
                      <span className="
                        text-lg sm:text-xl md:text-2xl 
                        lg:text-3xl xl:text-4xl
                        font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent
                      ">
                        {comp.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 md:h-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${comp.percentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="
                          h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}