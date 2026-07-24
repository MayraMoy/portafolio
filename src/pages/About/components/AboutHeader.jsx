const AboutHeader = ({ image }) => (
  <div className="grid grid-cols-[320px_1fr] gap-14 items-center mb-[4.5rem] max-[1100px]:grid-cols-[280px_1fr] max-[1100px]:gap-10 max-[768px]:grid-cols-1 max-[768px]:gap-8">
    <div className="group w-full aspect-[4/5] rounded-[20px] overflow-hidden border border-white/10 bg-[rgba(18,20,29,0.6)] shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-[768px]:max-w-[320px] max-[768px]:mx-auto">
      <img
        src={image}
        alt="Sobre mí - Programación"
        width="340"
        height="255"
        loading="lazy"
        className="w-full h-full object-cover block transition-transform duration-[400ms] group-hover:scale-[1.03]"
      />
    </div>

    <div className="flex flex-col">
      <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold text-white leading-[1.08] tracking-[-1.5px] mb-[0.8rem]">
        Sobre <span className="text-indigo-400">Mí</span>
      </h2>
      <div className="w-[50px] h-1 bg-indigo-500 rounded-sm mb-8" />

      <div className="flex flex-col gap-[1.1rem] text-[clamp(0.95rem,1.15vw,1.05rem)] leading-[1.8] text-slate-400 max-w-[62ch] [&_strong]:text-slate-50 [&_strong]:font-semibold">
        <p>
          Actualmente curso el tercer año de la <strong>Tecnicatura en Desarrollo de Software</strong> y cuento con el título de <strong>Programadora Profesional</strong> otorgado por el Ministerio de Educación, sumado a certificaciones en Inteligencia Artificial y Ciencia de Datos.
        </p>
        <p>
          Especializada en el desarrollo de aplicaciones web con <strong>React, Node.js y APIs REST</strong>. Me apasiona integrar IA y análisis de datos para automatizar procesos y optimizar la experiencia de usuario.
        </p>
        <p>
          Mi enfoque abarca desde el análisis de requerimientos hasta la arquitectura final, enfocándome en construir <strong>sistemas de gestión y software escalable</strong> que aporten valor real a negocios y usuarios.
        </p>
      </div>
    </div>
  </div>
);

export default AboutHeader;