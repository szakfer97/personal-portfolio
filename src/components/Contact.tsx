export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl mb-8">
        Let's get in touch!
      </h1>
      <div className="max-w-4xl grid gap-8 lg:grid-cols-3 lg:gap-12 lg:max-w-none">
        <div className="bg-white p-8 shadow-md rounded-lg lg:p-12">
          <p className="text-lg font-medium text-gray-800 mb-2">
            Email:
            <a
              href="mailto:szakfer97@gmail.com"
              className="text-blue-500 font-bold hover:underline ml-2"
            >
              szakfer97@gmail.com
            </a>
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-lg lg:p-12">
          <p className="text-lg font-medium text-gray-800 mb-2">
            Phone:
            <button
              className="font-bold text-blue-500 ml-2"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText("0771405782");
              }}
            >
              0771405782
            </button>
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-lg lg:p-12">
          <p className="text-lg font-medium text-gray-800 mb-2">
            Address:
            <a
              href="https://www.google.com/maps/place/Satu+Mare/@47.7097799,23.6336141,11z"
              className="text-blue-500 font-bold hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Satu Mare, Romania
            </a>
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-lg lg:p-12">
          <p className="text-lg font-medium text-gray-800 mb-2">
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/szakacsi-ferenc-adam/"
              className="text-blue-500 font-bold hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Szakacsi Ferenc-Adam
            </a>
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-lg lg:p-12">
          <p className="text-lg font-medium text-gray-800 mb-2">
            GitHub:
            <a
              href="https://github.com/szakfer97"
              className="text-blue-500 font-bold hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              szakfer97
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
