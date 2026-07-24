import { useCarousel } from "../hooks/useCarousel";
import StatusBadge from "./StatusBadge";

const CardImageCarousel = ({ project }) => {
  const images = project.images || [];
  const { index, next, prev, goTo } = useCarousel(images.length);

  return (
    <div className="relative w-full h-[200px] md:h-[220px] bg-[rgba(15,23,42,0.6)] overflow-hidden">
      {images.length > 0 ? (
        <>
          <img
            src={images[index]}
            alt={`${project.title} screenshot`}
            width="360"
            height="220"
            loading="lazy"
            className="w-full h-full object-cover block transition-transform duration-[400ms] group-hover:scale-[1.02]"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute top-1/2 left-2.5 -translate-y-1/2 z-[2] w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-[0.8rem] bg-[rgba(15,23,42,0.75)] text-white backdrop-blur-sm transition-all duration-200 hover:bg-blue-500/85 hover:scale-105"
              >
                ❮
              </button>
              <button
                onClick={next}
                className="absolute top-1/2 right-2.5 -translate-y-1/2 z-[2] w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-[0.8rem] bg-[rgba(15,23,42,0.75)] text-white backdrop-blur-sm transition-all duration-200 hover:bg-blue-500/85 hover:scale-105"
              >
                ❯
              </button>
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-[2] flex gap-1.5">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={(e) => goTo(idx, e)}
                    className={`h-2 rounded-full cursor-pointer transition-all duration-[250ms] ${
                      idx === index ? "w-[18px] bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-white/[0.02] to-white/[0.05]" />
      )}

      {project.status === "in-progress" && <StatusBadge />}
    </div>
  );
};

export default CardImageCarousel;