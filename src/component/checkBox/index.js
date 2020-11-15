import React from "react";
import "./style.css";

function Checkbox(props) {
  const { children, checked } = props;
  return (
    <div className="filed_check">
      <input type="checkbox" checked={checked} />
      <label>{children}</label>
    </div>
  );
}

export default Checkbox;
