import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  FaPhoneSquareAlt,
  FaMapMarkerAlt,
  FaRegFilePdf,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import PersonalPortrait from "../assets/personalportrait.svg";
import CVFile from "../assets/CV_Szakacsi_Ferenc-Adam.pdf";

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
        <h1 className="text-4xl font-bold text-gray-800 my-8 sm:text-5xl lg:text-6xl transition-all duration-300 hover:text-blue-500 hover:scale-105">
          Hello, I'm Szakacsi Ferenc-Adam!
        </h1>
        <p className="text-lg text-gray-600 mb-8 sm:text-xl lg:text-2xl transition-all duration-300 hover:text-blue-500 hover:scale-105">
          Welcome to my personal website.
        </p>
        <div className="w-full max-w-4xl mx-auto grid gap-8 grid-cols-2 items-center mt-8 lg:mt-10">
          <img
            src={PersonalPortrait}
            alt="Personal Portrait"
            className="mt-2 mb-8 w-64 lg:mx-auto hover:opacity-75 transition-opacity duration-300"
          />
          <div className="items-start flex flex-col gap-6 hover:cursor-pointer font-bold">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-900 hover:scale-105 transition-colors duration-200"
            >
              <FaGithub className="inline h-6 w-6 mr-2 animate-pulse group-hover:animate-pulse" />
              {gitHub}
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-900 hover:scale-105 transition-colors duration-200"
            >
              <FaLinkedin className="inline h-6 w-6 mr-2 animate-pulse group-hover:animate-pulse" />
              {linkedIn}
            </a>
            <div className="flex items-center text-blue-600 hover:text-blue-900 hover:scale-105 transition-colors duration-200">
              <FaPhoneSquareAlt className="inline h-6 w-6 mr-2 animate-pulse group-hover:animate-pulse" />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(phoneNumber);
                }}
              >
                {phoneNumber}
              </button>
            </div>
            <div className="flex items-center text-blue-600 hover:text-blue-900 hover:scale-105 transition-colors duration-200">
              <FaMapMarkerAlt className="inline h-6 w-6 mr-2 animate-pulse group-hover:animate-pulse" />
              <button
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
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-900 hover:scale-105 transition-colors duration-200"
            >
              <AiOutlineMail className="inline h-6 w-6 mr-2 animate-pulse group-hover:animate-pulse" />
              {email}
            </a>
            <Link
              to={CVFile}
              download
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-900 hover:scale-105 transition-colors duration-200"
            >
              <FaRegFilePdf className="inline h-6 w-6 mr-2 animate-pulse group-hover:animate-pulse" />
              Download my CV
            </Link>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          <Section
            title="About me"
            description="Dedicated and enthusiastic software developer with a deep passion for continuous selfimprovement. My professional journey is driven by a desire to excel in both soft and hard skills while
            fostering productive collaborations with colleagues. I firmly believe that great software
            development extends beyond code; it's about teamwork, communication, and adaptability."
          />
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          <Section
            title="Experience"
            description="I have worked in various roles, from full-stack JavaScript developer to software developer. I have experience in developing web applications, mobile applications, and desktop applications."
          />
          <Section
            title="Education"
            description="I have a background in computer science and hold a bachelor's degree from Universiatea din Oradea. Currently doing my master's degree in computer software engineering."
          />
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          <Section
            title="Hobbies"
            description="In my free time, I enjoy playing sports, reading books, playing video games and coding side projects in my spare time."
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
