import { useState } from "react";

export const useCarousel = (length) => {
  const [index, setIndex] = useState(0);

  const next = (e) => {
    if (e) e.stopPropagation();
    setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prev = (e) => {
    if (e) e.stopPropagation();
    setIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goTo = (idx, e) => {
    if (e) e.stopPropagation();
    setIndex(idx);
  };

  return { index, next, prev, goTo };
};