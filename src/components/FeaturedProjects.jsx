import { Link } from "react-router-dom";
import { latestProjects } from "../utils/utils";
import { ProjectCard } from ".";

const FeaturedProjects = () => {
  return (
    <div className="my-10 text-center ">
      <h1 className="text-3xl font-bold text-center mb-6 mt-20 dark:text-white">
        latest <span className="text-indigo-500">Projects</span>
      </h1>
      <div className="flex flex-col items-center md:flex-row justify-center md:items-stretch md:gap-24">
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
      <div className="mt-10">
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
