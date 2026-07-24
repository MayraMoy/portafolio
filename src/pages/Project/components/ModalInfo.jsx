import { FiGithub, FiExternalLink } from "react-icons/fi";

const SectionHeading = ({ children }) => (
  <h4 className="flex items-center text-[0.85rem] uppercase tracking-[0.08em] text-blue-400 font-bold mb-3 border-l-[3px] border-blue-500 pl-2">
    {children}
  </h4>
);

const ModalInfo = ({ project }) => (
  <div>
    <div className="mb-6">
      <SectionHeading>Descripción del Proyecto</SectionHeading>
      <p className="text-[0.925rem] leading-[1.65] text-slate-300 m-0">
        {project.longDescription || project.description}
      </p>
    </div>

    {project.features && project.features.length > 0 && (
      <div className="mb-6">
        <SectionHeading>Características Clave</SectionHeading>
        <ul className="pl-5 text-[0.9rem] text-slate-300 m-0 list-disc">
          {project.features.map((feature, idx) => (
            <li key={idx} className="mb-1.5 leading-relaxed">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="mb-6">
      <SectionHeading>Tecnologías Utilizadas</SectionHeading>
      <div className="flex flex-wrap gap-2">
        {(project.stack || []).map((tech) => (
          <span
            key={tech}
            className="bg-blue-500/[0.12] text-blue-300 border border-blue-500/25 px-3 py-1.5 rounded-full text-[0.78rem] font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="flex gap-4 mt-8 pt-4 border-t border-white/[0.06]">
      {project.repoLink && (
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-lg text-sm font-medium no-underline transition-all duration-200 text-slate-300 bg-transparent border border-white/[0.15] hover:bg-white/5 hover:text-white hover:border-white/30"
        >
          <FiGithub /> Repositorio
        </a>
      )}
      {project.demoLink && (
       <a 
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-lg text-sm font-medium no-underline transition-all duration-200 text-white bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        >
          <FiExternalLink /> Demo / Video
        </a>
      )}
    </div>
  </div>
);

export default ModalInfo;