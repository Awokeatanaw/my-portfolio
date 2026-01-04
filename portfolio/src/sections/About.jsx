// src/pages/About.jsx
import { motion } from "framer-motion";
import myphoto from "../assets/myphoto.jpg";
import { Database, Server, Code, Smartphone } from "lucide-react";

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
      icon: <Code className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />,
      iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
    {
      value: "6+",
      label: "Projects Completed",
      icon: <Server className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />,
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      value: "15+",
      label: "Technologies",
      icon: <Database className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />,
      iconBg: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      value: "",
      label: "Reliable Project Delivery",
      icon: <Smartphone className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />,
      iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    },
  ];

  const tags = ["MERN Stack", "Django", "PostgreSQL", "Supabase", "React", "Node.js"];

  return (
    <section
      id="about"
      className="
        w-full bg-white overflow-hidden
        py-16 md:py-24 lg:py-32
        px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24
      "
    >
      <div className="w-full max-w-[1920px] mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* FLEX CONTAINER — NO GAP ON LAPTOP+ */}
        <div className="flex flex-col lg:flex-row items-stretch -mx-2 lg:-mx-0">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:px-2"
          >
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-4 md:space-y-5 text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  I am a passionate full-stack developer specializing in building scalable, user-centric web applications. With expertise spanning frontend to backend, I transform ideas into robust digital solutions.
                </p>
                <p>
                  My work includes e-commerce platforms, job portals, and enterprise systems—always with clean architecture, secure practices, and pixel-perfect UIs.
                </p>
                <p>
                  I deliver projects on time, communicate clearly, and write maintainable code that stands the test of time.
                </p>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-4 py-2 md:px-6 md:py-3
                      bg-gradient-to-r from-purple-50 to-pink-50
                      text-purple-700 font-semibold
                      rounded-full text-xs md:text-sm
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* STATS — 2x2 */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`inline-flex p-3 md:p-4 rounded-2xl ${stat.iconBg} shadow-md mb-2`}>
                      {stat.icon}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black text-purple-600 mb-1">
                      {stat.value}
                    </h4>
                    <p className="text-gray-600 font-medium text-xs md:text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 mt-10 lg:mt-0 lg:px-2"
          >
            <div className="flex flex-col space-y-8 md:space-y-10">
              {/* PHOTO */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-2xl -z-10" />
                <div className="p-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl">
                  <div className="bg-white rounded-3xl p-1">
                    <img
                      src={myphoto}
                      alt="Awoke Atanaw"
                      className="w-full h-auto rounded-3xl object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* COMPETENCIES */}
              <div className="bg-white rounded-3xl shadow-lg p-5 md:p-6 border border-purple-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Core Competencies
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {competencies.map((comp, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm md:text-base font-medium text-gray-800">
                          {comp.name}
                        </span>
                        <span className="text-sm md:text-base font-bold text-purple-600">
                          {comp.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${comp.percentage}%` }}
                          transition={{ duration: 1.2, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}