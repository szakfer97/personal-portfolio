import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Projects() {
  const projects = [
    {
      name: "Personal portfolio",
      description:
        "My personal portfolio website built with TypeScript, React and Tailwind CSS.",
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
      name: "Football data visualization",
      description: "Football data visualization in Python.",
      link: "https://github.com/szakfer97/Football-Data-Viz",
      techStack: ["Python"],
    },
    {
      name: "Tic tac toe",
      description: "Tic-tac-toe game built with Vite, Svelte and TypeScript",
      link: "https://github.com/szakfer97/tic-tac-toe",
      techStack: ["Vite", "Svelte", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      name: "Workout tracker",
      description:
        "Tracks the calories burned during a workout. Written Vite, Vue and TypeScript.",
      link: "https://github.com/szakfer97/workout-tracker",
      techStack: ["Vite", "Vue", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      name: "Quiz show",
      description: "Quiz show game written in JavaScript, HTML, and CSS.",
      link: "https://github.com/szakfer97/quiz-show",
      techStack: ["JavaScript", "HTML", "CSS"],
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
      techStack: ["C#", "Python"],
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center p-4 lg:p-8">
        <h1 className="text-3xl font-bold lg:text-5xl transition-colors duration-200 ease-in-out hover:text-gray-800">
          Projects
        </h1>
        <p className="mt-4 text-lg hover:text-gray-800">
          Here are some of the projects I have worked on.
        </p>
        <p className="mt-4 text-lg hover:text-gray-800">
          Each card contains the project's name, description and the
          technologies used.
        </p>
        <p className="mt-4 text-lg hover:text-gray-800">
          Clicking on their name will redirect you to their respective GitHub
          repository.
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
                    className="bg-black text-pink-600 px-2 py-1 mr-2 inline-flex items-center rounded-full mb-2 group transition-colors duration-200 ease-in-out hover:text-white hover:bg-blue-600 cursor-pointer"
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
