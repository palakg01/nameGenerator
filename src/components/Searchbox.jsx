import React from "react";
import "./../index.css";

const Searchbox = ({ inputChangeProp }) => {
  return (
    <div className="search-container">
      <input
        onChange={(e) => inputChangeProp(e.target.value)}
        placeholder="Enter keywords"
        className="search-input"
      />
    </div>
  );
};

export default Searchbox;
