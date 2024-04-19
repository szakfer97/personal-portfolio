import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitlab,
  FaJira,
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiExpress, SiJest } from "react-icons/si";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Skills() {
  const icons = [
    {
      Icon: FaJs,
      name: "JavaScript",
      url: "https://www.ecma-international.org/",
    },
    { Icon: FaHtml5, name: "HTML", url: "https://html.spec.whatwg.org/" },
    { Icon: FaCss3, name: "CSS", url: "https://www.w3.org/Style/CSS/" },
    { Icon: FaReact, name: "React", url: "https://reactjs.org/" },
    {
      Icon: SiTypescript,
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    { Icon: FaNodeJs, name: "Node.js", url: "https://nodejs.org/" },
    { Icon: SiExpress, name: "Express", url: "https://www.expressjs.com/" },
    { Icon: SiMongodb, name: "MongoDB", url: "https://www.mongodb.com/" },
    { Icon: SiJest, name: "Jest", url: "https://www.jestjs.com/" },
    {
      Icon: FaJira,
      name: "Jira",
      url: "https://www.atlassian.com/software/jira",
    },
    { Icon: FaGithub, name: "GitHub", url: "https://github.com/" },
    { Icon: FaGitlab, name: "GitLab", url: "https://about.gitlab.com/" },
  ];

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl transition-colors duration-200 ease-in-out group-hover:text-blue-500 hover:text-blue-500">
          Skills
        </h1>
      </div>
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1 place-items-center">
        {icons.map(({ Icon, name, url }, i) => (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="self-center group"
            key={i}
          >
            <Icon
              size={80}
              className={`mb-4 transition-transform transform-gpu group-hover:scale-110`}
            />
            <p
              className={`text-center text-sm mt-2 mb-4 italic underline-offset-8 underline uppercase transition-opacity group-hover:opacity-100`}
            >
              {name}
            </p>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}
