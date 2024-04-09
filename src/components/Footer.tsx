export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 text-center py-4">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          Made with &#128150; by{" "}
          <a
            href="https://www.linkedin.com/in/szakacsi-ferenc-adam/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Szakacsi Ferenc-Adam
          </a>
        </p>
        <p className="text-xs">
          Built with{" "}
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Vite,
          </a>{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            React
          </a>{" "}
          and{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            TypeScript
          </a>{" "}
          using{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
}
