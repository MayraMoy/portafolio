import programacionImg from "../../assets/images/programacion.jpg";
import AboutHeader from "./components/AboutHeader";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-[#0b0d12] text-white font-poppins px-[5%] py-[100px] max-[768px]:px-[6%] max-[768px]:py-[70px] max-[480px]:px-[4%] max-[480px]:py-[50px]"
    >
      <div className="max-w-[1200px] mx-auto">
        <AboutHeader image={programacionImg} />
        <EducationSection />
        <SkillsSection />
      </div>
    </section>
  );
};

export default About;