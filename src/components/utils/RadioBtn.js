import React from "react";

const RadioBtn = ({ label, name, radioName }) => {
  return (
    <div className="custom-control custom-radio custom-control-inline">
      <input
        type="radio"
        id={`${name}`}
        name={`${radioName}`}
        className="custom-control-input"
      />
      <label className="custom-control-label" htmlFor={`${name}`}>
        {label}
      </label>
    </div>
  );
};

export default RadioBtn;
