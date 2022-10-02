import { Link } from 'react-router-dom';
import { latestProjects } from '../utils/utils';

const FeaturedProjects = () => {
  return (
    <div className='my-10 text-center'>
      <h1 className='text-3xl font-bold text-center mb-6 mt-20'>
        latest <span className='text-indigo-500'>Projects</span>
      </h1>
      <div className='flex flex-col items-center sm:flex-row justify-center sm:gap-4 md:gap-24'>
        {latestProjects.map(({ name, thumbnail, desc, technologies }) => (
          <div
            key={name}
            className='p-4 mb-4 max-w-sm w-96 h-auto bg-white rounded-lg border border-gray-200 shadow-md '
          >
            <img
              className='rounded-t-lg mx-auto object-fill mt-4 h-40 w-auto'
              src={thumbnail}
              alt=''
            />
            <div className='p-4'>
              <h5 className='mb-2 text-2xl font-bold  text-gray-800 '>
                {name}
              </h5>

              <p className='mb-3 font-normal text-gray-600 '>{desc}</p>
              <div className='text-left'>
                <h2 className='text-lg font-bold'>Technologies used:</h2>
                <ul className='list-disc pl-5'>
                  {technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-1 justify-center items-center mt-10'>
        <h1 className='text-2xl'>For more Projects:</h1>
        <Link
          to='/portfolio'
          className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md'
        >
          Click Me!
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
