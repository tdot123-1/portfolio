import { projectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mb-8">
      {projectsData.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </section>
  );
};

export default ProjectsList;
