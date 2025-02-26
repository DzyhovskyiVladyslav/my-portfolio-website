import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/blogposts.json`)
      .then((response) => response.json())
      .then((data) => {
        const foundPost = data.find((p) => p.id === parseInt(id));
        setPost(foundPost);
        if (foundPost) {
          fetch(`${import.meta.env.BASE_URL}${foundPost.contentFile}`)
            .then((response) => response.text())
            .then((html) => setContent(html));
        }
      })
      .catch((error) => console.error("Error loading post:", error));
  }, [id]);

  if (!post) {
    return <p className="text-gray-400 text-center">Loading...</p>;
  }

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
      <p className="text-gray-400 mb-4">{post.date}</p>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }}/>
    </div>
  );
}

export default BlogPost;