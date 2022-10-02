import { BsMoonStarsFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center mt-4 mb-10'>
      <Link to='/' className='text-xl font-bold'>
        devtom.me
      </Link>
      <div className='flex items-center space-x-8'>
        <BsMoonStarsFill className='cursor-pointer text-2xl' />
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
