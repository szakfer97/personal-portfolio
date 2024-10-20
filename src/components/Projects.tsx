import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { useTranslation } from "../translation/useTranslation";
import Footer from "./Footer";

export default function Projects() {
  const { translate } = useTranslation();
  const projects = [
    {
      name: "Personal portfolio",
      description: translate("PROJECTS_DESCRIPTION1"),
      link: "https://github.com/szakfer97/personal-portfolio",
      techStack: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      name: "Boiler management app",
      description: translate("PROJECTS_DESCRIPTION2"),
      link: "https://github.com/szakfer97/boiler-management-app",
      techStack: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "Express",
      ],
    },
    {
      name: "Football data visualization",
      description: translate("PROJECTS_DESCRIPTION3"),
      link: "https://github.com/szakfer97/Football-Data-Viz",
      techStack: ["Python"],
    },
    {
      name: "Tic tac toe",
      description: translate("PROJECTS_DESCRIPTION4"),
      link: "https://github.com/szakfer97/tic-tac-toe",
      techStack: ["Svelte", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      name: "Workout tracker",
      description: translate("PROJECTS_DESCRIPTION5"),
      link: "https://github.com/szakfer97/workout-tracker",
      techStack: ["Vue", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      name: "Quiz show",
      description: translate("PROJECTS_DESCRIPTION6"),
      link: "https://github.com/szakfer97/quiz-show",
      techStack: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "Random shapes drawing app",
      description: translate("PROJECTS_DESCRIPTION7"),
      link: "https://github.com/szakfer97/Random-Shapes-Drawer",
      techStack: ["Python"],
    },
    {
      name: "Sorting algorithm performance comparison",
      description: translate("PROJECTS_DESCRIPTION8"),
      link: "https://github.com/szakfer97/SortAlgoComparison",
      techStack: ["C#"],
    },
    {
      name: "Code challenges",
      description: translate("PROJECTS_DESCRIPTION9"),
      link: "https://github.com/szakfer97/CodeChallenges",
      techStack: ["Java"],
    },
    {
      name: "University coding tasks",
      description: translate("PROJECTS_DESCRIPTION10"),
      link: "https://github.com/szakfer97/UniversityTasks",
      techStack: ["C#", "Python"],
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 lg:p-8">
        <h1 className="text-3xl font-bold lg:text-5xl transition-colors duration-200 ease-in-out hover:text-purple-600">
          {translate("PROJECTS")}
        </h1>
        <p className="mt-4 text-lg font-bold hover:text-purple-600">
          {translate("PROJECTS_TEXT1")}
        </p>
        <p className="mt-4 text-lg font-bold hover:text-purple-600">
          {translate("PROJECTS_TEXT2")}
        </p>
        <p className="mt-4 text-lg font-bold hover:text-purple-600">
          {translate("PROJECTS_TEXT3")}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-black p-4 shadow-md rounded-lg flex flex-col transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <a
                href={project.link}
                target="_blank"
                className="flex items-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 text-pink-600 hover:text-blue-600"
              >
                <FaGithub className="mr-2" />
                <p className="font-medium  hover:underline">{project.name}</p>
              </a>
              <p className="mt-2 text-lg">{project.description}</p>
              <div className="mt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-black text-pink-600 px-2 py-1 mr-2 inline-flex items-center rounded-full mb-2 group transition-colors duration-200 ease-in-out hover:text-white"
                  >
                    <FaCode className="mr-1 group-hover:text-white transition-colors duration-200 ease-in-out" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
