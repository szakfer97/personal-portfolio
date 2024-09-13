import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { TranslationProvider } from "./translation/useTranslationProvider";
import NavBar from "./components/NavBar";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Certificates = lazy(() => import("./components/Certificates"));

export default function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/skills", element: <Skills /> },
    { path: "/certificates", element: <Certificates /> },
  ];
  return (
    <BrowserRouter>
      <TranslationProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </TranslationProvider>
    </BrowserRouter>
  );
}
