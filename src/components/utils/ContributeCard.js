import React from "react";

const ContributeCard = ({ num, title, text }) => {
  return (
    <div className="col-md-4">
      <div className="">
        <div className="step step__mb">{num}</div>
      </div>
      <div className="">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContributeCard;
