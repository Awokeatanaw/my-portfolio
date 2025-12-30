import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle } from "lucide-react";
import ecommerceImg from "../assets/ecomerce.png";
import jobportalImg from "../assets/jobportal.png";
import adminDashboardImg from "../assets/admindashboard.png";
import librarymanagementImg from "../assets/librarymanagement.png";

const projects = [
  {
    title: "Job Portal Platform",
    emoji: "💼",
    description:
      "A modern job portal connecting employers and candidates with smart matching, dashboards, and real-time notifications.",
    features: [
      "Register/Login as Job Seeker or Employer",
      "Advanced Job Search & Filtering",
      "Save Jobs & Track Applications",
      "Post & Manage Job Vacancies",
      "Employer Dashboard with Applications",
      "Resume Upload & Profile Management",
      "Live Real-time Notifications",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Supabase"],
    codeLink: "https://github.com/Awokeatanaw/job-portal",
    liveLink: "https://awoke-job-portal.vercel.app",
    image: jobportalImg,
  },
  {
    title: "Job Portal Admin Dashboard",
    emoji: "📊",
    description:
      "A powerful web-based admin panel for managing and monitoring a Job Portal system with real-time insights, analytics, and full control over users, jobs, companies, and applications.",
    features: [
      "Real-time Dashboard Overview (Users, Jobs, Applications, Companies)",
      "Interactive Analytics with Line, Bar & Pie Charts",
      "Full User & Job Management (View/Delete)",
      "Job Categories Distribution Visualization",
      "Secure Admin Authentication",
      "Monitor System Activity in Real Time",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Recharts", "Lucide React", "Supabase"],
    codeLink: "https://github.com/Awokeatanaw/portal-admin-master",
    liveLink: "https://portal-admin-master.vercel.app/",
    image: adminDashboardImg,
  },
  {
    title: "E-Commerce Platform",
    emoji: "🛒",
    description:
      "A full-featured online shopping platform with secure payments (Stripe & Chapa), real-time order updates, and powerful admin management.",
    features: [
      "User Authentication & Profile",
      "Product Browsing & Cart Management",
      "Secure Checkout (Stripe + Chapa)",
      "Real-time Order Tracking",
      "Admin: Add/Edit/Delete Products",
      "Admin: Manage Orders & Status",
      "Image Upload & Product Management",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API", "Chapa API", "Tailwind CSS", "Axios"],
    codeLink: "https://github.com/Awokeatanaw/ecommerce-app",
    liveLink: "https://ecommerce-demo.vercel",
    image: ecommerceImg,
  },
  {
    title: "Library Management System",
    emoji: "📚",
    description:
      "A comprehensive Library Management System built with React (frontend) and Django (backend). It enables users to browse and borrow books while providing librarians and admins full control over library operations with role-based access.",
    features: [
      "User Registration & Secure Login",
      "Browse & Search Books with Filters",
      "Borrow & Return Books with Status Tracking",
      "Personal Profile & Borrowing History",
      "Librarian: Add/Update/Delete Books",
      "Librarian: Approve/Reject Borrow Requests",
      "Admin: Full User & Librarian Management",
      "JWT Authentication & Role-Based Access",
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "SQLite",
      "JWT Authentication",
      "Git & GitHub",
    ],
    codeLink: "https://github.com/Awokeatanaw/library-management-system",
    liveLink: "https://library-management-demo.vercel",
    image: librarymanagementImg,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16 2xl:px-24 3xl:px-32 bg-white"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1900px]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl 3xl:text-3xl text-gray-600 max-w-3xl 3xl:max-w-5xl mx-auto">
            Real-world applications built with scalable architecture and modern technologies
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-32 3xl:space-y-36">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:grid-cols-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl -z-10 group-hover:blur-4xl transition-all duration-700" />
                  <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 3xl:p-16 overflow-hidden border border-purple-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full max-h-96 3xl:max-h-[500px] object-contain rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="space-y-8 3xl:space-y-10">
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-black text-gray-900 mb-4">
                      {project.title} <span className="inline-block ml-3">{project.emoji}</span>
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg lg:text-xl 3xl:text-2xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xl md:text-2xl 3xl:text-3xl font-bold text-gray-800 mb-5">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 3xl:gap-6">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 3xl:w-7 3xl:h-7 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700 3xl:text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xl md:text-2xl 3xl:text-3xl font-bold text-gray-800 mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3 3xl:gap-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-5 py-2 3xl:px-6 3xl:py-3 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow 3xl:text-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-5 pt-4">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 3xl:px-10 3xl:py-5 rounded-full border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-50 transition-all"
                    >
                      <Github className="w-6 h-6 3xl:w-7 3xl:h-7" />
                      View Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 3xl:px-10 3xl:py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-xl transition-all"
                    >
                      <ExternalLink className="w-6 h-6 3xl:w-7 3xl:h-7" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects */}
        <div className="text-center mt-20 md:mt-28">
          <p className="text-lg md:text-xl 3xl:text-2xl text-gray-600">
            Explore more of my work on{" "}
            <a
              href="https://github.com/Awokeatanaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-bold hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
