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

export default function Skills() {
  const icons = [
    {
      Icon: FaJs,
      name: "JavaScript",
      url: "https://www.ecma-international.org/",
    },
    {
      Icon: FaHtml5,
      name: "HTML",
      url: "https://html.spec.whatwg.org/",
    },
    {
      Icon: FaCss3,
      name: "CSS",
      url: "https://www.w3.org/Style/CSS/",
    },
    {
      Icon: FaReact,
      name: "React",
      url: "https://reactjs.org/",
    },
    {
      Icon: SiTypescript,
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      Icon: FaNodeJs,
      name: "Node.js",
      url: "https://nodejs.org/",
    },
    {
      Icon: SiExpress,
      name: "Express",
      url: "https://www.expressjs.com/",
    },
    {
      Icon: SiMongodb,
      name: "MongoDB",
      url: "https://www.mongodb.com/",
    },
    {
      Icon: SiJest,
      name: "Jest",
      url: "https://www.jestjs.com/",
    },
    {
      Icon: FaJira,
      name: "Jira",
      url: "https://www.atlassian.com/software/jira",
    },
    {
      Icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/",
    },
    {
      Icon: FaGitlab,
      name: "GitLab",
      url: "https://about.gitlab.com/",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3 grid-cols-1 place-items-center">
      {icons.map(({ Icon, name, url }, i) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="self-center"
          key={i}
        >
          <Icon size={80} className="mb-4" />
          <p className="text-center text-sm mt-2 mb-4 italic underline-offset-8 underline uppercase">
            {name}
          </p>
        </a>
      ))}
    </div>
  );
}
