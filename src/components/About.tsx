import { Link } from "react-router-dom";
import PersonalPic from "../assets/personalpic.svg";
import CVFile from "../assets/CV_Szakacsi_Ferenc-Adam.pdf";
import CoverFile from "../assets/Cover_Letter_Szakacsi_Ferenc-Adam.pdf";
import { useTranslation } from "../translation/useTranslation";

export default function About() {
  const { translate } = useTranslation();
  const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "Tailwind",
    "Node",
    "Express",
    "MongoDB",
    "Jest",
    "Jira",
    "Figma",
    "Git",
    "GitHub",
    "GitLab",
  ];
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold mb-2 hover:text-gray-800">
          {translate("ABOUT_ABOUT")}
        </h1>
        <img
          src={PersonalPic}
          alt="Personal Picture"
          className="my-4 w-64 mx-auto border-2 border-pink-600 hover:border-blue-600 transition-colors duration-300"
        />
        {[
          {
            title: translate("ABOUT_WORK"),
            text: translate("ABOUT_EXPERIENCE"),
          },
          {
            title: translate("ABOUT_EDUCATION_TITLE"),
            text: translate("ABOUT_EDUCATION"),
          },
        ].map((section, index) => (
          <section
            key={index}
            className="bg-black p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-4 text-pink-600 hover:text-blue-500">
              {section.title}
            </h2>
            <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
              {section.text}
            </p>
          </section>
        ))}
        <div className="bg-black p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-pink-600 hover:text-blue-500">
            {translate("SKILLS")}
          </h2>
          <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("ABOUT_SKILLS_LIST")}
          </p>
          <ul className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal list-disc list-inside pl-4">
            {skills.map((skill, index) => (
              <li key={index} className="mt-2">
                {skill}
              </li>
            ))}
          </ul>
          <p className="my-4 text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("ABOUT_SKILLS_LINK1")}
            <Link
              to="/skills"
              className="text-pink-600 hover:text-blue-600"
              style={{ textDecoration: "underline" }}
            >
              {translate("SKILLS")}
            </Link>{" "}
            {translate("ABOUT_SKILLS_LINK2")}
          </p>
        </div>
        <div className="bg-black p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-pink-600 hover:text-blue-600">
            {translate("PROJECTS")}
          </h2>
          <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("ABOUT_PROJECTS_LINK1")}
            <Link
              to="/projects"
              className="text-pink-600 hover:text-blue-600"
              style={{ textDecoration: "underline" }}
            >
              {translate("PROJECTS")}
            </Link>{" "}
            {translate("ABOUT_PROJECTS_LINK2")}
          </p>
        </div>
        <div className="bg-black p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-pink-600 hover:text-blue-600">
            {translate("CERTIFICATES")}
          </h2>
          <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("ABOUT_CERTIFICATES_LINK1")}
            <Link
              to="/certificates"
              className="text-pink-600 hover:text-blue-600"
              style={{ textDecoration: "underline" }}
            >
              {translate("CERTIFICATES")}
            </Link>{" "}
            {translate("ABOUT_CERTIFICATES_LINK2")}
          </p>
        </div>
        <div className="bg-black p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-pink-600 hover:text-blue-600">
            {translate("ABOUT_HOBBIES")}
          </h2>
          <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("HOBBIES")}
          </p>
        </div>
        <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-gray-800">
          {translate("ABOUT_INTEREST")}
        </p>
        <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-gray-800">
          {translate("ABOUT_INTEREST_DOWNLOAD")}
        </p>
        <Link to={CVFile} download target="_blank" rel="noreferrer">
          <button className="my-4 bg-black text-pink-600 hover:bg-pink-600 hover:text-white font-bold py-2 px-4 rounded transition-transform duration-200 ease-in-out scale-100 hover:scale-110 active:scale-105">
            {translate("CV_DOWNLOAD")}
          </button>
        </Link>
        <Link to={CoverFile} download target="_blank" rel="noreferrer">
          <button className="my-2 bg-black text-pink-600 hover:bg-pink-600 hover:text-white font-bold py-2 px-4 rounded transition-transform duration-200 ease-in-out scale-100 hover:scale-110 active:scale-105">
            {translate("COVER_LETTER_DOWNLOAD")}
          </button>
        </Link>
      </div>
    </div>
  );
}
