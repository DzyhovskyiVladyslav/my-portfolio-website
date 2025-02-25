import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.reverse().slice(0, 5)));

    fetch("/blogposts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data.reverse().slice(0, 5)));
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome</h1>
        <p className="text-gray-400 text-lg">
          Showcasing my latest projects and blog posts about software engineering, cloud technologies, and development.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Latest Projects</h2>
        <div className="flex space-x-4 pb-1 overflow-x-auto">
          {projects.map((project) => (
            <div key={project.id} className="min-w-[300px] bg-gray-800 p-4 rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-2"/>
              <h3 className="text-xl font-bold text-white overflow-hidden text-ellipsis line-clamp-1">{project.title}</h3>
              <p className="text-gray-400 h-20 text-sm overflow-hidden text-ellipsis line-clamp-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-2 block">View Project →</a>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Blog Posts</h2>
        <div className="flex space-x-4 pb-1 overflow-x-auto">
          {posts.map((post) => (
            <div key={post.id} className="min-w-[300px] bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <Link to={`/blog/${post.id}`} className="text-blue-400 hover:underline">Read More →</Link>
            </div>
          ))}
        </div>
      </section>
      <hr className="border-gray-700 my-16" />
      <section className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Who I am</h2>
        <p className="text-gray-400 text-xl mb-6">Let Me Introduce Myself</p>
        <p className="text-gray-300 text-lg mb-6 max-w-175 mx-auto leading-relaxed">
          I am a passionate software engineer specializing in Java, Spring, and PostgreSQL.
          My expertise spans cloud computing and backend development, with experience in Docker and Kubernetes.
          I focus on building scalable, efficient, and maintainable systems that drive business success.
          Open to communication, proactive, and love working in a team.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="h-80">
            <img src="/images/my-photo.jpg" alt="My Photo" className="w-full h-full  shadow-xl"/>
          </div>
          <div className="text-left text-gray-300 text-lg leading-relaxed">
            <p><strong className="text-white">Name:</strong></p>
            <p>Vladyslav Dzyhovskyi</p>
            <p><strong className="text-white">Birth Date:</strong></p>
            <p>04 October 2000</p>
            <p><strong className="text-white">Email:</strong></p>
            <p>dzyhovskyi.vladyslav@gmail.com</p>
            <p><strong className="text-white">Mobile:</strong></p>
            <p>+41 76 630 7190</p>
            <p><strong className="text-white">Address:</strong></p>
            <p>Herznach, Switzerland</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-12">
          <a href="/resume.pdf" download="Dzyhovskyi - Software Engineer.pdf" className="bg-gray-700 hover:bg-gray-600 text-white text-xl px-8 py-4 rounded-xl shadow-lg transition">Download Resume (PDF)</a>
          <Link to="/about" className="bg-gray-700 hover:bg-gray-600 text-white text-xl px-8 py-4 rounded-xl shadow-lg transition">More About Me →</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;