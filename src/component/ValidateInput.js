import * as yup from "yup";
const schema = yup.object().shape({
  email: yup.string().email().typeError("Your name Please : ").required(),
  Password: yup.string().required(),
  repassword: yup.string().required(),
});

export function filedSchema(filed, matchValue) {
  console.log("Elham Fadel");
  switch (filed) {
    case "email":
      return yup.string().email("Invalid email").required();
    case "Password":
      return yup.string().required().min(6).max(128);
    case "repassword":
      return yup.string().oneOf([matchValue], "Passwords must match");

    default:
      throw new Error("invalid filedName");
  }
}
export default schema;
