import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../translation/useTranslation";
import Logo from "../assets/logo.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { translate, setLanguage, language } = useTranslation();
  const toggleNavbar = () => setIsOpen(!isOpen);
  const navLinks = [
    { name: translate("HOME"), path: "/" },
    { name: translate("ABOUT"), path: "/about" },
    { name: translate("PROJECTS"), path: "/projects" },
    { name: translate("SKILLS"), path: "/skills" },
    { name: translate("CERTIFICATES"), path: "/certificates" },
  ];

  return (
    <nav className="bg-gray-800 border-b-2 border-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 animate-pulse">
          <div className="flex-shrink-0">
            <a href="/">
              <img src={Logo} alt="Logo" className="h-24 w-24 animate-pulse" />
            </a>
          </div>
          <div className="hidden md:flex flex-grow justify-between items-center">
            <div className="flex-grow flex justify-around">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  className="text-purple-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-pink-600 transition-colors duration-200"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          fontWeight: "bold",
                          backgroundColor: "white",
                          color: "purple",
                        }
                      : {}
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
            <div className="flex space-x-2 ml-4">
              {["EN", "HU", "RO"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang.toLowerCase())}
                  className={`px-3 py-1 rounded-md text-sm font-bold transition-colors duration-200 ${
                    language === lang.toLowerCase()
                      ? "bg-white text-purple-600 hover:text-pink-600"
                      : "hover:bg-white text-purple-600 hover:text-pink-600"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-purple-600 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">{translate("openMainMenu")}</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 animate-pulse">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  className="block px-3 py-2 rounded-md text-center font-medium text-purple-600 hover:text-pink-800"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          fontWeight: "bold",
                          backgroundColor: "white",
                          color: "purple",
                        }
                      : {}
                  }
                >
                  {name}
                </NavLink>
              ))}
              <div className="flex justify-between mt-4 border-t border-gray-800 pt-4">
                {["EN", "HU", "RO"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang.toLowerCase())}
                    className={`px-3 py-1 rounded-md text-sm font-bold transition-colors duration-200 ${
                      language === lang.toLowerCase()
                        ? "bg-white text-purple-600 hover:text-pink-600"
                        : "hover:bg-white text-purple-600 hover:text-pink-600"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
