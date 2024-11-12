import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { ProjectCard } from ".";

const FeaturedProjects = () => {
  const projects = useQuery(api.projects.getLatestProjects);
  return (
    <div className="text-center ">
      <h1 className="text-3xl font-bold text-center mb-6  dark:text-white">
        latest <span className="text-indigo-500">Projects</span>
      </h1>
      <div className="flex flex-col items-center md:flex-row justify-center md:items-stretch md:gap-24">
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
      <div className="my-10">
        <Link
          to="/portfolio"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md"
        >
          Click Me for more Projects!
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
