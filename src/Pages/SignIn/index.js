import React from "react";
import { LargeLogo } from "../../component/Logo";
import Quote from "../../component/Quote";
import Superscene from "../../img/Superscene.png";
import Form from "./Form";
import "./style.css";

export default function index() {
  return (
    <div className="signIn">
      <aside className="left_side">
        <LargeLogo />
        <Quote />
        <img src={Superscene} />
      </aside>
      <aside className="right_side">
        <Form />
      </aside>
    </div>
  );
}
