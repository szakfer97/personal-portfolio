import { SetStateAction, useState } from "react";
import {
  FaFigma,
  FaGit,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitlab,
  FaJira,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiJest,
  SiJenkins,
  SiSonar,
} from "react-icons/si";
import { useTranslation } from "../translation/useTranslation";
import Footer from "./Footer";

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTech, setCurrentTech] = useState({ name: "", description: "" });
  const { translate } = useTranslation();

  const icons = [
    {
      Icon: FaReact,
      name: "React",
      description: translate("SKILLS_REACT"),
    },
    {
      Icon: SiTypescript,
      name: "TypeScript",
      description: translate("SKILLS_TS"),
    },
    {
      Icon: FaJs,
      name: "JavaScript",
      description: translate("SKILLS_JS"),
    },
    {
      Icon: FaHtml5,
      name: "HTML",
      description: translate("SKILLS_HTML"),
    },
    {
      Icon: FaCss3,
      name: "CSS",
      description: translate("SKILLS_CSS"),
    },
    {
      Icon: SiTailwindcss,
      name: "Tailwind CSS",
      description: translate("SKILLS_TAILWIND"),
    },
    {
      Icon: SiNextdotjs,
      name: "Next.js",
      description: translate("SKILLS_NEXT"),
    },
    {
      Icon: FaNodeJs,
      name: "Node.js",
      description: translate("SKILLS_NODE"),
    },
    {
      Icon: SiExpress,
      name: "Express",
      description: translate("SKILLS_EXPRESS"),
    },
    {
      Icon: SiDotnet,
      name: ".NET",
      description: translate("SKILLS_NET"),
    },
    {
      Icon: SiMongodb,
      name: "MongoDB",
      description: translate("SKILLS_MONGO"),
    },
    {
      Icon: SiMysql,
      name: "MySQL",
      description: translate("SKILLS_MYSQL"),
    },
    {
      Icon: SiPostgresql,
      name: "PostgreSQL",
      description: translate("SKILLS_POSTGRE"),
    },
    {
      Icon: SiJest,
      name: "Jest",
      description: translate("SKILLS_JEST"),
    },
    {
      Icon: SiJenkins,
      name: "Jenkins",
      description: translate("SKILLS_JENKINS"),
    },
    {
      Icon: SiSonar,
      name: "SonarQube",
      description: translate("SKILLS_SONAR"),
    },
    {
      Icon: FaGit,
      name: "Git",
      description: translate("SKILLS_GIT"),
    },
    {
      Icon: FaGithub,
      name: "GitHub",
      description: translate("SKILLS_GITHUB"),
    },
    {
      Icon: FaGitlab,
      name: "GitLab",
      description: translate("SKILLS_GITLAB"),
    },
    {
      Icon: FaJira,
      name: "Jira",
      description: translate("SKILLS_JIRA"),
    },
    {
      Icon: FaFigma,
      name: "Figma",
      description: translate("SKILLS_FIGMA"),
    },
  ];

  const openModal = (
    tech: SetStateAction<{ name: string; description: string }>
  ) => {
    setCurrentTech(tech);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-8 mb-4">
        <h1 className="text-3xl font-bold lg:text-5xl transition-colors duration-200 ease-in-out group-hover:text-purple-600 hover:hover:text-purple-600">
          {translate("SKILLS")}
        </h1>
      </div>
      <div className="flex items-center justify-center my-2">
        <p className="px-4 text-lg font-bold transition-colors duration-200 ease-in-out group-hover:text-purple-600 hover:text-purple-600">
          {translate("SKILLS_TEXT1")}
        </p>
      </div>
      <div className="flex items-center justify-center my-2">
        <p className="px-4 text-lg font-bold transition-colors duration-200 ease-in-out group-hover:text-purple-600 hover:text-purple-600">
          {translate("SKILLS_TEXT2")}
        </p>
      </div>
      <div className="flex items-center justify-center mt-2 mb-4">
        <p className="px-4 text-lg font-bold transition-colors duration-200 ease-in-out group-hover:text-purple-600 hover:text-purple-600">
          {translate("SKILLS_TEXT3")}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 grid-cols-2 place-items-center">
        {icons.map(({ Icon, name, description }, i) => (
          <div
            key={i}
            onClick={() => openModal({ name, description })}
            className="self-center hover:scale-125 cursor-pointer hover:text-purple-600"
          >
            <Icon
              size={80}
              className={`mb-4 transition-transform transform-gpu`}
            />
            <p
              className={`text-center text-sm mt-2 mb-4 font-bold uppercase transition-opacity group-hover:opacity-100`}
            >
              {name}
            </p>
          </div>
        ))}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mt-4 flex items-center justify-center">
              <h2 className="text-3xl font-bold hover:text-purple-600">
                {currentTech.name}
              </h2>
            </div>
            <p className="mt-4">{currentTech.description}</p>
            <div className="mt-8 flex items-center justify-center">
              <button
                onClick={closeModal}
                className="px-8 py-3 bg-transparent rounded-lg hover:text-purple-600 hover:scale-105 active:scale-95 transition-transform duration-300"
              >
                <span className="text-xl font-bold">
                  {translate("SKILLS_BUTTON")}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
