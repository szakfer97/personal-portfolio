import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/components/about.jpg";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About me
          </p>
          <h2 className="py-4">Who am I</h2>
          <p className="py-2 text-gray-600">
            Dedicated and enthusiastic software developer with a deep passion
            for continuous self-improvement. My professional journey is driven
            by a desire to excel in both soft and hard skills while fostering
            productive collaborations with colleagues. I firmly believe that
            great software development extends beyond code; it is about
            teamwork, communication, and adaptability.
          </p>
          <p className="py-2 text-gray-600">
            Throughout my time as a software developer, I have developed user
            interfaces using HTML, CSS, and JavaScript to ensure a visually
            appealing and responsive user experience. Implemented client-side
            programming with React to create dynamic web interfaces, handling
            tasks like user input validation and client-side routing. Ensured
            cross-browser compatibility and responsive design, providing a
            consistent user experience across various browsers and devices.
          </p>
          <p className="py-2 text-gray-600">
            Developed server-side applications using Node.js, managing APIs and
            server routes to handle requests from the front end and interact
            with the database. Created and managed RESTful and GraphQL APIs for
            seamless interaction between the front end and back end.
            Collaborated with cross-functional teams, including designers and
            project managers, to deliver successful web development projects.
            Conducted unit testing and integration testing, identifying and
            resolving issues in both front-end and back-end components.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out my skills
            </p>
          </Link>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out my projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}
