import { FiExternalLink } from "react-icons/fi";

const CertLink = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 bg-white/[0.04] text-slate-300 border border-white/[0.08] rounded-lg px-3 py-1.5 text-[0.82rem] font-medium no-underline transition-all duration-[250ms] hover:bg-indigo-400/15 hover:text-white hover:border-indigo-400/40 hover:-translate-y-0.5"
  >
    {label}
    <FiExternalLink className="text-[0.75rem] opacity-70" />
  </a>
);

export default CertLink;