import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Full Stack Web Developer",
    subtitle: "Academic, Internship & Freelance Projects",
    period: "2022 – Present",
    location: "Wollo University / Remote",
    description:
      "Developed and maintained multiple full-stack web applications using React, Node.js, Express, MongoDB, and Django as part of academic projects, internship work, and self-driven development.",
    achievements: [
      "Built complete e-commerce, job portal, library management, and admin dashboard systems",
      "Designed and implemented RESTful APIs with JWT authentication",
      "Integrated payment systems (Stripe API & Chapa API) for secure transactions",
      "Developed responsive UIs using React, Tailwind CSS, and Framer Motion",
      "Worked with MongoDB, PostgreSQL, MySQL, SQLite, and Supabase",
      "Used Git & GitHub for version control and collaboration",
      "Deployed applications on Vercel",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    subtitle: "Job Portal Platform Project",
    period: "2023",
    location: "On-site",
    description:
      "Worked on a real-world Job Portal Platform during internship, focusing on both frontend and backend development with role-based access control.",
    achievements: [
      "Developed frontend using React and Tailwind CSS",
      "Built backend services using Supabase (Auth, Database, Realtime)",
      "Implemented authentication and role-based access (Job Seeker, Employer)",
      "Collaborated with supervisors to gather requirements and improve usability",
      "Delivered a production-ready system with full documentation",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Software Engineering (Final Year)",
    school: "Wollo University",
    period: "2021 – Present",
    description:
      "Focused on software engineering principles, data structures, algorithms, databases, and web application development. Gained strong practical experience through academic projects, internship, and independent learning.",
  },
  {
    degree: "Full Stack Web Development (Self-Learning & Online Platforms)",
    school: "Independent Study",
    period: "2022 – Present",
    description:
      "Mastered MERN Stack (React, Node.js, Express, MongoDB), Django & REST APIs, modern frontend tools (Tailwind CSS, Framer Motion), authentication, payment integration, Git, Docker (basics), and AWS (basics).",
  },
];

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 px-6 md:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-5 mb-12">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl md:text-4xl">🏢</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900">Work Experience</h3>
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 p-8 md:p-12"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                      <div>
                        <h4 className="text-2xl md:text-3xl font-black text-gray-900">
                          {exp.title}
                        </h4>
                        {exp.subtitle && (
                          <p className="text-lg md:text-xl text-purple-600 font-medium mt-1">
                            {exp.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                      {exp.description}
                    </p>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="text-purple-600 mt-1.5 text-lg">•</span>
                          <span className="text-gray-700 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-left lg:text-right">
                    <p className="text-lg md:text-xl font-semibold text-gray-900 flex items-center lg:justify-end gap-2">
                      <span className="text-base">📅</span> {exp.period}
                    </p>
                    <p className="text-gray-600 flex items-center lg:justify-end gap-2 mt-2">
                      <span className="text-base">📍</span> {exp.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-5 mb-12">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl md:text-4xl">🎓</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900">Education</h3>
          </div>

          <div className="space-y-10">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 p-8 md:p-12"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                      {edu.degree}
                    </h4>
                    <p className="text-xl md:text-2xl font-semibold text-purple-600 mb-4">
                      {edu.school}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {edu.description}
                    </p>
                  </div>

                  <div className="text-left lg:text-right">
                    <p className="text-lg md:text-xl font-semibold text-gray-900 flex items-center lg:justify-end gap-2">
                      <span className="text-base">📅</span> {edu.period}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}