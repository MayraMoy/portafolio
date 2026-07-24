import { footerNavLinks } from "../data/footerNavLinks";

const FooterNav = () => (
  <div className="max-[768px]:flex max-[768px]:flex-col max-[768px]:items-start">
    <h4 className="text-base font-semibold text-white mb-5">Navegación</h4>
    <ul className="list-none p-0 m-0 flex flex-col gap-[0.6rem]">
      {footerNavLinks.map(({ id, label, href }) => (
        <li key={id}>
          <a
            href={href}
            className="text-slate-400 no-underline text-sm transition-colors duration-300 hover:text-blue-400"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterNav;