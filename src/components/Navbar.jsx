import { BsMoonStarsFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className='sticky top-6 flex justify-between items-center mt-4 mb-10 sm:px-4 dark:bg-gray-800'>
      <Link to='/' className='text-xl font-bold dark:text-white'>
        devtom.me
      </Link>
      <div className='flex items-center space-x-8'>
        <BsMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className='cursor-pointer text-2xl dark:text-white'
        />
        <Link
          to='/portfolio'
          className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md'
        >
          Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
