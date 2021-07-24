import React from "react";
import "./../index.css";
import Namecard from "./Namecard";

const Results = ({ nameArr, display }) => {
  const suggestedNamesArray = nameArr.map((name) => {
    return <Namecard key={name} cardItem={name} />;
  });

  return display ? null : (
    <div className="result-container">{suggestedNamesArray}</div>
  );
};

export default Results;
