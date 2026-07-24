import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useCarousel } from "../hooks/useCarousel";
import { useModalEscape } from "../hooks/useModalEscape";
import ModalGallery from "./ModalGallery";
import ModalInfo from "./ModalInfo";
import Lightbox from "./Lightbox";

const ProjectModal = ({ project, onClose }) => {
  const images = project?.images || [];
  const { index, next, prev, goTo } = useCarousel(images.length);
  const [isZoomed, setIsZoomed] = useState(false);

  useModalEscape({
    isOpen: Boolean(project),
    isZoomed,
    onCloseZoom: () => setIsZoomed(false),
    onClose,
  });

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-[rgba(5,7,10,0.82)] backdrop-blur-md flex items-center justify-center z-[1000] p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[920px] max-h-[88vh] overflow-y-auto bg-[rgba(15,20,28,0.95)] border border-white/10 rounded-[20px] text-white pt-10 px-8 pb-8 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8),0_0_1px_1px_rgba(255,255,255,0.05)_inset]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 transition-all duration-200 hover:bg-white/[0.15] hover:text-white"
        >
          <FiX size={24} />
        </button>

        <div className="mb-8 border-b border-white/[0.08] pb-4">
          <h3 className="text-[1.75rem] font-bold text-white m-0 leading-tight">{project.title}</h3>
          {project.role && <p className="text-blue-400 text-sm font-medium mt-1.5">{project.role}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-start">
          <ModalGallery
            images={images}
            currentIndex={index}
            title={project.title}
            onNext={next}
            onPrev={prev}
            onDotClick={goTo}
            onZoom={(e) => {
              e.stopPropagation();
              setIsZoomed(true);
            }}
          />

          <ModalInfo project={project} />
        </div>
      </div>

      {isZoomed && (
        <Lightbox
          image={images[index]}
          alt={`${project.title} ampliada`}
          onClose={(e) => {
            if (e) e.stopPropagation();
            setIsZoomed(false);
          }}
        />
      )}
    </div>
  );
};

export default ProjectModal;