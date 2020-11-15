import React from "react";
import useForm from "../component/useForm";
function Greeting() {
  const { values } = useForm();
  return (
    <div>
      <h1>{values.email}</h1>
    </div>
  );
}

export default Greeting;
