import { Fragment } from "react";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/Home"));
const NavBar = lazy(() => import("./components/NavBar"));
const Contact = lazy(() => import("./components/Contact"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Fragment>
        <NavBar />
        <Home />
        <Contact />
        <Projects />
        <Skills />
        <Footer />
      </Fragment>
    </Suspense>
  );
}
