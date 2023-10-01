import React, { useEffect, useState } from "react";
import { FaCircleChevronUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollButton && (
        <FaCircleChevronUp className="top-btn " onClick={scrollToTop} />
      )}
    </div>
  );
};

export default ScrollToTop;
