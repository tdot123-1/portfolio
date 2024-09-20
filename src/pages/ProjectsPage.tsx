import ProjectsList from "@/components/custom/ProjectsList";

const ProjectsPage = () => {
  return (
    <>
      <div className="bg-slate-400">
        <h2 className="text-center pt-6 text-slate-900 font-bold text-2xl">
          My Projects
        </h2>
        <ProjectsList />
      </div>
    </>
  );
};

export default ProjectsPage;
