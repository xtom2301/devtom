import { ProjectCard } from "../components";
import { latestProjects } from "../utils/utils";

const Portfolio = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row justify-center md:items-stretch md:gap-24 text-center">
        {latestProjects.map(
          ({ name, thumbnail, desc, technologies, link, github }, idx) => (
            <ProjectCard
              key={idx}
              name={name}
              thumbnail={thumbnail}
              desc={desc}
              technologies={technologies}
              link={link}
              github={github}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Portfolio;
