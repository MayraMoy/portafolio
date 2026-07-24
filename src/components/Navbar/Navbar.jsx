
import { useMenuToggle } from "./hooks/useMenuToggle";
import Brand from "./components/Brand";
import NavLinks from "./components/NavLinks";
import SocialLinks from "./components/SocialLinks";
import CvDownload from "./components/CvDownload";
import HamburgerButton from "./components/HamburgerButton";

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuToggle();

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] h-16 px-8 flex items-center justify-between bg-[rgba(18,20,29,0.8)] backdrop-blur-2xl border border-white/10 rounded-full z-[1000] box-border max-[850px]:w-[92%] max-[850px]:px-5 max-[850px]:h-[58px]">
      <Brand />

      <NavLinks isMenuOpen={isMenuOpen} onLinkClick={closeMenu} />

      <div className="flex items-center gap-[1.2rem]">
        <SocialLinks />
        <CvDownload />
        <HamburgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;