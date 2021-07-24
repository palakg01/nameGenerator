import React from "react";

const Namecard = ({ cardItem }) => {
  return (
    <div className="card">
      <p className="card-object">{cardItem}</p>
    </div>
  );
};

export default Namecard;
