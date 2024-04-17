import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-200 text-center py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <span className="text-center text-xs text-gray-400 sm:text-sm">
          Copyright &copy; {currentYear} All rights reserved.
        </span>
        <div className="flex space-x-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=szakfer97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <AiOutlineMail className="inline h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/szakacsi-ferenc-adam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <FaLinkedin className="inline h-6 w-6" />
          </a>
          <a
            href="https://github.com/szakfer97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <FaGithub className="inline h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
