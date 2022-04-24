import React from "react";
import Icon from "../../component/conection";
import OR from "../../component/OR";
import Input from "../../component/Input";
import Checkbox from "../../component/checkBox";
import Button from "../../component/Button";
import { Link } from "react-router-dom";
import useForm from "../../component/useForm";

const infoFInput = [
  {
    type: "email",
    label: "Your Email",
    placehold: "Write your email",
    name: "email",
  },
  {
    type: "Password",
    label: "Choose a password",
    placehold: "•••••••••",
    name: "Password",
  },
];

const Form = () => {
  const { handleChange, values, handleSignIn, errors, error } = useForm();
  return (
    <div className="leftSign">
      <div className="header_Form">
        <h1>Join the game!</h1>
        <p>Go inside the best gamers social network!</p>
        <Icon />
      </div>
      <OR />
      <form onSubmit={handleSignIn}>
        {infoFInput.map((input) => {
          return (
            <Input
              labelChild={input.label}
              placeholder={input.placehold}
              type={input.type}
              handleChange={handleChange}
              value={values[input.name]}
              name={input.name}
              error={errors[input.name]}
            />
          );
        })}

        <Checkbox name="checkbox_1" checked>
          I agree to terms & conditions
        </Checkbox>
        <Checkbox name="checkbox_2">
          I’d like being informed about latest news and tips
        </Checkbox>

        <Button
          onClick={handleSignIn}
          style={{ backgroundColor: "blue", color: "#fff" }}
        >
          Sign up for free
        </Button>
      </form>
      <p className="paraQuestion">
        Do you already have an account? <Link to="/signup"> Register </Link>{" "}
      </p>
    </div>
  );
};

export default Form;
