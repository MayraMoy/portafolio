import { useState } from "react";
import { projectsData } from "./data/projectsData";
import { useProjectSlider } from "./hooks/useProjectSlider";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectsGrid from "./components/ProjectsGrid";
import SliderArrow from "./components/SliderArrow";
import SliderDots from "./components/SliderDots";
import ProjectModal from "./components/ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { visibleProjects, totalSlides, slideIndex, setSlideIndex, nextSlide, prevSlide } =
    useProjectSlider(projectsData);

  return (
    <section
      id="proyectos"
      className="relative overflow-hidden min-h-screen w-full box-border bg-[#0b0d12] text-white font-poppins px-[5%] pt-[110px] pb-[50px] md:pt-[100px] md:pb-[100px]"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <ProjectsHeader />

        <div className="relative flex items-center gap-5 w-full">
          <SliderArrow direction="left" onClick={prevSlide} />
          <ProjectsGrid projects={visibleProjects} onOpenDetails={setSelectedProject} />
          <SliderArrow direction="right" onClick={nextSlide} />
        </div>

        <SliderDots total={totalSlides} activeIndex={slideIndex} onDotClick={setSlideIndex} />
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;