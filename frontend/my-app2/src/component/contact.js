import { useState } from "react";
import { FaPhone, FaEnvelope, FaTelegram, FaGithub, FaFacebook } from "react-icons/fa";

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || "https://my-portfolio-production-b408.up.railway.app";
      console.log(backendUrl);
      const response = await fetch(`${backendUrl}/portfolio/contacts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ping-text2 bg-lightGray">
      <p className='c absolute md:text-[250px] text-[120px] text-white ml-4 mt-0 z-[-2]'>GETME</p>
      <p className="ml-48 text-3xl font-bold pt-10 mb-5">contact me</p>
    <div className="max-w-4xl bg-white mx-auto p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6">
      
      <div className="md:w-2/3">
      
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">send a message</h2>
        {success && <p className="text-green-600">{success}</p>}
        {error && <p className="text-red-600">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-coral text-white p-2 rounded-lg hover:scale-105 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      
      <div className="md:w-1/3 p-6 rounded-lg shadow-md bg-lightGray">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <div className="space-y-3">
         
          <div className="flex items-center space-x-3">
            <FaPhone className="text-teal-600" />
            <span className="text-gray-700">0949860288</span>
          </div>

         
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-teal-600" />
            <span className="text-gray-700">awokeatanaw12@gmail.com</span>
          </div>

          
          <div className="flex space-x-4 mt-4">
            <a href="https://t.me/awokeat" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-coral text-2xl hover:scale-105 transition" />
            </a>
            <a href="https://github.com/Awokeatanaw" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-coral text-2xl hover:scale-105 transition" />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61567029266215" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-coral text-2xl hover:scale-105 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contactme;

