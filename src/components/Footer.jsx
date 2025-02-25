import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaArrowUp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 relative">
      <div className="flex flex-wrap justify-center gap-8 mb-6">
        <a href="tel:+41765307190" className="hover:text-white flex items-center gap-2">
          <FaPhone /> Call Me
        </a>
        <a href="mailto:dzyhovskyi.vladyslav@gmail.com" className="hover:text-white flex items-center gap-2">
          <FaEnvelope /> Email
        </a>
        <a href="https://www.linkedin.com/in/vladyslav-dzyhovskyi/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/DzyhovskyiVladyslav" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
          <FaGithub /> GitHub
        </a>
        <a href="https://leetcode.com/u/VladyslavDzyhovskyi/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
          <FaCode /> LeetCode
        </a>
      </div>
      <div className="text-center mt-6 flex items-center justify-center gap-4">
        <p>© 2024 Vladyslav Dzyhovskyi. All rights reserved.</p>
        <span className="text-gray-600">|</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-1 hover:text-white transition">
            Back to Top <FaArrowUp/>
        </button>
      </div>
    </footer>
  );
}

export default Footer;