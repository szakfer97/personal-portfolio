import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { TranslationProvider } from "./translation/useTranslationProvider";
import NavBar from "./components/NavBar";

const preloadRoutes = () => {
  const routes = ["Home", "About", "Projects", "Skills", "Certificates"];
  routes.forEach((route) => {
    const link = document.createElement("link");
    link.rel = "modulepreload";
    link.href = `/src/components/${route}.tsx`;
    document.head.appendChild(link);
  });
};

const Home = lazy(
  () => import(/* webpackChunkName: "home" */ "./components/Home")
);
const About = lazy(
  () => import(/* webpackChunkName: "about" */ "./components/About")
);
const Projects = lazy(
  () => import(/* webpackChunkName: "projects" */ "./components/Projects")
);
const Skills = lazy(
  () => import(/* webpackChunkName: "skills" */ "./components/Skills")
);
const Certificates = lazy(
  () =>
    import(/* webpackChunkName: "certificates" */ "./components/Certificates")
);

export default function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/skills", element: <Skills /> },
    { path: "/certificates", element: <Certificates /> },
  ];

  useEffect(() => {
    preloadRoutes();
  }, []);

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
