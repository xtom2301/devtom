import { FeaturedProjects, Main, Skills } from "../components";

const Landing = () => {
  return (
    <main>
      <section>
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
