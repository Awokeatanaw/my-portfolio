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
      icon: <Code className="w-12 h-12 text-white" />,
      iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    { 
      value: "6+", 
      label: "Projects Completed", 
      icon: <Server className="w-12 h-12 text-white" />,
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    { 
      value: "15+", 
      label: "Technologies", 
      icon: <Database className="w-12 h-12 text-white" />,
      iconBg: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    { 
      value: "", 
      label: "Reliable Project Delivery", 
      icon: <Smartphone className="w-12 h-12 text-white" />,
      iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
  ];

  const tags = ["MERN Stack", "Django", "PostgreSQL"];

  return (
    <section id="about" className="py-16 px-6 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* Main Layout - Equal Height Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left: Text, Tags & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-between space-y-12"
          >
            {/* Introduction Text */}
            <div className="text-center lg:text-left">
              <div className="space-y-6 text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
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
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-10">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-8 py-4 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`inline-flex p-6 rounded-3xl ${stat.iconBg} shadow-xl group-hover:scale-110 transition-transform mb-4`}>
                    {stat.icon}
                  </div>
                  <h4 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Decorated Photo + Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Decorated Photo */}
            <div className="relative group mb-8 lg:mb-12">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-3xl group-hover:blur-4xl transition-all duration-700 -z-10" />
              
              {/* Inner gradient border */}
              <div className="relative p-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl">
                <div className="bg-white rounded-3xl p-2">
                  <img
                    src={myphoto}
                    alt="Awoke Atanaw"
                    className="w-72 md:w-80 lg:w-96 rounded-3xl object-cover shadow-inner"
                  />
                </div>
              </div>

              {/* Hover tilt effect */}
              <div className="absolute inset-0 rounded-3xl group-hover:-rotate-3 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
            </div>

            {/* Compact Core Competencies */}
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-purple-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                Core Competencies
              </h3>
              <div className="space-y-4">
                {competencies.map((comp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base md:text-lg font-medium text-gray-800">{comp.name}</span>
                      <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {comp.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${comp.percentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
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