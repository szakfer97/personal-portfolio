import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../utils/useTranslation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { tr, changeLanguage, currentLanguage } = useTranslation();
  const toggleNavbar = () => setIsOpen(!isOpen);
  const navLinks = [
    { name: tr("NAVBAR_HOME"), path: "/" },
    { name: tr("NAVBAR_ABOUT"), path: "/about" },
    { name: tr("NAVBAR_PROJECTS"), path: "/projects" },
    { name: tr("NAVBAR_SKILLS"), path: "/skills" },
    { name: tr("NAVBAR_CERTIFICATES"), path: "/certificates" },
  ];

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang.toLowerCase());
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 animate-pulse">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-lg font-semibold">
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="64px"
                height="64px"
                viewBox="0 0 30.693 30.693"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M28.527,18.523H2.168L0,28.352h30.693L28.527,18.523z M12.317,26.999l0.442-2.003h5.177l0.44,2.003H12.317z"></path>{" "}
                      <path d="M28.458,17.902V11.87l0,0V2.342h-9.89h-6.44h-9.89v9.528V17.9h26.22V17.902z M26.592,16.347H4.103V4.207h8.422h5.645 h8.422V16.347z"></path>{" "}
                      <path d="M17.057,6.508l-0.943-0.542c0.037-0.142,0.039-0.29,0-0.435c-0.059-0.222-0.202-0.408-0.402-0.522 c-0.13-0.075-0.279-0.114-0.428-0.114c-0.309,0-0.595,0.166-0.748,0.432c-0.076,0.132-0.109,0.276-0.111,0.418l-0.981,0.557 C13.3,6.199,13.128,6.14,12.94,6.138c-0.258,0-0.544,0.149-0.646,0.3c-0.071,0.096-0.287,0.278-0.218,0.736 c0.069,0.459,0.41,0.577,0.593,0.638l0.018,1.062c-0.005,0.001-0.009,0.003-0.014,0.006l0.039,0.006 c-0.209,0.063-0.39,0.203-0.5,0.395c-0.076,0.131-0.109,0.276-0.11,0.419l-1.015,0.574c-0.14-0.092-0.305-0.146-0.477-0.146 c-0.156,0-0.309,0.042-0.444,0.123c-0.408,0.247-0.54,0.778-0.295,1.184c0.107,0.179,0.278,0.31,0.473,0.374l0.018,1.08 c-0.182,0.071-0.339,0.2-0.438,0.374c-0.115,0.2-0.145,0.432-0.085,0.654c0.06,0.223,0.203,0.409,0.403,0.523 c0.13,0.075,0.279,0.115,0.429,0.115c0.188,0,0.367-0.062,0.514-0.171l0.984,0.566c-0.004,0.09,0.001,0.18,0.025,0.269 c0.06,0.223,0.203,0.408,0.402,0.522c0.131,0.076,0.279,0.115,0.429,0.115c0.308,0,0.595-0.166,0.748-0.432 c0.097-0.169,0.127-0.359,0.103-0.54l0.942-0.529c0.15,0.133,0.344,0.219,0.559,0.222h0.013c0.183,0,0.353-0.061,0.493-0.16 l1.049,0.602c-0.005,0.09,0,0.181,0.024,0.271c0.06,0.222,0.203,0.408,0.401,0.521c0.131,0.076,0.281,0.115,0.43,0.115 c0.309,0,0.595-0.166,0.748-0.433c0.098-0.17,0.127-0.359,0.104-0.541l0.941-0.528c0.154,0.138,0.35,0.219,0.561,0.221h0.012 c0.469,0,0.854-0.381,0.861-0.85c0.004-0.341-0.193-0.637-0.484-0.78l-0.012-1.149c0.282-0.14,0.482-0.425,0.487-0.76 c0.002-0.23-0.084-0.448-0.245-0.613c-0.16-0.166-0.376-0.258-0.617-0.261c-0.258,0-0.488,0.117-0.646,0.3L18.555,9.99 c0.035-0.142,0.038-0.29-0.002-0.434c-0.041-0.157-0.127-0.294-0.242-0.402c0.004,0,0.008,0.002,0.013,0.003 c-0.067-0.067-0.144-0.124-0.23-0.167l-0.015-1.148c0.283-0.139,0.482-0.426,0.488-0.761c0.002-0.23-0.084-0.448-0.244-0.613 c-0.161-0.166-0.377-0.258-0.617-0.261C17.445,6.208,17.215,6.325,17.057,6.508z M14.939,5.56c0.07-0.122,0.203-0.199,0.344-0.199 c0.068,0,0.136,0.018,0.196,0.053c0.092,0.053,0.158,0.138,0.186,0.24c0.027,0.102,0.013,0.209-0.04,0.301 c-0.105,0.182-0.357,0.251-0.541,0.146C14.896,5.991,14.831,5.749,14.939,5.56z M13.802,7.012c0.002-0.119-0.021-0.234-0.065-0.34 l0.816-0.463c0.073,0.118,0.171,0.222,0.299,0.295c0.131,0.075,0.28,0.115,0.43,0.115c0.228,0,0.444-0.092,0.603-0.248l0.973,0.56 c-0.008,0.042-0.015,0.083-0.016,0.128c-0.005,0.447,0.334,0.816,0.77,0.863l0.018,1.002c0,0,0.001,0,0.002,0 c-0.273,0.029-0.521,0.186-0.658,0.427c-0.078,0.132-0.109,0.275-0.111,0.418l-0.981,0.556c-0.143-0.104-0.314-0.162-0.503-0.164 c-0.258,0-0.488,0.118-0.646,0.3l-0.941-0.54c0.035-0.142,0.039-0.29-0.001-0.435c-0.051-0.187-0.163-0.346-0.316-0.46l0.02,0.004 c-0.051-0.041-0.105-0.078-0.165-0.107l-0.013-1.149C13.598,7.634,13.797,7.347,13.802,7.012z M15.774,11.03 c-0.003,0.215-0.18,0.39-0.396,0.39v0.219l0,0l-0.005-0.219c-0.218-0.002-0.394-0.183-0.39-0.401c0.002-0.215,0.18-0.39,0.4-0.39 c0.106,0.001,0.205,0.043,0.279,0.12C15.735,10.823,15.776,10.924,15.774,11.03z M12.544,6.994c0.003-0.215,0.181-0.39,0.401-0.39 l0,0c0.106,0.001,0.205,0.044,0.279,0.12c0.073,0.075,0.113,0.175,0.112,0.282c-0.003,0.215-0.18,0.39-0.395,0.39h-0.006 C12.717,7.393,12.542,7.213,12.544,6.994z M12.613,9.514c0.071-0.122,0.202-0.199,0.345-0.199c0.068,0,0.136,0.019,0.196,0.053 c0.092,0.052,0.158,0.138,0.185,0.24c0.027,0.103,0.014,0.208-0.039,0.3c-0.105,0.183-0.356,0.252-0.541,0.146 C12.57,9.946,12.504,9.704,12.613,9.514z M10.27,11.195c-0.113-0.187-0.051-0.43,0.135-0.543c0.062-0.037,0.132-0.057,0.204-0.057 c0.141,0,0.268,0.071,0.34,0.192c0.054,0.091,0.07,0.197,0.044,0.3c-0.025,0.103-0.089,0.189-0.18,0.244 C10.63,11.441,10.378,11.377,10.27,11.195z M11.013,13.89c-0.105,0.182-0.357,0.251-0.541,0.146 c-0.092-0.052-0.157-0.138-0.185-0.24c-0.028-0.102-0.014-0.209,0.039-0.301c0.07-0.122,0.202-0.198,0.344-0.198 c0.069,0,0.136,0.019,0.197,0.053C11.056,13.458,11.122,13.701,11.013,13.89z M13.367,15.192 c-0.104,0.182-0.355,0.251-0.541,0.146c-0.092-0.054-0.158-0.138-0.185-0.241c-0.028-0.102-0.014-0.209,0.038-0.301 c0.071-0.123,0.203-0.199,0.344-0.199c0.069,0,0.137,0.018,0.196,0.053C13.41,14.76,13.477,15.002,13.367,15.192z M14.525,13.702 c-0.001,0.091,0.015,0.177,0.041,0.259l-0.875,0.491c-0.065-0.081-0.144-0.151-0.238-0.206c-0.13-0.074-0.279-0.114-0.429-0.114 c-0.281,0-0.544,0.141-0.705,0.368l-0.853-0.49c0.155-0.392,0.007-0.848-0.368-1.064c-0.084-0.048-0.178-0.081-0.272-0.098 l-0.017-1.02c0.085-0.02,0.167-0.052,0.244-0.098c0.197-0.119,0.337-0.306,0.392-0.53c0.048-0.19,0.025-0.385-0.054-0.562 l0.837-0.475c0.073,0.119,0.171,0.222,0.299,0.296c0.131,0.075,0.279,0.115,0.43,0.115c0.228,0,0.443-0.092,0.603-0.247 l0.971,0.558c-0.006,0.042-0.014,0.084-0.014,0.127c-0.005,0.384,0.244,0.709,0.589,0.825l0.017,1.062 C14.782,13.01,14.53,13.326,14.525,13.702z M15.388,14.11v0.233l-0.006-0.233c-0.218-0.003-0.394-0.183-0.391-0.401 c0.003-0.215,0.18-0.391,0.401-0.391c0.219,0.004,0.394,0.183,0.391,0.401C15.78,13.935,15.603,14.11,15.388,14.11z M18.13,15.261 c-0.104,0.181-0.354,0.252-0.541,0.146c-0.091-0.052-0.157-0.138-0.185-0.24c-0.027-0.102-0.014-0.208,0.039-0.3 c0.07-0.124,0.203-0.199,0.344-0.199c0.068,0,0.137,0.018,0.197,0.053C18.174,14.829,18.238,15.072,18.13,15.261z M20.546,13.789 c-0.002,0.215-0.179,0.39-0.394,0.39v0.233l-0.008-0.233c-0.104,0-0.203-0.043-0.277-0.119c-0.073-0.076-0.114-0.176-0.112-0.282 c0.002-0.215,0.181-0.391,0.401-0.391C20.374,13.391,20.549,13.571,20.546,13.789z M20.146,10.696L20.146,10.696 c0.105,0.002,0.205,0.045,0.278,0.12c0.074,0.076,0.114,0.176,0.112,0.282c-0.002,0.215-0.18,0.391-0.396,0.391v0.219l0,0 l-0.004-0.219c-0.219-0.003-0.394-0.184-0.392-0.402C19.749,10.872,19.926,10.696,20.146,10.696z M18.323,10.396l0.971,0.559 c-0.006,0.041-0.015,0.083-0.015,0.127c-0.004,0.447,0.334,0.816,0.771,0.863l0.012,0.985c-0.428,0.044-0.768,0.403-0.772,0.842 c-0.001,0.088,0.015,0.175,0.041,0.258l-0.875,0.491c-0.063-0.08-0.144-0.151-0.237-0.205c-0.131-0.075-0.279-0.115-0.43-0.115 c-0.281,0-0.544,0.14-0.704,0.368l-0.903-0.519c0.043-0.102,0.067-0.21,0.069-0.326c0.004-0.341-0.192-0.637-0.484-0.78 l-0.014-1.149c0.284-0.139,0.483-0.426,0.489-0.761c0.001-0.118-0.021-0.233-0.065-0.339l0.816-0.463 c0.073,0.118,0.172,0.222,0.3,0.296c0.131,0.075,0.279,0.114,0.43,0.114C17.948,10.643,18.164,10.551,18.323,10.396z M18.102,9.678c0.028,0.102,0.015,0.208-0.039,0.3c-0.104,0.182-0.355,0.251-0.541,0.146c-0.188-0.108-0.254-0.351-0.146-0.54 c0.069-0.124,0.203-0.199,0.345-0.199c0.067,0,0.135,0.019,0.196,0.053C18.009,9.49,18.075,9.575,18.102,9.678z M17.709,6.673 c0.105,0.001,0.205,0.044,0.277,0.12c0.074,0.076,0.115,0.176,0.113,0.282c-0.004,0.215-0.18,0.391-0.396,0.391h-0.005 c-0.219-0.003-0.395-0.184-0.393-0.401C17.311,6.848,17.488,6.673,17.709,6.673L17.709,6.673z"></path>{" "}
                    </g>{" "}
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="hidden md:flex flex-grow justify-between items-center">
            <div className="flex-grow flex justify-around">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-pink-600 transition-colors duration-200"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          fontWeight: "bold",
                          backgroundColor: "white",
                          color: "blue",
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
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentLanguage === lang.toLowerCase()
                      ? "bg-white text-blue-500"
                      : "text-white hover:bg-white hover:text-pink-600"
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
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">{tr("openMainMenu")}</span>
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
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          fontWeight: "bold",
                          backgroundColor: "white",
                          color: "blue",
                        }
                      : {}
                  }
                >
                  {name}
                </NavLink>
              ))}
              <div className="flex justify-between mt-4 border-t border-gray-700 pt-4">
                {["EN", "HU", "RO"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      currentLanguage === lang.toLowerCase()
                        ? "bg-white text-blue-500"
                        : "text-gray-300 hover:bg-white hover:text-pink-600"
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
