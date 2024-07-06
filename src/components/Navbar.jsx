import { BsMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <div className="bg-white dark:bg-gray-800 sticky top-0 z-10">
      <nav className="max-w-screen-lg mx-auto py-4 px-0 flex justify-between items-center sm:px-4">
        <Link to="/" className="text-xl font-bold dark:text-white">
          devtom.io
        </Link>
        <div className="flex items-center space-x-8">
          <BsMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl dark:text-white"
          />
          <Link
            to="/portfolio"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md"
          >
            Portfolio
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
