import { Main, Skills } from '../components';

const Landing = () => {
  return (
    <main>
      <section className='min-h-screen'>
        <Main />
      </section>
      <section>
        <Skills />
      </section>
    </main>
  );
};

export default Landing;
