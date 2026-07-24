const SliderDots = ({ total, activeIndex, onDotClick }) => (
  <div className="flex justify-center gap-2 mt-8">
    {Array.from({ length: total }).map((_, idx) => (
      <span
        key={idx}
        onClick={() => onDotClick(idx)}
        className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
          idx === activeIndex
            ? "w-6 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            : "w-2 bg-white/20"
        }`}
      />
    ))}
  </div>
);

export default SliderDots;