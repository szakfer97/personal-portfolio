import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Certificates() {
  const certificates = [
    {
      name: "Google Digital Garage Scholarship",
      description:
        "Scholarship awarded by Google Developers Program for participation in Digital Garage events",
    },
    {
      name: "Microsoft Imagine Cup 2021",
      description:
        "Winner of Microsoft Imagine Cup 2021, an annual hackathon organised by Microsoft",
    },
    {
      name: "Adobe Spark Fellowship",
      description:
        "Fellowship awarded by Adobe for exceptional work in the field of design and technology",
    },
    {
      name: "Codeium AI Scholarship",
      description:
        "Scholarship awarded by Codeium, a leading AI company for software engineering assistance",
    },
    {
      name: "Github Campus Expert",
      description:
        "Certification as a Github Campus Expert, recognising exceptional contributions to the Github Campus community",
    },
    {
      name: "UI/UX Design Course Certificate",
      description:
        "Certificate awarded upon successful completion of a comprehensive UI/UX design course",
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 transition-transform duration-300">
        <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl transition-colors duration-200 ease-in-out group-hover:text-blue-500 hover:text-blue-500">
          Certificates
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.name}
              className="bg-white rounded-xl shadow-lg p-8 md:p-10 lg:p-12 group-hover:shadow-2xl transition-shadow duration-200 hover:scale-110"
            >
              <h2 className="text-2xl font-bold text-blue-600 group-hover:text-blue-800 transition-colors duration-200">
                {certificate.name}
              </h2>
              <p className="text-gray-500 mt-4 mb-8 md:mb-10">
                {certificate.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
