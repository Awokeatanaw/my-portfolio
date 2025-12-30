import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "awokeatanaw12@gmail.com",
      href: "mailto:awokeatanaw12@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 948 860 288",
      href: "tel:+251948860288",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-28 px-6 md:px-10 lg:px-16 2xl:px-24 3xl:px-32 bg-white"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1900px]">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-7xl 3xl:text-8xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl 3xl:text-2xl text-gray-600 max-w-3xl 3xl:max-w-5xl mx-auto">
            Let’s build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 3xl:gap-24">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-4xl 3xl:text-5xl font-black mb-4">Let’s Talk</h3>
              <p className="text-gray-600 3xl:text-xl">
                Feel free to reach out for projects, ideas, or collaborations.
              </p>
            </div>

            <div className="space-y-6 3xl:space-y-8">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href || "#"}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-6 3xl:p-8 bg-gray-50 rounded-3xl border hover:bg-purple-50 transition"
                >
                  <div className="p-4 3xl:p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white">
                    <item.icon className="w-7 h-7 3xl:w-9 3xl:h-9" />
                  </div>
                  <div>
                    <p className="text-sm 3xl:text-base text-gray-500">{item.label}</p>
                    <p className="font-semibold 3xl:text-lg">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-6 3xl:gap-8">
              <motion.a
                href="https://github.com/Awokeatanaw"
                target="_blank"
                whileHover={{ y: -6 }}
                className="p-5 3xl:p-6 bg-gray-50 rounded-3xl hover:bg-purple-500 hover:text-white transition"
              >
                <Github className="w-8 h-8 3xl:w-10 3xl:h-10" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/awoke-atanaw-6671a9360"
                target="_blank"
                whileHover={{ y: -6 }}
                className="p-5 3xl:p-6 bg-gray-50 rounded-3xl hover:bg-purple-500 hover:text-white transition"
              >
                <Linkedin className="w-8 h-8 3xl:w-10 3xl:h-10" />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 3xl:p-16 border"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 3xl:space-y-8">

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-6 py-4 3xl:px-8 3xl:py-6 rounded-2xl border focus:ring-4 focus:ring-purple-100 text-base 3xl:text-lg"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-6 py-4 3xl:px-8 3xl:py-6 rounded-2xl border focus:ring-4 focus:ring-purple-100 text-base 3xl:text-lg"
              />

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Your Message"
                className="w-full px-6 py-4 3xl:px-8 3xl:py-6 rounded-2xl border resize-none focus:ring-4 focus:ring-purple-100 text-base 3xl:text-lg"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-5 3xl:py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl 3xl:text-2xl font-bold rounded-2xl shadow-lg hover:scale-[1.02] transition relative overflow-hidden flex items-center justify-center gap-4"
              >
                {isSending ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="text-3xl 3xl:text-4xl"
                  >
                    ↻
                  </motion.span>
                ) : (
                  <>
                    Send Message
                    <span className="text-2xl 3xl:text-3xl">✈️</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
