import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ projects, onOpenDetails }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 w-full">
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} onOpenDetails={onOpenDetails} />
    ))}
  </div>
);

export default ProjectsGrid;