const FooterBottom = ({ year }) => (
  <div className="max-w-[1100px] mx-auto pt-7 border-t border-white/5 text-center max-[768px]:text-left max-[768px]:pt-6">
    <p className="text-slate-500 text-[0.85rem] m-0">
      © {year} Mayra Moyano. Desarrollado con React & CSS Modules.
    </p>
  </div>
);

export default FooterBottom;