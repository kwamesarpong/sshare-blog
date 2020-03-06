import React from "react";

const Input = ({ name, label, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={`${name}`}>{label}</label>
      <input type={type} className="form-control" id={`${name}`} />
    </div>
  );
};

export default Input;
