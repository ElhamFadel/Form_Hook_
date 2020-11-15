import React from "react";
import { Logo } from "../../component/Logo";
import Quote, { Shape } from "../../component/Quote";
import Group from "../../img/Group.png";
import Form from "../SignUp/Form";
import "./style.css";

function SignUp() {
  return (
    <>
      <div className="signup_page">
        <aside className="split rightSide ">
          <img
            src={`${Group}`}
            style={{
              position: "absolute",
              zIndex: "-1",
              width: "50%",
              height: "-webkit-fill-available",
            }}
          />

          <Logo size="small" />
          <div className="wrapper_center">
            <Quote />
          </div>
        </aside>
        <aside className="split leftSide">
          <Form />
        </aside>
      </div>
    </>
  );
}
export default SignUp;
