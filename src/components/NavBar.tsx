import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-10">
            <div className="flex-shrink-0">
              <a href="#" className="text-white text-lg font-semibold">
                <svg
                  fill="white"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 422.765 422.765"
                  width="52px"
                  height="52px"
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
                      <path d="M276.503,48.541V0H86.493L7.026,79.467v294.757h139.235v48.541h269.478V48.541H276.503z M82.392,23.899v51.467H30.925 L82.392,23.899z M21.026,89.366h75.366V14h166.111v346.224H21.026V89.366z M401.739,408.765H160.261v-34.541h209.518v-14h-93.275 v-15.38h93.275v-14h-93.275v-15.38h93.275v-14h-93.275v-15.38h93.275v-14h-93.275v-15.38h93.275v-14h-93.275v-15.38h93.275v-14 h-93.275v-42.205h93.275v-14h-93.275V62.541h125.235V408.765z"></path>{" "}
                      <rect
                        x="52.986"
                        y="104.746"
                        width="177.558"
                        height="14"
                      ></rect>{" "}
                      <rect
                        x="52.986"
                        y="160.951"
                        width="177.558"
                        height="14"
                      ></rect>{" "}
                      <rect
                        x="52.986"
                        y="190.331"
                        width="177.558"
                        height="14"
                      ></rect>{" "}
                      <rect
                        x="52.986"
                        y="219.711"
                        width="177.558"
                        height="14"
                      ></rect>{" "}
                      <rect
                        x="52.986"
                        y="249.091"
                        width="177.558"
                        height="14"
                      ></rect>{" "}
                      <rect
                        x="52.986"
                        y="278.471"
                        width="177.558"
                        height="14"
                      ></rect>{" "}
                      <rect
                        x="52.986"
                        y="307.851"
                        width="177.558"
                        height="14"
                      ></rect>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About me
                </a>
                <a
                  href="#"
                  className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
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
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
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
                className="hidden h-6 w-6"
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
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700"
              >
                About me
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700"
              >
                Projects
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700"
              >
                Skills
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
