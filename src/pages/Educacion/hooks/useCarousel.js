import { useState, useEffect, useMemo } from "react";

const BREAKPOINTS = {
  mobile: 768,
  desktop: 1024,
};

const getPostsPerSlide = (width) => {
  if (width < BREAKPOINTS.mobile) return 1;
  if (width < BREAKPOINTS.desktop) return 2;
  return 3;
};

export const useCarousel = (posts) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [postsPerSlide, setPostsPerSlide] = useState(
    typeof window !== "undefined" ? getPostsPerSlide(window.innerWidth) : 1
  );

  useEffect(() => {
    const handleResize = () => {
      const nextPostsPerSlide = getPostsPerSlide(window.innerWidth);
      setPostsPerSlide((prev) => {
        if (prev !== nextPostsPerSlide) {
          setSlideIndex(0);
          return nextPostsPerSlide;
        }
        return prev;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(1, Math.ceil(posts.length / postsPerSlide));

  const visiblePosts = useMemo(
    () =>
      posts.slice(
        slideIndex * postsPerSlide,
        slideIndex * postsPerSlide + postsPerSlide
      ),
    [posts, slideIndex, postsPerSlide]
  );

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index, e) => {
    if (e) e.stopPropagation();
    setSlideIndex(index);
  };

  return { visiblePosts, totalSlides, slideIndex, nextSlide, prevSlide, goToSlide };
};
