import { useTranslation } from "../translation/useTranslation";
import Footer from "./Footer";

export default function Certificates() {
  const { translate } = useTranslation();
  const certificates = [
    {
      name: translate("CERTIFICATES_CAE_TITLE"),
      description: translate("CERTIFICATES_CAE"),
    },
    {
      name: translate("CERTIFICATES_MOD_TITLE"),
      description: translate("CERTIFICATES_MOD"),
    },
    {
      name: translate("CERTIFICATES_COM_TITLE"),
      description: translate("CERTIFICATES_COM"),
    },
    {
      name: translate("CERTIFICATES_SOL1_TITLE"),
      description: translate("CERTIFICATES_SOL1"),
    },
    {
      name: translate("CERTIFICATES_SOL2_TITLE"),
      description: translate("CERTIFICATES_SOL2"),
    },
    {
      name: translate("CERTIFICATES_SOL3_TITLE"),
      description: translate("CERTIFICATES_SOL3"),
    },
    {
      name: translate("CERTIFICATES_SOL4_TITLE"),
      description: translate("CERTIFICATES_SOL4"),
    },
    {
      name: translate("CERTIFICATES_SOL5_TITLE"),
      description: translate("CERTIFICATES_SOL5"),
    },
    {
      name: translate("CERTIFICATES_SOL6_TITLE"),
      description: translate("CERTIFICATES_SOL6"),
    },
    {
      name: translate("CERTIFICATES_SOL7_TITLE"),
      description: translate("CERTIFICATES_SOL7"),
    },
    {
      name: translate("CERTIFICATES_SOL8_TITLE"),
      description: translate("CERTIFICATES_SOL8"),
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-8 py-6 md:px-16 md:py-8 lg:px-24 transition-transform duration-300">
        <h1 className="text-3xl font-bold lg:text-5xl transition-colors duration-200 ease-in-out group-hover:text-purple-600 hover:text-purple-600">
          {translate("CERTIFICATES")}
        </h1>
        <div className="flex items-center justify-center mt-4 mb-2">
          <p className="px-4 text-lg font-bold transition-colors duration-200 ease-in-out group-hover:text-purple-600 hover:text-purple-600">
            {translate("CERTIFICATES_TEXT")}
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.name}
              className="bg-black rounded-xl shadow-lg p-8 md:p-10 lg:p-12 group-hover:shadow-2xl transition-shadow duration-200 hover:scale-110"
            >
              <h2 className="text-2xl font-bold text-pink-600 hover:text-purple-600 transition-colors duration-200">
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
