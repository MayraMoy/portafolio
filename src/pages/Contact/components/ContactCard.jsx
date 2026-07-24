import React from 'react';

const ContactCard = ({ 
  title, 
  subtitle, 
  icon, 
  href, 
  onClick, 
  isCopied = false, 
  type = 'link' 
}) => {
  const baseClasses = `
    group relative flex flex-col items-center min-w-[280px] w-full max-w-[400px] md:w-auto 
    px-12 py-10 rounded-[20px] bg-[#0f141c] border transition-all duration-300 ease-out
    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-2
    hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.25)] hover:bg-[#131924]
  `;

  const borderClasses = isCopied 
    ? 'border-emerald-500/50 bg-emerald-500/10' 
    : 'border-white/10 hover:border-blue-400/40';

  const iconContainerClasses = `
    w-[72px] h-[72px] rounded-full flex items-center justify-center mb-6 
    transition-all duration-300 group-hover:scale-108
    ${isCopied 
      ? 'bg-emerald-500 text-white border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
      : 'bg-blue-600/15 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]'
    }
  `;

  const content = (
    <>
      <div className={iconContainerClasses}>
        {icon}
      </div>
      <div className="text-center">
        <h3 className="text-[1.3rem] font-bold text-white mb-1.5">{title}</h3>
        <p className={`text-sm font-medium transition-colors duration-300 ${isCopied ? 'text-emerald-400' : 'text-slate-400'}`}>
          {subtitle}
        </p>
      </div>
    </>
  );

  if (type === 'button') {
    return (
      <button 
        type="button" 
        onClick={onClick} 
        className={`${baseClasses} ${borderClasses} cursor-pointer outline-none`}
      >
        {content}
      </button>
    );
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className={`${baseClasses} ${borderClasses}`}
    >
      {content}
    </a>
  );
};

export default ContactCard;