import CardImageCarousel from "./CardImageCarousel";

const ProjectCard = ({ project, onOpenDetails }) => {
  const stack = project.stack || [];

  return (
    <div className="group flex flex-col justify-between h-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-white/[0.05] hover:border-blue-400/30 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.6)]">
      <CardImageCarousel project={project} />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-blue-500/[0.12] text-blue-300 border border-blue-500/25 px-[0.65rem] py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
          {stack.length > 3 && (
            <span className="bg-blue-500/[0.12] text-blue-300 border border-blue-500/25 px-[0.65rem] py-1 rounded-full text-xs">
              +{stack.length - 3}
            </span>
          )}
        </div>

        <button
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg text-sm font-medium text-white bg-blue-600 border-none cursor-pointer transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_0_12px_rgba(37,99,235,0.4)]"
          onClick={() => onOpenDetails(project)}
        >
          Ver Más
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;