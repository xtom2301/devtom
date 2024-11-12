import { ProjectCard } from "../components";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const Portfolio = () => {
  const projects = useQuery(api.projects.getAllProjects);

  return (
    <div>
      <div className="flex flex-col items-center md:flex-row justify-center md:items-stretch md:gap-24 text-center">
        {projects?.map(
          ({ name, thumbnail, desc, technologies, link, github, _id }) => (
            <ProjectCard
              key={_id}
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
