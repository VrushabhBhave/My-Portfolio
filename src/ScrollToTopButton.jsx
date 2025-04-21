// ScrollToTopButton.jsx
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button data-aos="fade-up" className="cursor-pointer"
        onClick={scrollToTop}
        style={styles.button}
        title="Go to top"
      >
        <IoIosArrowUp className="text-3xl text-black"/>
      </button>
    )
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "30px",
    right: "20px",
    backgroundColor: "#00f2fe",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    padding: "9px 10px",
    fontSize: "20px",
    cursor: "pointer",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
};

export default ScrollToTopButton;
