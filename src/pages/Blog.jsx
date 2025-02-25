import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/blogposts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data.reverse()))
      .catch((error) => console.error("Error loading blog posts:", error));
  }, []);

  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-6">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4">{post.date}</p>
            <Link to={`/blog/${post.id}`} className="text-blue-400 hover:underline mt-4 block">Read More →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;