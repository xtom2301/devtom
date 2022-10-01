import { ProLanguages, Frameworks, Tools } from '.';

const Skills = () => {
  return (
    <div className='mt-4'>
      <h1 className='text-3xl font-bold text-center mb-10'>
        My <span className='text-indigo-500'>Skills</span> and{' '}
        <span className='text-purple-500'>Tools</span>
      </h1>
      <ProLanguages />
      <Frameworks />
      <Tools />
    </div>
  );
};

export default Skills;
