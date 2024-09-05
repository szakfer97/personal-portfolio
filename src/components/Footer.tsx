import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-transparent font-bold text-center py-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <span className="text-center text-transparent bg-blue-500 hover:bg-pink-600 bg-clip-text font-bold text-sm animate-pulse">
          Copyright &copy; {currentYear} All rights reserved.
        </span>
        <div className="flex flex-initial sm:flex-1 justify-center sm:justify-end space-x-6 mt-2 sm:mt-0">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=szakfer97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-blue-600 flex items-center drop-shadow-[0_0_0.3rem_#fff5]"
          >
            <AiOutlineMail className="inline h-6 w-6 mr-1 animate-pulse" />
            <span className="sr-only sm:not-sr-only">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/szakacsi-ferenc-adam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-blue-600 flex items-center drop-shadow-[0_0_0.3rem_#fff5]"
          >
            <FaLinkedin className="inline h-6 w-6 mr-1 animate-pulse" />
            <span className="sr-only sm:not-sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/szakfer97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-blue-600 flex items-center drop-shadow-[0_0_0.3rem_#fff5]"
          >
            <FaGithub className="inline h-6 w-6 mr-1 animate-pulse" />
            <span className="sr-only sm:not-sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
