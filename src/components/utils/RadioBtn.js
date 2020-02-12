import React from "react";

const RadioBtn = ({ label, name, radioName }) => {
  return (
    <div class="custom-control custom-radio custom-control-inline">
      <input
        type="radio"
        id={`${name}`}
        name={`${radioName}`}
        class="custom-control-input"
      />
      <label class="custom-control-label" for={`${name}`}>
        {label}
      </label>
    </div>
  );
};

export default RadioBtn;
