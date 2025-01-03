import Project from "./Project";
import { projectsData } from "../projectData";

const WorkContainer = () => {
  return (
    <section id="work" className=" w-full scroll-mt-[76px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full gap-6">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            customStyle={project.customStyle}
            githubLink={project.githubLink}
            demourl={project.demourl}
            tech={project.tech}
          />
        ))}

        <span>
        <div className="bg-gray-700 text-white flex-1 h-full rounded-xl p-6 ">
          <div className="flex w-full h-full justify-center items-center ">
            <h1 className="text-2xl sm:text-4xl">See More...</h1>
          </div>
        </div>
        </span>
      </div>
    </section>
  );
};

export default WorkContainer;
