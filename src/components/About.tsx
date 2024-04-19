import NavBar from "./NavBar";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <NavBar />
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="mt-10 text-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          assumenda! Exercitationem quo, laudantium aut, officiis iste sit
          similique aspernatur odit doloribus? Quaerat, sunt, libero.
        </p>
      </div>
      <Footer />
    </div>
  );
}
