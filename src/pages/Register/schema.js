import * as Yup from "yup";

export const signupSchema = Yup.object({
  fName: Yup.string().required("First name is required."),
  lName: Yup.string().trim().required("Last name is required."),
  email: Yup.string()
    .trim()
    .required("Email is required.")
    .email("Please enter a valid email address."),

  phone: Yup.string()
    .trim()
    .required("Phone number is required.")
    .matches(
      /^09\d{2}\d{3}\d{3}$/,
      "Use a Syrian mobile number: 09XX XXX XXX.",
    ),
  password: Yup.string().required("Password is required."),
  confirmPassword: Yup.string()
    .required("Please confirm your password.")
    .oneOf([Yup.ref("password")], "Password and confirm password must match."),

  isAgreed: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms before continuing.",
  ),
});
