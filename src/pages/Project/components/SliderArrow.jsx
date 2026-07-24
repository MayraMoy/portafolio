const SliderArrow = ({ direction, onClick }) => (
  <button
    className="hidden md:flex w-10 h-10 rounded-full items-center justify-center flex-shrink-0 bg-white/[0.03] border border-white/[0.08] text-white backdrop-blur transition-all duration-200 cursor-pointer hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400"
    onClick={onClick}
    aria-label={direction === "left" ? "Proyectos anteriores" : "Proyectos siguientes"}
  >
    {direction === "left" ? "❮" : "❯"}
  </button>
);

export default SliderArrow;