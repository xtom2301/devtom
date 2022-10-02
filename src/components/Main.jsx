import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
const Main = () => {
  return (
    <div className='sm:flex sm:justify-center sm:flex-col min-h-screen'>
      <div className='text-center p-6'>
        <h1 className='text-4xl py-2 font-bold text-indigo-500 '>Tom Martin</h1>
        <h3 className='text-2xl py-2 dark:text-white'>
          Junior-Developer and learner.
        </h3>
        <p className='py-5 text-gray-600 sm:w-96 sm:mx-auto dark:text-gray-400'>
          I create Websites, Apps and little Projects for myself or friends.
          Join me down below to get and stay in touch!
        </p>
      </div>
      <div className='text-4xl flex justify-center gap-4 py-2 text-gray-600'>
        <AiFillGithub className='cursor-pointer dark:text-white' />
        <AiFillLinkedin className='cursor-pointer dark:text-white' />
        <AiFillTwitterCircle className='cursor-pointer dark:text-white' />
        <AiFillInstagram className='cursor-pointer dark:text-white' />
      </div>
      <div className='overflow-hidden mx-auto bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full w-80 h-62 mt-10'>
        <img src='me.png' alt='me' className='object-cover' />
      </div>
    </div>
  );
};

export default Main;
