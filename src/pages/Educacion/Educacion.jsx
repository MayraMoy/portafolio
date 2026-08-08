import { linkedinPosts } from "./data/linkedinPosts";
import EducationHeader from "./components/EducationHeader";
import LinkedInPostCard from "./components/LinkedInPostCard";
import { useCarousel } from "./hooks/useCarousel";
import SliderArrow from "../Project/components/SliderArrow";
import SliderDots from "../Project/components/SliderDots";

const Education = () => {
  const { visiblePosts, totalSlides, slideIndex, nextSlide, prevSlide, goToSlide } =
    useCarousel(linkedinPosts);
  return (
    <section
      id="publicaciones"
      className="relative overflow-hidden w-full box-border bg-[#0b0d12] text-white font-poppins px-[5%] py-[70px] md:py-[100px]"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <EducationHeader />

        <div className="relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {visiblePosts.map((post) => (
              <LinkedInPostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="absolute inset-x-0 top-1/2 flex items-center justify-between px-4 -translate-y-1/2 pointer-events-none">
            <div className="pointer-events-auto">
              <SliderArrow direction="left" onClick={prevSlide} />
            </div>
            <div className="pointer-events-auto">
              <SliderArrow direction="right" onClick={nextSlide} />
            </div>
          </div>
        </div>

        <SliderDots total={totalSlides} activeIndex={slideIndex} onDotClick={goToSlide} />
      </div>
    </section>
  );
};

export default Education;