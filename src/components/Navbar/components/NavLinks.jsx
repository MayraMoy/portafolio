import { navLinks } from "../data/navLinks";

const NavLinks = ({ isMenuOpen, onLinkClick }) => (
  <div
    className={`flex items-center max-[850px]:absolute max-[850px]:top-[70px] max-[850px]:left-0 max-[850px]:w-full max-[850px]:bg-[rgba(18,20,29,0.95)] max-[850px]:backdrop-blur-[20px] max-[850px]:flex-col max-[850px]:py-8 max-[850px]:rounded-3xl max-[850px]:border max-[850px]:border-white/10 max-[850px]:shadow-[0_20px_40px_rgba(0,0,0,0.5)] max-[850px]:transition-[clip-path] max-[850px]:duration-400 max-[850px]:ease-in-out ${
      isMenuOpen
        ? "max-[850px]:[clip-path:circle(150%_at_100%_0)]"
        : "max-[850px]:[clip-path:circle(0%_at_100%_0)]"
    }`}
  >
    <ul className="flex list-none gap-9 m-0 p-0 max-[850px]:flex-col max-[850px]:items-center max-[850px]:gap-6">
      {navLinks.map(({ id, label, href }) => (
        <li key={id}>
          <a
            href={href}
            onClick={onLinkClick}
            className="text-slate-300 no-underline font-poppins text-sm font-medium py-1.5 relative transition-colors duration-300 hover:text-white focus-visible:text-white
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:transition-[width] after:duration-300
              hover:after:w-full"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default NavLinks;