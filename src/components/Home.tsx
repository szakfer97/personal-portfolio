import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  FaPhoneSquareAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import CVFile from "../assets/CV_Szakacsi_Ferenc-Adam.pdf";
import PersonalPortrait from "../assets/personalportrait.svg";

export default function Home() {
  const email = "szakfer97@gmail.com";
  const phoneNumber = "0771405782";
  const address = "Satu Mare, Romania";
  const gitHub = "szakfer97";
  const linkedIn = "Szakacsi Ferenc-Adam";
  const linkedInUrl = "https://www.linkedin.com/in/szakacsi-ferenc-adam/";
  const githubUrl = "https://github.com/szakfer97";

  return (
    <div>
      <NavBar />
      <div className="container mx-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 lg:mt-20">
        <h1 className="text-4xl font-bold text-gray-800 my-8 sm:text-5xl lg:text-6xl transition-all duration-300 hover:text-blue-500 hover:scale-105 cursor-pointer">
          Hello, I'm Szakacsi Ferenc-Adam!
        </h1>
        <p className="text-lg text-gray-600 mb-8 sm:text-xl lg:text-2xl transition-all duration-300 hover:text-blue-400 hover:scale-105 cursor-pointer">
          Welcome to my personal website.
        </p>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2 items-center mt-8 sm:mt-8 lg:mt-10">
          <img
            src={PersonalPortrait}
            alt="Personal Portrait"
            className="mt-2 mb-8 w-64 mx-auto hover:opacity-75 transition-opacity duration-300"
          />
          <div className="items-start flex flex-col gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-500 hover:text-blue-800 flex items-center flex-col sm:flex-row sm:items-start gap-2 transition-colors duration-200 hover:bg-blue-100 rounded-lg p-2"
            >
              <FaGithub className="inline h-6 w-6 mr-2 sm:mr-0 sm:mt-1 animate-pulse" />
              <span className="mt-1 font-bold hover:underline ml-0 sm:ml-2 transition-colors duration-200">
                {gitHub}
              </span>
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-500 hover:text-blue-900 flex items-center flex-col sm:flex-row sm:items-start gap-2 transition-colors duration-200 hover:bg-blue-100 rounded-lg p-2"
            >
              <FaLinkedin className="inline h-6 w-6 mr-2 sm:mr-0 sm:mt-1 animate-pulse" />
              <span className="mt-1 font-bold hover:underline ml-0 sm:ml-2 transition-colors duration-200">
                {linkedIn}
              </span>
            </a>
            <div className="flex items-center text-blue-500 hover:text-blue-900 gap-2 transition-colors duration-200 hover:bg-blue-100 rounded-lg p-2">
              <FaPhoneSquareAlt className="inline h-6 w-6 mr-2 sm:mr-0 sm:mt-1 animate-pulse" />
              <button
                className="mt-1 font-bold hover:underline ml-0 sm:ml-2 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(phoneNumber);
                }}
              >
                {phoneNumber}
              </button>
            </div>
            <div className="flex items-center text-blue-500 hover:text-blue-900 gap-2 transition-colors duration-200 hover:bg-blue-100 rounded-lg p-2">
              <FaMapMarkerAlt className="inline h-6 w-6 mr-2 sm:mr-0 sm:mt-1 animate-pulse" />
              <button
                className="mt-1 font-bold hover:underline ml-2 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(address);
                }}
              >
                {address}
              </button>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=szakfer97@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-500 hover:text-blue-900 flex items-center flex-col sm:flex-row sm:items-start gap-2 transition-colors duration-200 hover:bg-blue-100 rounded-lg p-2"
            >
              <AiOutlineMail className="inline h-6 w-6 mr-2 sm:mr-0 sm:mt-1 animate-pulse" />
              <span className="mt-1 font-bold hover:underline ml-0 sm:ml-2 transition-colors duration-200">
                {email}
              </span>
            </a>
            <Link
              to={CVFile}
              download
              target="_blank"
              rel="noreferrer"
              className="flex items-center ml-8 mt-1"
            >
              <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold px-4 py-2 flex items-center gap-2 sm:justify-center lg:justify-start transition-transform duration-200 ease-in-out scale-100 hover:scale-110 active:scale-105">
                <span className="block">Download my CV</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          <Section
            title="About me"
            description="I am a software developer with a passion for web development, data analysis and problem solving."
          />
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          <Section
            title="Experience"
            description="I have worked in various roles, from entry-level to senior positions, and have gained experience in different industries."
          />
          <Section
            title="Education"
            description="I have a background in computer science and hold a degree from a reputable university."
          />
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          <Section
            title="Hobbies"
            description="In my free time, I enjoy playing sports, watching movies, and listening to music."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Section({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className={`bg-white p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105`}
    >
      <h2
        className={`text-2xl font-bold text-gray-800 mb-4 transition-colors duration-200 hover:text-blue-500 cursor-pointer`}
      >
        {title}
      </h2>
      <p
        className={`text-gray-600 mb-6 transition-colors duration-200 hover:text-gray-800 cursor-pointer bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-lg`}
      >
        {description}
      </p>
    </div>
  );
}
