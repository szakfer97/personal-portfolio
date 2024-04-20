import NavBar from "./NavBar";
import Footer from "./Footer";
import PersonalPic from "../assets/personalpic.svg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <NavBar />
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold mb-2 hover:text-blue-500 cursor-pointer">
          About Me
        </h1>
        <img
          src={PersonalPic}
          alt="Personal Picture"
          className="mt-4 w-64 mx-auto hover:opacity-75 transition-opacity duration-300"
        />
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-2xl font-bold mb-4 hover:text-blue-500 cursor-pointer">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500 cursor-pointer">
            As a Software Engineer at XYZ Company, I have gained experience in
            diverse areas of software development for the past 2 years. I have
            worked on various projects, from building and maintaining web
            applications to improving the efficiency of existing systems.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4 hover:text-blue-500 cursor-pointer">
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500 cursor-pointer">
            I graduated with a Bachelor's degree in Computer Science from ABC
            University. My academic journey has taught me critical skills in
            problem-solving, teamwork, and adaptability.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4 hover:text-blue-500 cursor-pointer">
            Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500 cursor-pointer">
            Throughout my professional journey, I have been involved in various
            important projects and roles.
          </p>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500 cursor-pointer">
            Below is a list of the technologies I have used in my projects:
          </p>
          <ul className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal list-disc list-inside pl-4">
            <li className="mt-2 hover:text-blue-500 cursor-pointer">
              JavaScript
            </li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">HTML</li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">CSS</li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">
              TypeScript
            </li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">React</li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">
              Tailwind
            </li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">Node</li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">Express</li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">MongoDB</li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">Jest</li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">Jira</li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">Figma</li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">Git</li>
            <li className="mt-2 hover:text-blue-500 cursor-pointer">GitHub</li>
            <li className="my-2 hover:text-blue-500 cursor-pointer">GitLab</li>
          </ul>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500 cursor-pointer">
            For more information on my acquired skills, you can check out the{" "}
            <Link
              to="/skills"
              className="text-blue-500 hover:text-blue-800 cursor-pointer"
              style={{ textDecoration: "underline" }}
            >
              Skills
            </Link>{" "}
            component.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4 hover:text-blue-500 cursor-pointer">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500 cursor-pointer">
            Some of my projects were quite challenging. For more information,
            you can check out the{" "}
            <Link
              to="/projects"
              className="text-blue-500 hover:text-blue-800 cursor-pointer"
              style={{ textDecoration: "underline" }}
            >
              Projects
            </Link>{" "}
            component.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4 hover:text-blue-500 cursor-pointer">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500 cursor-pointer">
            I am certified in Agile Scrum Master by ABC Company and in
            Cybersecurity Essentials by XYZ University.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4 hover:text-blue-500 cursor-pointer">
            Hobbies
          </h2>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500 cursor-pointer">
            When I'm not working, you can find me enjoying the simple pleasures
            of playing guitar, hiking, or binge-watching movies.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
