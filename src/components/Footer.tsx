import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useTranslation } from "../translation/useTranslation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { translate } = useTranslation();

  return (
    <footer className="bg-gray-800 text-transparent font-bold text-center py-4 sm:px-6 lg:px-8 border-t-2 border-purple-600">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <span className="text-center text-transparent bg-purple-600 hover:bg-pink-600 bg-clip-text font-bold text-sm animate-pulse">
          {translate("FOOTER_COPYRIGHT1")} &copy; {currentYear}{" "}
          {translate("FOOTER_COPYRIGHT2")}
        </span>
        <div className="flex flex-initial sm:flex-1 justify-center sm:justify-end space-x-6 mt-2 sm:mt-0">
          <a
            href="mailto:szakfer97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-pink-600 flex items-center drop-shadow-[0_0_0.3rem_#fff5]"
          >
            <AiOutlineMail className="inline h-6 w-6 mr-1 animate-pulse" />
            <span className="sr-only sm:not-sr-only">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/szakacsi-ferenc-adam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-pink-600  flex items-center drop-shadow-[0_0_0.3rem_#fff5]"
          >
            <FaLinkedin className="inline h-6 w-6 mr-1 animate-pulse" />
            <span className="sr-only sm:not-sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/szakfer97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-pink-600  flex items-center drop-shadow-[0_0_0.3rem_#fff5]"
          >
            <FaGithub className="inline h-6 w-6 mr-1 animate-pulse" />
            <span className="sr-only sm:not-sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
