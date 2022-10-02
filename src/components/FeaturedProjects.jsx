import { Link } from 'react-router-dom';
import { latestProjects } from '../utils/utils';

const FeaturedProjects = () => {
  return (
    <div className='my-10 text-center '>
      <h1 className='text-3xl font-bold text-center mb-6 mt-20 dark:text-white'>
        latest <span className='text-indigo-500'>Projects</span>
      </h1>
      <div className='flex flex-col items-center md:flex-row justify-center md:items-stretch md:gap-24'>
        {latestProjects.map(({ name, thumbnail, desc, technologies, link }) => (
          <a
            href={link}
            target='_blank'
            key={name}
            className='hover:scale-105 cursor-pointer p-4 mb-4 max-w-sm w-96 h-auto bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-md '
          >
            <img
              className='rounded-t-lg mx-auto object-fill h-44 w-auto'
              src={thumbnail}
              alt=''
            />
            <div className='p-4'>
              <h5 className='mb-2 text-2xl font-bold  text-gray-800 dark:text-white'>
                {name}
              </h5>

              <p className='mb-3 font-normal text-gray-600 dark:text-gray-300'>
                {desc}
              </p>
              <div className='text-left'>
                <h2 className='text-lg font-bold dark:text-white'>
                  Technologies used:
                </h2>
                <ul className='list-disc pl-5'>
                  {technologies.map((t) => (
                    <li className='dark:text-white' key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className='mt-10'>
        <Link
          to='/portfolio'
          className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md'
        >
          Click Me for more Projects!
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
