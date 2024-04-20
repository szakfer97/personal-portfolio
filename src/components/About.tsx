import NavBar from "./NavBar";
import Footer from "./Footer";
import PersonalPic from "../assets/personalpic.svg";

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <NavBar />
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold mb-2">About Me</h1>
        <img
          src={PersonalPic}
          alt="Personal Picture"
          className="mt-4 w-64 mx-auto"
        />
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            As a Software Engineer at XYZ Company, I have gained experience in
            diverse areas of software development for the past 2 years. I have
            worked on various projects, from building and maintaining web
            applications to improving the efficiency of existing systems.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            I graduated with a Bachelor's degree in Computer Science from ABC
            University. My academic journey has taught me critical skills in
            problem-solving, teamwork, and adaptability.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="text-lg text-gray-600 list-disc pl-8 mx-auto max-w-[40rem]">
            <li className="mb-2">
              Programming Languages: JavaScript, TypeScript, Python
            </li>
            <li className="mb-2">Frameworks: React, Vue, Node.js</li>
            <li className="mb-2">Databases: MongoDB, PostgreSQL</li>
            <li className="mb-2">Tools: Git, VS Code, Docker</li>
          </ul>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            I am certified in Agile Scrum Master by ABC Company and in
            Cybersecurity Essentials by XYZ University.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
          <p className="text-lg text-gray-600 max-w-[40rem] mx-auto leading-relaxed lg:text-xl lg:leading-normal">
            When I'm not working, you can find me enjoying the simple pleasures
            of playing guitar, hiking, or binge-watching movies.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
