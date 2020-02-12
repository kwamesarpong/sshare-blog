import React from "react";

const Input = ({ name, label, type }) => {
  return (
    <div class="form-group">
      <label for={`${name}`}>{label}</label>
      <input type={type} class="form-control" id={`${name}`} />
    </div>
  );
};

export default Input;
