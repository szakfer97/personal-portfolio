import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  FaPhoneSquareAlt,
  FaRegFilePdf,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import PersonalPortrait from "../assets/personalportrait.svg";
import CVFile from "../assets/CV_Szakacsi_Ferenc-Adam.pdf";
import { useTranslation } from "../translation/useTranslation";
import ContactData from "../local/CONTACT.json";

export default function Home() {
  const { translate } = useTranslation();
  return (
    <div>
      <NavBar />
      <div className="container mx-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 lg:mt-20">
        <h1 className="text-4xl font-bold my-8 sm:text-5xl transition-all duration-300 hover:text-gray-800 hover:scale-105">
          {translate("HOME_HELLO")}
        </h1>
        <p className="text-lg font-bold mb-8 sm:text-xl lg:text-2xl transition-all duration-300 hover:text-gray-800 hover:scale-105">
          {translate("HOME_WELCOME")}
        </p>
        <div className="w-full max-w-4xl mx-auto grid gap-8 grid-cols-2 items-center mt-8 lg:mt-10">
          <img
            src={PersonalPortrait}
            alt="Personal Portrait"
            className="mt-2 mb-8 w-64 lg:mx-auto border-2 border-pink-600 hover:border-blue-600 transition-colors duration-300"
          />
          <div className="items-start flex flex-col gap-6 font-bold">
            <a
              href={ContactData.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 hover:scale-105 transition-colors duration-200"
            >
              <FaGithub className="h-8 w-6 mr-2 animate-pulse group-hover:animate-pulse md:inline hidden" />
              {translate("HOME_GITHUB")}
            </a>
            <a
              href={ContactData.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 hover:scale-105 transition-colors duration-200"
            >
              <FaLinkedin className="h-6 w-6 mr-2 animate-pulse group-hover:animate-pulse md:inline hidden" />
              {translate("HOME_LINKEDIN")}
            </a>
            <div className="flex items-center hover:text-gray-800 hover:scale-105 transition-colors duration-200">
              <FaPhoneSquareAlt className="h-6 w-6 mr-2 animate-pulse group-hover:animate-pulse md:inline hidden" />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(ContactData.PHONE);
                }}
              >
                {ContactData.PHONE}
              </button>
            </div>
            <a
              href="mailto:szakfer97@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-800 hover:scale-105 transition-colors duration-200"
            >
              <AiOutlineMail className="h-6 w-6 md:mr-2 animate-pulse group-hover:animate-pulse md:inline hidden" />
              {ContactData.EMAIL}
            </a>
            <Link
              to={CVFile}
              download
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-800 hover:scale-105 transition-colors duration-200"
            >
              <FaRegFilePdf className="h-6 w-6 mr-2 animate-pulse group-hover:animate-pulse md:inline hidden" />
              {translate("CV_DOWNLOAD")}
            </Link>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          <Section
            title={translate("ABOUT_ABOUT")}
            description={translate("HOME_ABOUT")}
          />
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          <Section
            title={translate("ABOUT_WORK")}
            description={translate("HOME_EXPERIENCE")}
          />
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          <Section
            title={translate("ABOUT_EDUCATION_TITLE")}
            description={translate("HOME_EDUCATION")}
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
      className={`bg-black p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105`}
    >
      <h2
        className={`text-2xl font-bold mb-4 transition-colors px-4 sm:px-6 lg:px-8 duration-200 text-pink-600 hover:text-blue-500`}
      >
        {title}
      </h2>
      <p
        className={`mb-6 transition-colors duration-200 p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-lg`}
      >
        {description}
      </p>
    </div>
  );
}
