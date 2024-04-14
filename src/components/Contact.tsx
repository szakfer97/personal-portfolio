export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl">
        Let's get in touch!
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-3">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p className="text-lg font-medium text-gray-800">Email:</p>
          <a
            onClick={() => {
              window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=szakfer97@gmail.com`;
            }}
            className="text-blue-500 font-medium hover:underline"
          >
            szakfer97@gmail.com
          </a>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p className="text-lg font-medium text-gray-800">Phone:</p>
          <a
            href="tel:1234567890"
            className="text-blue-500 font-medium hover:underline"
          >
            0771405782
          </a>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p className="text-lg font-medium text-gray-800">Address:</p>
          <p className="text-gray-600">Satu Mare, Romania</p>
        </div>
      </div>
    </div>
  );
}
