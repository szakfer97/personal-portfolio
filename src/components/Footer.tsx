import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-200 text-center py-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <span className="text-center text-xs text-gray-400 sm:text-sm">
          Copyright &copy; {currentYear} All rights reserved.
        </span>
        <div className="flex flex-initial sm:flex-1 justify-center sm:justify-end space-x-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=szakfer97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white flex items-center"
          >
            <AiOutlineMail className="inline h-6 w-6 mr-1" />
            <span className="sr-only sm:not-sr-only">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/szakacsi-ferenc-adam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white flex items-center"
          >
            <FaLinkedin className="inline h-6 w-6 mr-1" />
            <span className="sr-only sm:not-sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/szakfer97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white flex items-center"
          >
            <FaGithub className="inline h-6 w-6 mr-1" />
            <span className="sr-only sm:not-sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
