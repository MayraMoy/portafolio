import { FiX } from "react-icons/fi";

const Lightbox = ({ image, alt, onClose }) => (
  <div
    className="fixed inset-0 bg-black/[0.92] backdrop-blur-md flex justify-center items-center z-[2000] p-6"
    onClick={onClose}
  >
    <div className="relative flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
      <img
        src={image}
        alt={alt}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
      />
      <button
        onClick={onClose}
        aria-label="Cerrar vista ampliada"
        className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.15] border border-white/20 text-white transition-colors duration-200 hover:bg-red-500"
      >
        <FiX size={20} />
      </button>
    </div>
  </div>
);

export default Lightbox;