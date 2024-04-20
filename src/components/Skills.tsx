import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitlab,
  FaJira,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJest,
} from "react-icons/si";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { SetStateAction, useState } from "react";

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTech, setCurrentTech] = useState({ name: "", description: "" });

  const icons = [
    {
      Icon: FaJs,
      name: "JavaScript",
      description:
        "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
    },
    {
      Icon: FaHtml5,
      name: "HTML",
      description: "HTML stands for HyperText Markup Language.",
    },
    {
      Icon: FaCss3,
      name: "CSS",
      description:
        "Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in HTML.",
    },
    {
      Icon: FaReact,
      name: "React",
      description:
        "React is an open-source, front-end JavaScript library for building user interfaces.",
    },
    {
      Icon: SiTypescript,
      name: "TypeScript",
      description:
        "TypeScript is a superset of JavaScript that adds static types to the language.",
    },
    {
      Icon: SiTailwindcss,
      name: "Tailwind CSS",
      description:
        "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs.",
    },
    {
      Icon: FaNodeJs,
      name: "Node.js",
      description:
        "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser.",
    },
    {
      Icon: SiExpress,
      name: "Express",
      description:
        "Express.js, or simply Express, is a minimal and flexible Node.js web application framework.",
    },
    {
      Icon: SiMongodb,
      name: "MongoDB",
      description:
        "MongoDB is a source-available cross-platform document-oriented database program.",
    },
    {
      Icon: SiJest,
      name: "Jest",
      description:
        "Jest is a delightful JavaScript Testing Framework with a focus on simplicity.",
    },
    {
      Icon: FaJira,
      name: "Jira",
      description:
        "Jira is a software development tool by Atlassian that combines an issue tracking system, Kanban process workflow management tool, and project management functionality.",
    },
    {
      Icon: FaGithub,
      name: "GitHub",
      description: "GitHub is a web-based Git repository hosting service.",
    },
    {
      Icon: FaGitlab,
      name: "GitLab",
      description:
        "GitLab is a web-based DevOps lifecycle tool that provides version control and CI/CD pipeline features.",
    },
    {
      Icon: FaWordpress,
      name: "Wordpress",
      description:
        "WordPress is a free and open-source software web application that uses PHP and a MySQL or MariaDB database.",
    },
    {
      Icon: FaShopify,
      name: "Shopify",
      description:
        "Shopify is an e-commerce platform that enables businesses to sell products online.",
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
      <NavBar />
      <div className="flex items-center justify-center mt-8 mb-4">
        <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl transition-colors duration-200 ease-in-out group-hover:text-blue-500 hover:text-blue-500 cursor-pointer">
          Skills
        </h1>
      </div>
      <div className="flex items-center justify-center my-2">
        <p className="text-lg font-medium text-gray-800 lg:text-xl transition-colors duration-200 ease-in-out group-hover:text-blue-500 hover:text-blue-500 cursor-pointer">
          Below are some of the technologies I have experience with.
        </p>
      </div>
      <div className="flex items-center justify-center mt-2 mb-4">
        <p className="text-base font-medium text-gray-600 lg:text-lg transition-colors duration-200 ease-in-out group-hover:text-blue-500 hover:text-blue-500 cursor-pointer">
          Click on the icons to learn more about my experience with each one of
          them.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1 place-items-center">
        {icons.map(({ Icon, name, description }, i) => (
          <div
            key={i}
            onClick={() => openModal({ name, description })}
            className="self-center group cursor-pointer"
          >
            <Icon
              size={80}
              className={`mb-4 transition-transform transform-gpu group-hover:scale-110 hover:text-blue-500`}
            />
            <p
              className={`text-center text-sm mt-2 mb-4 italic underline-offset-8 underline uppercase transition-opacity group-hover:opacity-100 hover:text-blue-500`}
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
            className="bg-white p-8 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mt-8 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">
                {currentTech.name}
              </h2>
            </div>
            <p className="mt-4 hover:text-blue-500 cursor-pointer">
              {currentTech.description}
            </p>
            <div className="mt-8 flex items-center justify-center">
              <button
                onClick={closeModal}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 active:scale-95 transition-transform duration-300"
              >
                <span className="text-xl font-bold">Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
