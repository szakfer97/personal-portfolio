import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Personal portfolio",
      description:
        "My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
      link: "https://github.com/szakfer97/personal-portfolio",
      techStack: ["TypeScript", "React", "Tailwind CSS"],
    },
    {
      name: "Boiler management app",
      description: "Boiler management app with MERN stack.",
      link: "https://github.com/szakfer97/boiler-management-app",
      techStack: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "Express",
      ],
    },
    {
      name: "Quiz Show",
      description: "Quiz show game written in JavaScript, HTML, and CSS.",
      link: "https://github.com/szakfer97/quiz-show",
      techStack: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "Football data visualization",
      description: "Football data visualization in Python.",
      link: "https://github.com/szakfer97/Football-Data-Viz",
      techStack: ["Python"],
    },
    {
      name: "Random shapes drawing app",
      description: "Python apps that draw shapes of their own choosing.",
      link: "https://github.com/szakfer97/Random-Shapes-Drawer",
      techStack: ["Python"],
    },
    {
      name: "Sorting algorithm performance comparison",
      description: "C# app comparing sort algorithm performances.",
      link: "https://github.com/szakfer97/SortAlgoComparison",
      techStack: ["C#"],
    },
    {
      name: "Code challenges",
      description: "Code challenges in Java.",
      link: "https://github.com/szakfer97/CodeChallenges",
      techStack: ["Java"],
    },
    {
      name: "University coding tasks",
      description: "Tasks I did during my uni years.",
      link: "https://github.com/szakfer97/UniversityTasks",
      techStack: ["C#, Python"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl">Projects</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white p-4 shadow-md rounded-lg flex flex-col"
          >
            <a href={project.link}>
              <div className="flex items-center">
                <FaGithub className="text-gray-500 mr-2" />
                <p className="text-blue-500 font-medium hover:underline">
                  {project.name}
                </p>
              </div>
            </a>
            <p className="mt-2 text-lg">{project.description}</p>
            <div className="mt-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 text-gray-800 px-2 py-1 mr-2 inline-flex items-center rounded-full mb-2"
                >
                  <FaCode className="mr-1" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
