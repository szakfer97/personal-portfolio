export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-200 text-center py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs text-gray-400 sm:text-sm">
          <span className="block">
            Copyright &copy; {currentYear} All rights reserved.
          </span>
          <span className="sm:ml-auto inline-block sm:mt-0 mt-2 align-baseline">
            Made by Szakacsi Ferenc-Adam
          </span>
        </p>
      </div>
    </footer>
  );
}
