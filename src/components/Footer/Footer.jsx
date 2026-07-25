import FooterBrand from "./components/FooterBrand";
import FooterNav from "./components/FooterNav";
import SocialIcons from "./components/SocialIcons";
import FooterBottom from "./components/FooterBottom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080c14] border-t border-white/[0.08] px-[5%] pt-[60px] pb-[30px] font-poppins text-white max-[768px]:px-[8%] max-[768px]:py-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-[2fr_1fr_1fr] gap-12 pb-12 max-[768px]:grid-cols-1 max-[768px]:gap-[2.2rem] max-[768px]:text-left">
        <FooterBrand />
        <FooterNav />
        <SocialIcons />
      </div>

      <FooterBottom year={currentYear} />
    </footer>
  );
};

export default Footer;