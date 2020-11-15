import React from "react";
import "./style.css";

export function H1(props) {
  const { children, name } = props;
  return <h1 className={name}>{children}</h1>;
}
export function P(props) {
  const { children, name } = props;
  return <p className={name}>{children}</p>;
}
