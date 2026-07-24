const SkillCategoryCard = ({ title, icon: Icon, skills }) => (
  <div className="bg-[rgba(18,20,29,0.6)] p-[1.8rem] rounded-[20px] border border-white/[0.08] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] max-[480px]:p-[1.2rem]">
    <div className="flex items-center gap-3 mb-[1.4rem]">
      {Icon && <Icon className="text-[1.2rem] text-indigo-400" />}
      <h4 className="text-white text-base font-bold m-0">{title}</h4>
    </div>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-white/[0.04] text-slate-300 border border-white/[0.08] rounded-lg px-3 py-1.5 text-[0.82rem] font-medium transition-all duration-[250ms] cursor-default hover:bg-white/[0.08] hover:text-white hover:border-white/20 hover:-translate-y-0.5"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCategoryCard;