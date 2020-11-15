import React from "react";
import "./style.css";

function Button(props) {
  const { children, style, icon = false } = props;
  return (
    <div className="btn_wrap">
      <button className="btn" style={style}>
        {" "}
        {icon && icon}
        {children}
      </button>
    </div>
  );
}

export default Button;
