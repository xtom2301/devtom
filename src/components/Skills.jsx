import { ProLanguages, Frameworks, Tools } from '.';

const Skills = () => {
  return (
    <div className='mb-44'>
      <h1 className='text-3xl font-bold text-center dark:text-white'>
        <span className='text-indigo-500'>Skills</span> and{' '}
        <span className='text-purple-500'>Tools</span>
      </h1>
      <div className='md:flex md:justify-center md:gap-8'>
        <ProLanguages />
        <Tools />
        <Frameworks />
      </div>
    </div>
  );
};

export default Skills;
