import React from 'react';

const ContactHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 md:mb-18">
      <h2 className="text-3xl md:text-4xl font-bold text-white m-0">
        {title}
      </h2>
      <div className="w-[50px] h-[3px] bg-blue-400 mx-auto mt-3 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.6)]" />
      <p className="mt-6 text-base text-slate-400 max-w-[600px] mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};

export default ContactHeader;