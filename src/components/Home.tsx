import { Link } from "react-router-dom";
import {
  FaPhoneSquareAlt,
  FaRegFilePdf,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import PersonalPic from "../assets/personalpic.svg";
import CVFile from "../assets/CV_Szakacsi_Ferenc-Adam.pdf";
import CoverFile from "../assets/Cover_Letter_Szakacsi_Ferenc-Adam.pdf";
import { useTranslation } from "../translation/useTranslation";
import ContactData from "../local/CONTACT.json";
import Footer from "./Footer";

export default function Home() {
  const { translate } = useTranslation();
  return (
    <div>
      <div className="container mx-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 lg:mt-20">
        <h1 className="text-4xl font-bold mt-2 mb-8 sm:text-5xl transition-all duration-300 hover:text-purple-600 hover:scale-105">
          {translate("HOME_HELLO")}
        </h1>
        <p className="text-lg font-bold mb-4 sm:text-xl lg:text-2xl transition-all duration-300 hover:text-purple-600 hover:scale-105">
          {translate("HOME_WELCOME")}
        </p>
        <div className="flex justify-center mt-8 lg:mt-12">
          <div className="relative">
            <img
              src={PersonalPic}
              alt="Personal Pic"
              className="w-64 border-2 rounded-md border-pink-600 hover:border-purple-600 transition-colors duration-300"
            />
            <span
              className="absolute inset-0 w-full h-full rounded-md animate-pulse opacity-80"
              style={{
                boxShadow: "0 0 40px 30px rgba(255, 255, 255, 1)",
                zIndex: "-1",
                filter: "blur(15px)",
              }}
            ></span>
          </div>
        </div>
        <div className="font-bold w-full max-w-4xl mx-auto mt-12 md:mt-20 mb-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 whitespace-nowrap">
          {[
            {
              href: ContactData.LINKEDIN_URL,
              icon: <FaLinkedin />,
              text: translate("HOME_LINKEDIN"),
            },
            {
              href: ContactData.GITHUB_URL,
              icon: <FaGithub />,
              text: translate("HOME_GITHUB"),
            },
            {
              href: "mailto:szakfer97@gmail.com",
              icon: <AiOutlineMail />,
              text: ContactData.EMAIL,
            },
            {
              href: CVFile,
              icon: <FaRegFilePdf />,
              text: translate("CV_DOWNLOAD"),
              isDownload: true,
            },
            {
              href: CoverFile,
              icon: <FaRegFilePdf />,
              text: translate("COVER_LETTER_DOWNLOAD"),
              isDownload: true,
            },
          ].map(({ href, icon, text, isDownload }, index) => (
            <div
              key={index}
              className="transition-all duration-200 hover:scale-105"
            >
              {isDownload ? (
                <Link
                  to={href}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-x-2 bg-gray-900 text-purple-600 hover:text-pink-600 transition-all duration-200 border-2 border-transparent rounded-lg px-6 py-4 shadow-md hover:shadow-purple-500/30 text-center"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-base sm:text-lg">{text}</span>
                </Link>
              ) : (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-x-2 bg-gray-900 text-purple-600 hover:text-pink-600 transition-all duration-200 border-2 border-transparent rounded-lg px-6 py-4 shadow-md hover:shadow-purple-500/30 text-center"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-base sm:text-lg">{text}</span>
                </a>
              )}
            </div>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(ContactData.PHONE);
            }}
            className="flex items-center justify-center gap-x-2 bg-gray-900 text-purple-600 hover:text-pink-600 transition-all duration-200 border-2 border-transparent rounded-lg px-6 py-4 shadow-md hover:shadow-purple-500/30 text-center"
          >
            <FaPhoneSquareAlt className="text-xl" />
            <span className="text-base sm:text-lg">{ContactData.PHONE}</span>
          </button>
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
      className={`bg-gray-900 p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105`}
    >
      <h2
        className={`text-2xl font-bold transition-colors px-4 sm:px-6 lg:px-8 duration-200 text-purple-600 hover:text-pink-600`}
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
