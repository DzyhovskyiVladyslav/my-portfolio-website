import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-bold">
            Vladyslav Dzyhovskyi | Software Engineer
          </h1>
        </Link>
        <button className="md:hidden block focus:outline-none text-2xl" onClick={() => setIsOpen(true)}>
          ☰
        </button>
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/projects" className="hover:text-gray-400 transition">Projects</Link>
          {/* <Link to="/blog" className="hover:text-gray-400 transition">Blog</Link> */}
          <Link to="/about" className="hover:text-gray-400 transition">About Me</Link>
        </nav>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}onClick={() => setIsOpen(false)}>
        <div className={`fixed top-0 right-0 w-64 bg-gray-800 h-full shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
          <div className="p-6">
            <button className="text-white text-2xl focus:outline-none mb-6" onClick={() => setIsOpen(false)}>
              ✕
            </button>
            <ul className="flex flex-col text-lg text-gray-300">
              <li className="py-2 border-b border-gray-700">
                <Link to="/" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="py-2 border-b border-gray-700">
                <Link to="/projects" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Projects</Link>
              </li>
{/*               <li className="py-2 border-b border-gray-700">
                <Link to="/blog" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Blog</Link>
              </li> */}
              <li className="py-2">
                <Link to="/about" className="hover:text-white transition" onClick={() => setIsOpen(false)}>About Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
