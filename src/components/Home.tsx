export default function Home() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 lg:mt-20">
      <h1 className="text-4xl font-bold text-gray-800 my-8 sm:text-5xl lg:text-6xl transition-all duration-300 hover:text-blue-500 hover:scale-105">
        Hello, I'm Szakacsi Ferenc-Adam!
      </h1>
      <p className="text-lg text-gray-600 mb-8 sm:text-xl lg:text-2xl transition-all duration-300 hover:text-blue-400 hover:scale-105">
        Welcome to my personal portfolio.
      </p>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
        <Section
          title="About me"
          description="I am a software developer with a passion for web development, data analysis and problem solving."
        />
      </div>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
        <Section
          title="Experience"
          description="I have worked in various roles, from entry-level to senior positions, and have gained experience in different industries."
        />
        <Section
          title="Education"
          description="I have a background in computer science and hold a degree from a reputable university."
        />
      </div>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
        <Section
          title="Hobbies"
          description="In my free time, I enjoy playing sports, watching movies, and listening to music."
        />
      </div>
    </div>
  );
}

function Section({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className={`bg-white p-8 shadow-md rounded-lg mb-8 transition-all duration-200 hover:shadow-2xl hover:scale-105`}
    >
      <h2
        className={`text-2xl font-bold text-gray-800 mb-4 transition-colors duration-200 hover:text-blue-500`}
      >
        {title}
      </h2>
      <p
        className={`text-gray-600 mb-6 transition-colors duration-200 hover:text-gray-800`}
      >
        {description}
      </p>
    </div>
  );
}
