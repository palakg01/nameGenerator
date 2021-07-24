import React, { useState } from "react";

// TODO BACKTO TOP BTN CSS NOT WOKRING ADD CSS

const BacktoTop = () => {
  const [btnVisible, setBtnVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setBtnVisible(true);
    } else if (scrolled <= 300) {
      setBtnVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="btn-container">
      <button
        className="top-btn"
        onClick={scrollTop}
        style={{ display: btnVisible ? "inline" : "None" }}
      >
        ^
      </button>
    </div>
  );
};

export default BacktoTop;
