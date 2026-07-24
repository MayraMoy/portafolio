import { socialLinks } from "../data/socialLinks";

const SocialLinks = () => {
  return (
    <div className="flex gap-[1.1rem] items-center">
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          title={item.title}
          className="flex items-center justify-center text-white opacity-85 no-underline transition-all duration-300 hover:opacity-100 hover:-translate-y-0.5 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:fill-current"
        >
          <item.Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;