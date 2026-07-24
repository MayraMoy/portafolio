import { useState, useEffect, useMemo } from "react";

const DESKTOP_BREAKPOINT = 1024;

export const useProjectSlider = (projects) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [projectsPerSlide, setProjectsPerSlide] = useState(
    typeof window !== "undefined" && window.innerWidth < DESKTOP_BREAKPOINT ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      const isMobileOrTablet = window.innerWidth < DESKTOP_BREAKPOINT;
      setProjectsPerSlide((prev) => {
        const nextValue = isMobileOrTablet ? 1 : 2;
        if (prev !== nextValue) setSlideIndex(0);
        return nextValue;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visibleProjects = useMemo(
    () =>
      projects.slice(
        slideIndex * projectsPerSlide,
        slideIndex * projectsPerSlide + projectsPerSlide
      ),
    [projects, slideIndex, projectsPerSlide]
  );

  return { visibleProjects, totalSlides, slideIndex, setSlideIndex, nextSlide, prevSlide };
};