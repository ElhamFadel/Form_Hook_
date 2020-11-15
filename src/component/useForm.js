import React from "react";
import { useState } from "react";
import schema, { filedSchema } from "./ValidateInput";
import Greetting from "./../Pages/Greeting";
import { BrowserRouter as Redirect, useHistory } from "react-router-dom";
import axios from "axios";

const useForm = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    Password: "",
    repassword: "",
    checkbox: false,
  });
  const [errors, setError] = useState({});
  const [error, setGeneralError] = useState("");

  const { email, Password } = values;

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    schema
      .validate(values, { abortEarly: false })
      .then(() => {
        setError({ email: "", Password: "", repassword: "" });
        setGeneralError("");
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach(({ path, message }) => {
          newErrors[path] = message;
          setError({ errors: errors });
          setGeneralError("Check your Information");
        });

        setError({ ...newErrors });
      });

    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
          email,
          password: Password,
        })
        .then((res) => {
          history.push("/Greetting");
        })
        .catch((err) => {
          let error = err.response.data.error;
          if (error.includes("duplicate")) {
            error = "Email already exists";
          }
          setError({ error });
        });
    }
  };

  //handleChange
  const handleChange = (e) => {
    const { value, name, checked } = e.target;
    let _value = value;
    if (name === "checkbox") _value = checked;
    setValues({
      ...values,
      [name]: value,
    });
    stateValidate(name, _value);
  };
  //handleSignIn;
  const handleSignIn = (e) => {
    e.preventDefault();
    schema
      .validate(values, { abortEarly: false })
      .then(() => {
        setError({ email: "", Password: "" });
        setGeneralError("");
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach(({ path, message }) => {
          newErrors[path] = message;
          console.log(setError);
          setError({ errors: errors });
          setGeneralError("Check your Information");
        });

        setError({ ...newErrors });
      });
    if (!error) {
      console.log(email);
      console.log(Password);
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/login", {
          email,
          password: Password,
        })
        .then((res) => {
          history.push("/Greetting");
        })
        .catch((err) => {
          console.log(err.response.data.error);
          let error = err.response.data.error;
          if (error.includes("duplicate")) {
            error = "Email already exists";
          }
          setError({ error });
        });
    }
  };
  //stateValidate
  const stateValidate = (name, value) => {
    try {
      filedSchema(name, Password).validateSync(value);
      setError({ ...errors, [name]: "" });
    } catch (error) {
      setError((prevError) => {
        return { ...prevError, [name]: error.message };
      });
    }
  };
  return { handleChange, values, handleSubmit, errors, error, handleSignIn };
};
export default useForm;
