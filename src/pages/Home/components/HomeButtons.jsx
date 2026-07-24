const ArrowRightIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const HomeButtons = () => (
  <div className="flex gap-4 w-full max-w-[420px] mb-[2.2rem] max-[580px]:flex-col">
    <a
      href="#proyectos"
      className="flex-1 inline-flex items-center justify-center gap-[0.6rem] py-[0.9rem] px-[1.6rem] rounded-xl font-semibold text-sm text-white bg-indigo-500 border border-indigo-500 shadow-[0_8px_20px_-4px_rgba(99,102,241,0.4)] transition-all duration-[250ms] hover:bg-indigo-600 hover:border-indigo-600 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-4px_rgba(99,102,241,0.5)]"
    >
      Explorar Proyectos
      <ArrowRightIcon />
    </a>

    <a
      href="#contacto"
      className="flex-1 inline-flex items-center justify-center py-[0.9rem] px-[1.6rem] rounded-xl font-semibold text-sm text-white bg-white/[0.03] border border-white/[0.12] backdrop-blur transition-all duration-[250ms] hover:bg-white/[0.08] hover:border-white/[0.22] hover:-translate-y-0.5"
    >
      Contactarme
    </a>
  </div>
);

export default HomeButtons;