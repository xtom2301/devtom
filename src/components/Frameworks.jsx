import { frameworks } from '../utils/utils';

const Frameworks = () => {
  return (
    <div className='py-4 text-center'>
      <h1 className='text-xl mb-4'>Libraries & Frameworks</h1>
      {frameworks.map(({ name, percent, icon }) => (
        <div key={name} className='flex flex-col space-y-2 my-2'>
          <div className='flex items-center gap-2'>
            <div className='text-xl'>{icon}</div>
            <h1>{name}</h1>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-3'>
            <div
              className='bg-purple-500 h-3 rounded-full'
              style={{ width: percent }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Frameworks;
