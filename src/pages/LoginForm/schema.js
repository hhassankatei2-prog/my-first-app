import * as yup from "yup";
export const signupSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Email is required."),

  password: yup.string().required("Password is required."),

  isAgreed: yup
    .boolean()
    .oneOf([true], "You must agree to the terms before continuing."),
});
