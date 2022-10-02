import { ProLanguages, Frameworks, Tools } from '.';

const Skills = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>
        My <span className='text-indigo-500'>Skills</span> and{' '}
        <span className='text-purple-500'>Tools</span>
      </h1>
      <div>
        <ProLanguages />
        <Frameworks />
        <Tools />
      </div>
    </div>
  );
};

export default Skills;
