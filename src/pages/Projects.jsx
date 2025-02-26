import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data.reverse()))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 h-24 overflow-hidden text-ellipsis line-clamp-4">{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:underline mt-4 block" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;