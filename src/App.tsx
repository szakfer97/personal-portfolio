import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

export default function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/skills", element: <Skills /> },
  ];
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
