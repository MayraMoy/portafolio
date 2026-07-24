import { skillCategories } from "../data/skillCategories";
import SkillCategoryCard from "./SkillCategoryCard";

const SkillsSection = () => (
  <div className="mb-8">
    <h3 className="text-[clamp(1.2rem,2vw,1.45rem)] font-bold text-white mb-6 tracking-[-0.5px]">
      Stack Tecnológico
    </h3>

    <div className="grid grid-cols-3 gap-6 max-[1100px]:grid-cols-1">
      {skillCategories.map(({ id, title, Icon, skills }) => (
        <SkillCategoryCard key={id} title={title} Icon={Icon} skills={skills} />
      ))}
    </div>
  </div>
);

export default SkillsSection;