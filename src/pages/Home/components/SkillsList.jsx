import { skills } from "../data/skills";

const SkillsList = () => (
  <div className="flex flex-col items-start gap-[0.8rem] pt-6 border-t border-white/[0.08] w-full">
    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
      Tecnologías principales:
    </span>
    <div className="flex flex-wrap gap-y-2 gap-x-[0.6rem]">
      {skills.map((skill) => (
        <span
          key={skill}
          className="py-[0.35rem] px-[0.8rem] bg-white/[0.04] border border-white/[0.08] rounded-lg text-[0.82rem] font-medium text-slate-300 transition-colors duration-200 hover:bg-white/[0.08] hover:border-white/[0.18] hover:text-white"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillsList;