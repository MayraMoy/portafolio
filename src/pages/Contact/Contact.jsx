import React from 'react';
import ContactHeader from './components/ContactHeader';
import ContactCard from './components/ContactCard';
import { useCopyEmail } from './hooks/useCopyEmail';
import { contactHeaderData, socialLinks } from './data/contactData';

const Contact = () => {
  const { copied, copyEmail } = useCopyEmail();

  return (
    <section 
      id="contacto" 
      className="min-h-[80vh] flex items-center bg-[#0b0d12] text-white pt-20 pb-20 md:pt-40 md:pb-30 px-[5%] scroll-mt-[100px] font-sans"
    >
      <div className="max-w-[900px] mx-auto w-full">
        <ContactHeader 
          title={contactHeaderData.title}
          subtitle={contactHeaderData.subtitle}
        />

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 flex-wrap">
          {/* Tarjeta de Email dinámica mediante el custom Hook */}
          <ContactCard 
            type="button"
            title="Email"
            subtitle={copied ? '¡Email copiado!' : 'Copiar dirección de correo'}
            isCopied={copied}
            onClick={copyEmail}
            icon={
              copied ? (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              )
            }
          />

          {/* Tarjetas de Redes Sociales desde la data */}
          {socialLinks.map((link) => (
            <ContactCard 
              key={link.id}
              type={link.type}
              title={link.title}
              subtitle={link.subtitle}
              href={link.href}
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;