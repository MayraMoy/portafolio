import { footerSocialLinks } from "../data/footerSocialLinks";

const SocialIcons = () => (
  <div className="max-[768px]:flex max-[768px]:flex-col max-[768px]:items-start">
    <h4 className="text-base font-semibold text-white mb-5">Conectemos</h4>
    <div className="flex gap-4 max-[768px]:w-full max-[768px]:justify-start">
      {footerSocialLinks.map(({ id, href, label, Icon }) => {
        const IconComponent = Icon;
        
        return (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full bg-[#0f141c] border border-white/[0.08] flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-[3px] hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            <IconComponent width={20} height={20} />
          </a>
        );
      })}
    </div>
  </div>
);

export default SocialIcons;