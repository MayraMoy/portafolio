import HomeButtons from "./HomeButtons";


const HomeContent = () => (
  <div className="flex flex-col items-start">
    <p className="text-[clamp(1.1rem,1.8vw,1.25rem)] font-medium text-indigo-400 mb-[0.4rem]">
      Hola, mi nombre es
    </p>
    <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-1.5px] mb-[1.2rem] text-white">
      Mayra Yazmin Moyano
    </h1>
    <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] leading-[1.7] text-slate-400 mb-[2.2rem] max-w-[52ch] [&_strong]:text-slate-50 [&_strong]:font-semibold">
      Desarrolladora <strong>Full Stack</strong> especializada en transformar
      procesos manuales y presencias digitales limitadas en{" "}
      <strong>productos web eficientes, escalables e intuitivos</strong>.
    </p>

    <HomeButtons />
  </div>
);

export default HomeContent;