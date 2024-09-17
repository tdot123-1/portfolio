import { projectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <section className="flex flex-col">
      {projectsData.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </section>
  );
};

export default ProjectsList;
