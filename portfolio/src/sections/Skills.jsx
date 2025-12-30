import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    icon: "🌐",
    iconBg: "from-blue-400 to-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border border-blue-200",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Redux / Redux Toolkit",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Axios",
      "Lucide React",
    ],
  },
  {
    title: "Backend",
    icon: "🖥️",
    iconBg: "from-purple-400 to-purple-600",
    badgeBg: "bg-purple-50 text-purple-700 border border-purple-200",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "RESTful API Development",
      "WebSockets",
      "JWT Authentication",
      "Payment Integration",
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    iconBg: "from-pink-400 to-pink-600",
    badgeBg: "bg-pink-50 text-pink-700 border border-pink-200",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    icon: "☁️",
    iconBg: "from-cyan-400 to-cyan-600",
    badgeBg: "bg-cyan-50 text-cyan-700 border border-cyan-200",
    skills: [
      "Git & GitHub",
      "Docker",
      "AWS (Basics)",
      "Postman",
      "VS Code",
      "Vercel / Netlify / Render",
    ],
  },
  {
    title: "Programming",
    icon: "<>",
    iconBg: "from-emerald-400 to-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    skills: ["JavaScript", "Python", "C++", "Java", "SQL", "Bash"],
  },
  {
    title: "Other",
    icon: "🌐",
    iconBg: "from-orange-400 to-orange-600",
    badgeBg: "bg-orange-50 text-orange-700 border border-orange-200",
    skills: ["Agile", "RESTful Design", "Authentication", "Testing", "Optimization"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        bg-white
        py-20 md:py-24 lg:py-32
        px-6 md:px-10 lg:px-16 2xl:px-24 3xl:px-32
      "
    >
      {/* Container grows ONLY on huge screens */}
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1900px]">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl 3xl:text-3xl text-gray-600 max-w-3xl 3xl:max-w-4xl mx-auto">
            Comprehensive expertise across modern web development technologies
          </p>
        </motion.div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            2xl:grid-cols-4
            gap-10 lg:gap-16 3xl:gap-20
          "
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="
                  bg-white rounded-3xl
                  shadow-lg hover:shadow-2xl
                  transition-all duration-500
                  p-10 3xl:p-14
                  text-center
                  border border-gray-100
                "
              >
                {/* ICON */}
                <div
                  className={`
                    w-24 h-24 3xl:w-28 3xl:h-28
                    mx-auto mb-8
                    rounded-3xl
                    bg-gradient-to-br ${group.iconBg}
                    flex items-center justify-center
                    shadow-xl
                    group-hover:scale-110
                    transition-transform duration-500
                  `}
                >
                  <span className="text-5xl 3xl:text-6xl text-white">
                    {group.icon}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl 3xl:text-4xl font-bold text-gray-900 mb-8">
                  {group.title}
                </h3>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-4 justify-center">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`
                        px-6 py-3 3xl:px-8 3xl:py-4
                        ${group.badgeBg}
                        rounded-full
                        font-semibold
                        text-sm md:text-base 3xl:text-lg
                        shadow-sm hover:shadow-md
                        transition-shadow
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
