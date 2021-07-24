import React from "react";
import "./../index.css";

const Header = ({ headerTitle, headerExpanded }) => {
  return (
    <div className="header-container">
      <img
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="img"
        className={`header-image 
      ${headerExpanded ? "header-image-expanded" : "header-image-contracted"}`}
      />
      <h1
        className={`header-title ${
          headerExpanded ? "header-title-expanded" : "header-title-contracted"
        }`}
      >
        {headerTitle}
      </h1>
    </div>
  );
};

export default Header;
