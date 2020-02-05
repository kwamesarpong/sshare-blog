import React from "react";

const ContributeCard = ({ num, title, text }) => {
  return (
    <div className="col-md-4">
      <div>
        <div className="step step__mb">{num}</div>
      </div>
      <div>
        <h3 className="py-2">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContributeCard;
