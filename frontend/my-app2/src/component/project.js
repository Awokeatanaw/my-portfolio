

import { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || "https://my-portfolio-production-b408.up.railway.app";
  useEffect(() => {
    fetch(`${backendUrl}/portfolio/projects/`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
        console.log("Image URL:", projects.image);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, [projects.image]);

  if (loading) {
    return <div className="text-center text-xl font-bold mt-10">Loading...</div>;
  }

  return (
    <div className="ping-text w-full bg-lightGray">
      <p className='c absolute md:text-[250px] text-[120px] text-white ml-4 mt-0 z-[-2]'>PROJECTS</p>
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border rounded-lg shadow-md p-4">
            <img
                 src={project.image}
                 alt={project.title}
                 className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-2">
              <h3 className="font-semibold">Technologies:{project.technologies}</h3>
              {/*<p className="text-gray-600">{project.technologies}</p>*/}
            </div>
            <div className="mt-4 flex justify-between">
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coral rounded-full py-1 px-4 text-white transition-transform transform hover:scale-105"
              >
                Live Demo
              </a>
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coral rounded-full py-1 px-4 text-white transition-transform transform hover:scale-105"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Project;