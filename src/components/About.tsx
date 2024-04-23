import { Link } from "react-router-dom";
import { Fragment } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PersonalPic from "../assets/personalpic.svg";
import CVFile from "../assets/CV_Szakacsi_Ferenc-Adam.pdf";

export default function About() {
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
      <NavBar />
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold mb-2 hover:text-blue-500 ">
          About Me
        </h1>
        <img
          src={PersonalPic}
          alt="Personal Picture"
          className="my-4 w-64 mx-auto hover:opacity-75 transition-opacity duration-300"
        />
        {[
          {
            title: "Work Experience",
            text: "As a Software Engineer at Devnest and Climarol Prest, I have gained experience in diverse areas of software development for the past 2 years. I have worked on various projects, from building and maintaining web applications to improving the efficiency of existing systems.",
          },
          {
            title: "Education",
            text: "I graduated with a Bachelor's degree in Computer Science from Universitatea din Oradea. My academic journey has taught me critical skills in problem-solving, teamwork, and adaptability.",
          },
        ].map((section, index) => (
          <Fragment key={index}>
            <h2 className="text-2xl font-bold mb-4 hover:text-blue-500">
              {section.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500">
              {section.text}
            </p>
          </Fragment>
        ))}
        <h2 className="text-2xl font-bold my-4 hover:text-blue-500">Skills</h2>
        <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500">
          Below is a list of the technologies I have used in my projects:
        </p>
        <ul className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal list-disc list-inside pl-4">
          {skills.map((skill, index) => (
            <li key={index} className="mt-2 hover:text-blue-500">
              {skill}
            </li>
          ))}
        </ul>
        <p className="my-4 text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500">
          For more detailed information on my acquired skills, you can check out
          the{" "}
          <Link
            to="/skills"
            className="text-blue-500 hover:text-blue-800"
            style={{ textDecoration: "underline" }}
          >
            Skills
          </Link>{" "}
          section of this website.
        </p>
        <h2 className="text-2xl font-bold my-4 hover:text-blue-500">
          Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500">
          Some of my projects were quite challenging. For more information, you
          can check out the{" "}
          <Link
            to="/projects"
            className="text-blue-500 hover:text-blue-800"
            style={{ textDecoration: "underline" }}
          >
            Projects
          </Link>{" "}
          section of this website.
        </p>
        <h2 className="text-2xl font-bold my-4 hover:text-blue-500">
          Certifications
        </h2>
        <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500">
          I am certified in Agile Scrum Master by ABC Company and in
          Cybersecurity Essentials by XYZ University.
        </p>
        <h2 className="text-2xl font-bold my-4 hover:text-blue-500">Hobbies</h2>
        <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500">
          When I'm not working, you can find me enjoying the simple pleasures of
          playing guitar, hiking, or binge-watching movies.
        </p>
        <p className="my-4 text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal hover:text-blue-500">
          Interested in getting in touch?
        </p>
        <Link to={CVFile} download target="_blank" rel="noreferrer">
          <button className="my-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform duration-200 ease-in-out scale-100 hover:scale-110 active:scale-105">
            Download my CV
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
