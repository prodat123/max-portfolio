import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg flex gap-4">
      <Link
        to="/contact"
        className={`px-4 py-2 rounded-full transition ${
          location.pathname === "/contact" ? "bg-orange-500" : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        Contact
      </Link>

      <Link
        to="/"
        className={`px-4 py-2 rounded-full transition font-bold ${
          location.pathname === "/" ? "bg-orange-500" : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        Home
      </Link>

      <Link
        to="/projects"
        className={`px-4 py-2 rounded-full transition ${
          location.pathname === "/projects" ? "bg-orange-500" : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        Projects
      </Link>
    </div>
  );
};

export default Navbar;
