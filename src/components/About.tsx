import { Link } from "react-router-dom";
import PersonalPortrait from "../assets/personalportrait.svg";
import { useTranslation } from "../translation/useTranslation";
import Footer from "./Footer";

export default function About() {
  const { translate } = useTranslation();
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Next.js",
    "Node.js",
    "Express",
    ".NET",
    "MongoDB",
    "PostgreSQL",
    "Jest",
    "Postman",
    "Azure",
    "Jenkins",
    "SonarQube",
    "Git",
    "GitHub",
    "GitLab",
    "Vite",
    "Webpack",
    "Jira",
    "Figma",
  ];
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold mb-2 hover:text-purple-600">
          {translate("ABOUT_ABOUT")}
        </h1>
        <div className="relative my-12">
          <img
            src={PersonalPortrait}
            alt="Personal Portrait"
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
            className="bg-gray-900 p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-600 hover:text-pink-600">
              {section.title}
            </h2>
            <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
              {section.text}
            </p>
          </section>
        ))}
        <div className="bg-gray-900 p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-purple-600 hover:text-pink-600">
            {translate("SKILLS")}
          </h2>
          <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("ABOUT_SKILLS_LIST")}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal list-disc list-inside pl-4">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="mt-2 text-purple-600 hover:text-pink-600 transition-colors duration-200"
              >
                {skill}
              </li>
            ))}
          </ul>
          <p className="my-4 text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("ABOUT_SKILLS_LINK1")}
            <Link to="/skills" className="text-purple-600 hover:text-pink-600">
              {translate("SKILLS")}
            </Link>{" "}
            {translate("ABOUT_SKILLS_LINK2")}
          </p>
        </div>
        <div className="bg-gray-900 p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-purple-600 hover:text-pink-600">
            {translate("PROJECTS")}
          </h2>
          <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("ABOUT_PROJECTS_LINK1")}
            <Link
              to="/projects"
              className="text-purple-600 hover:text-pink-600"
            >
              {translate("PROJECTS")}
            </Link>{" "}
            {translate("ABOUT_PROJECTS_LINK2")}
          </p>
        </div>
        <div className="bg-gray-900 p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-purple-600 hover:text-pink-600">
            {translate("CERTIFICATES")}
          </h2>
          <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("ABOUT_CERTIFICATES_LINK1")}
            <Link
              to="/certificates"
              className="text-purple-600 hover:text-pink-600"
            >
              {translate("CERTIFICATES")}
            </Link>{" "}
            {translate("ABOUT_CERTIFICATES_LINK2")}
          </p>
        </div>
        <div className="bg-gray-900 p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-purple-600 hover:text-pink-600">
            {translate("ABOUT_LANGUAGES_TITLE")}
          </h2>
          <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("ABOUT_LANGUAGES")}
          </p>
        </div>
        <div className="bg-gray-900 p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-purple-600 hover:text-pink-600">
            {translate("ABOUT_HOBBIES")}
          </h2>
          <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            {translate("HOBBIES")}
          </p>
        </div>
        <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-purple-600">
          {translate("ABOUT_INTEREST")}
        </p>
        <p className="text-lg max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-purple-600">
          {translate("ABOUT_INTEREST_CONNECT")}
        </p>
      </div>
      <Footer />
    </div>
  );
}
