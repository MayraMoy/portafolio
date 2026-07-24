import { useEffect } from "react";

export const useModalEscape = ({ isOpen, isZoomed, onCloseZoom, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isZoomed) onCloseZoom();
        else onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isZoomed, onCloseZoom, onClose]);
};