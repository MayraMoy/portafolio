const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const VideoCard = ({ image, onOpen }) => (
  <div className="w-full flex justify-center">
    <div className="relative w-full max-w-[480px] rounded-[20px] bg-[rgba(18,20,29,0.6)] border border-white/10 p-2.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <button
        className="group relative w-full aspect-[16/10] rounded-[14px] overflow-hidden cursor-pointer border-none p-0 block bg-black"
        onClick={onOpen}
        aria-label="Ver video de presentación"
      >
        <img
          src={image}
          alt="Presentación de Mayra Yazmin Moyano"
          className="w-full h-full object-cover block transition-transform duration-[400ms] opacity-90 group-hover:scale-[1.03] group-hover:opacity-100"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 text-[#0b0d12] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_25px_rgba(129,140,248,0.6)]">
          <PlayIcon />
        </div>
      </button>

      <div className="pt-[0.8rem] px-[0.4rem] pb-[0.2rem] flex items-center justify-between">
        <div>
          <h4 className="m-0 text-sm font-semibold text-white">
            Video de Presentación
          </h4>
          <p className="m-0 text-[0.78rem] text-slate-400">
            1 min • Conóceme en acción
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default VideoCard;