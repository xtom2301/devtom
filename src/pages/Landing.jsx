import { FeaturedProjects, Main, Skills } from '../components';

const Landing = () => {
  return (
    <main>
      <section className='min-h-screen'>
        <Main />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <FeaturedProjects />
      </section>
    </main>
  );
};

export default Landing;
