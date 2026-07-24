import { MenuIcon, CloseIcon } from "../icons";

const HamburgerButton = ({ isMenuOpen, onClick }) => (
  <button
    className="hidden bg-transparent border-none cursor-pointer p-1.5 text-white z-[1001] max-[850px]:flex max-[850px]:items-center max-[850px]:justify-center"
    onClick={onClick}
    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
    aria-expanded={isMenuOpen}
  >
    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
  </button>
);

export default HamburgerButton;