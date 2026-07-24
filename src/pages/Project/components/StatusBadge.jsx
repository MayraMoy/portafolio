const StatusBadge = () => (
  <span className="absolute top-3 right-3 z-[5] inline-flex items-center gap-1.5 bg-[rgba(15,23,42,0.85)] backdrop-blur-sm text-amber-400 border border-amber-400/40 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] before:content-[''] before:w-1.5 before:h-1.5 before:bg-amber-400 before:rounded-full before:shadow-[0_0_6px_#fbbf24]">
    En Desarrollo
  </span>
);

export default StatusBadge;