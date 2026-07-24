import { FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";

const ModalGallery = ({ images, currentIndex, title, onNext, onPrev, onDotClick, onZoom }) => {
  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-xl bg-[#0b0f17] border border-white/[0.08] aspect-[16/10] text-slate-400">
        Sin imágenes disponibles
      </div>
    );
  }

  return (
    <div className="md:sticky md:top-0">
      <div className="group relative rounded-xl overflow-hidden bg-[#0b0f17] border border-white/[0.08] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`${title} vista previa ${currentIndex + 1}`}
          className="w-full h-auto aspect-[16/10] object-cover block"
        />

        <button
          onClick={onZoom}
          title="Ver en tamaño completo"
          className="absolute top-3 right-3 z-[5] flex items-center gap-1.5 bg-[rgba(11,15,23,0.75)] backdrop-blur-sm text-white border border-white/[0.15] rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:bg-blue-600 hover:border-blue-500"
        >
          <FiMaximize2 /> Ampliar
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute top-1/2 left-2.5 -translate-y-1/2 z-[5] w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(15,20,28,0.65)] backdrop-blur-sm border border-white/[0.15] text-white opacity-80 transition-all duration-200 group-hover:opacity-100 hover:bg-blue-600 hover:border-blue-400 hover:scale-110"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={onNext}
              className="absolute top-1/2 right-2.5 -translate-y-1/2 z-[5] w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(15,20,28,0.65)] backdrop-blur-sm border border-white/[0.15] text-white opacity-80 transition-all duration-200 group-hover:opacity-100 hover:bg-blue-600 hover:border-blue-400 hover:scale-110"
            >
              <FiChevronRight />
            </button>

            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-[5] flex items-center gap-1.5 bg-[rgba(11,15,23,0.7)] backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/[0.08]">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  onClick={(e) => onDotClick(idx, e)}
                  className={`rounded-full cursor-pointer transition-all duration-200 ${
                    idx === currentIndex ? "w-3.5 h-1.5 bg-blue-400" : "w-1.5 h-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalGallery;