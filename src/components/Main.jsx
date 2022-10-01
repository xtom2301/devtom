import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BsMoonStarsFill } from 'react-icons/bs';
const Main = () => {
  return (
    <div>
      <nav className='flex justify-between items-center mt-4 mb-10'>
        <h1 className='text-xl font-bold'>devtom.me</h1>
        <div className='flex items-center space-x-8'>
          <BsMoonStarsFill className='cursor-pointer text-2xl' />
          <button className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md'>
            Portfolio
          </button>
        </div>
      </nav>
      <div className='text-center p-6'>
        <h1 className='text-4xl py-2 font-bold text-indigo-500'>Tom Martin</h1>
        <h3 className='text-2xl py-2'>Junior-Developer and learner.</h3>
        <p className='py-5 text-gray-600'>
          I create Websites, Apps and little Projects for myself or friends.
          Join me down below to get and stay in touch!
        </p>
      </div>
      <div className='text-4xl flex justify-center gap-4 py-2 text-gray-600'>
        <AiFillGithub />
        <AiFillLinkedin />
        <AiFillTwitterCircle />
        <AiFillInstagram />
      </div>
      <div className='overflow-hidden mx-auto bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full w-80 h-62 my-20'>
        <img src='me.png' alt='me' className='object-cover' />
      </div>
    </div>
  );
};

export default Main;
