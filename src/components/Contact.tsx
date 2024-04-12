import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl">
        Let's get in touch!
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-3">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p className="text-lg font-medium text-gray-800">Email</p>
          <a
            href="mailto:example@example.com"
            className="text-blue-500 font-medium hover:underline"
          >
            example@example.com
          </a>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p className="text-lg font-medium text-gray-800">Phone</p>
          <a
            href="tel:1234567890"
            className="text-blue-500 font-medium hover:underline"
          >
            123-456-7890
          </a>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p className="text-lg font-medium text-gray-800">Address</p>
          <p className="text-gray-600">123 Fake St, Fakeville, USA</p>
        </div>
      </div>
      <div className="mt-8 lg:mt-12">
        <form
          className="w-full max-w-lg mx-auto bg-white p-4 shadow-md rounded-lg lg:max-w-xl"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out w-full mx-auto sm:w-auto"
            >
              <span className="mr-2 text-sm font-medium">Submit</span>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 5L19.75 12M9.75 17L19.75 9"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
