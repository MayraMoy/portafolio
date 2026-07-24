import { FaGraduationCap } from "react-icons/fa";
import { educationTimeline } from "../data/education";
import { certifications } from "../data/certifications";
import CertLink from "./CertLink";

const EducationSection = () => (
  <div className="mb-[4.5rem]">
    <h3 className="text-[clamp(1.2rem,2vw,1.45rem)] font-bold text-white mb-6 tracking-[-0.5px]">
      Educación y Formación
    </h3>

    <div className="bg-[rgba(18,20,29,0.6)] px-[2.2rem] py-8 rounded-[20px] border border-white/[0.08] backdrop-blur-md max-[768px]:p-6">
      <div className="flex items-center gap-3 mb-[1.8rem]">
        <FaGraduationCap className="text-[1.3rem] text-indigo-400" />
        <h4 className="text-white text-[1.1rem] font-bold m-0">Trayectoria Académica</h4>
      </div>

      <div className="border-l-2 border-indigo-400/25 pl-[1.8rem] ml-[0.6rem] flex flex-col gap-8">
        {educationTimeline.map((item) => (
          <div key={item.id} className="relative">
            <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full absolute -left-[2.15rem] top-1.5 shadow-[0_0_10px_#818cf8]" />

            <h5 className="text-white text-[1.05rem] font-semibold mb-1">{item.title}</h5>

            {item.institution && (
              <p className="text-slate-300 text-[0.88rem] mb-1.5">{item.institution}</p>
            )}
            {item.date && (
              <span className="inline-block text-slate-500 text-[0.8rem] font-medium">{item.date}</span>
            )}

            {item.id === "formacion-complementaria" && (
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <CertLink key={cert.id} href={cert.href} label={cert.label} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default EducationSection;