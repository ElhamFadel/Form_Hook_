import React from "react";
import "./style.css";

function Input(props) {
  const {
    value,
    type,
    name,
    placeholder,
    labelChild,
    handleChange,
    error,
  } = props;
  return (
    <div className="filedForm">
      <label htmlFor={name}>{labelChild}</label>
      <input
        className={error && "error"}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        value={value}
      />
      <span className="error_area">{error}</span>
    </div>
  );
}

export default Input;
