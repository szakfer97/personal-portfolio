export default function Contact() {
  const email = "szakfer97@gmail.com";
  const phoneNumber = "0771405782";
  const address = "Satu Mare, Romania";
  const linkedInUrl = "https://www.linkedin.com/in/szakacsi-ferenc-adam/";
  const githubUrl = "https://github.com/szakfer97";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl mb-8">
        Let's get in touch!
      </h1>
      <div className="max-w-4xl grid gap-8 lg:grid-cols-3 lg:gap-12 lg:max-w-none">
        <div className="bg-white p-8 shadow-md rounded-lg lg:p-12">
          <p className="text-lg font-medium text-gray-800 mb-2">
            Email:
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=szakfer97@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold hover:underline ml-2"
            >
              {email}
            </a>
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-lg lg:p-12">
          <p className="text-lg font-medium text-gray-800 mb-2">
            Phone:
            <button
              className="font-bold text-blue-500 hover:underline ml-2"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(phoneNumber);
              }}
            >
              {phoneNumber}
            </button>
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-lg lg:p-12">
          <p className="text-lg font-medium text-gray-800 mb-2">
            Address:
            <a
              href={address}
              className="text-blue-500 font-bold hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </a>
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-lg lg:p-12">
          <p className="text-lg font-medium text-gray-800 mb-2">
            LinkedIn:
            <a
              href={linkedInUrl}
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
              href={githubUrl}
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
