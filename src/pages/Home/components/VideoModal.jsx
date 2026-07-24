const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const VideoModal = ({ videoId, onClose }) => (
  <div
    className="fixed inset-0 bg-[rgba(5,7,10,0.9)] backdrop-blur-md flex items-center justify-center p-[4%] z-[2000]"
    onClick={onClose}
    role="presentation"
  >
    <div
      className="relative w-full max-w-[900px]"
      role="dialog"
      aria-modal="true"
      aria-label="Video de presentación"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute -top-[45px] right-0 w-9 h-9 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white hover:text-black"
        onClick={onClose}
        aria-label="Cerrar video"
      >
        <CloseIcon />
      </button>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/[0.15]">
        <iframe
          className="absolute inset-0 w-full h-full border-none"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Video de presentación de Mayra Yazmin Moyano"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

export default VideoModal;