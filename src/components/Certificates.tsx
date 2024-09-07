import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Certificates() {
  const certificates = [
    {
      name: "Cambridge Advanced English Certificate",
      description:
        "Certificate awarded upon successful completion of the Cambridge advanced English course.",
    },
    {
      name: "Teaching Module Diploma",
      description:
        "Certificate awarded upon successful completion of the teaching module.",
    },
    {
      name: "Collegium Varadinum Scientific Student Conference Commendation",
      description:
        "Commendation awarded upon succesful presentation of the conducted research in the subject of AI and its effects on society.",
    },
    {
      name: "SoloLearn ReactJS Certificate",
      description:
        "Certificate awarded upon successful completion of the SoloLearn ReactJS course.",
    },
    {
      name: "SoloLearn JavaScript Certificate",
      description:
        "Certificate awarded upon successful completion of the SoloLearn JavaScript course.",
    },
    {
      name: "SoloLearn HTML Certificate",
      description:
        "Certificate awarded upon successful completion of the SoloLearn HTML course.",
    },
    {
      name: "SoloLearn CSS Certificate",
      description:
        "Certificate awarded upon successful completion of the SoloLearn CSS course.",
    },
    {
      name: "SoloLearn C# Certificate",
      description:
        "Certificate awarded upon successful completion of the SoloLearn C# course.",
    },
    {
      name: "SoloLearn Python Certificate",
      description:
        "Certificate awarded upon successful completion of the SoloLearn Python course.",
    },
    {
      name: "SoloLearn Java Certificate",
      description:
        "Certificate awarded upon successful completion of the SoloLearn Java course.",
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center px-8 py-6 md:px-16 md:py-8 lg:px-24 transition-transform duration-300">
        <h1 className="text-3xl font-bold lg:text-5xl transition-colors duration-200 ease-in-out group-hover:text-blue-500 hover:text-gray-800">
          Certificates
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.name}
              className="bg-black rounded-xl shadow-lg p-8 md:p-10 lg:p-12 group-hover:shadow-2xl transition-shadow duration-200 hover:scale-110"
            >
              <h2 className="text-2xl font-bold text-blue-600 hover:text-pink-600 transition-colors duration-200">
                {certificate.name}
              </h2>
              <p className="mt-4 mb-8">{certificate.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
