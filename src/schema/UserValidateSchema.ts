import * as Yup from "yup";

const AuthValidateSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Username should be at least 3 characters long")
    .max(25, "Username should not exceed 25 characters")
    .required("Please enter a username."),
  lastname: Yup.string()
    .min(3, "Username should be at least 3 characters long")
    .max(25, "Username should not exceed 25 characters")
    .required("Please enter a username."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "Password must be at least 8 characters"),
});

export { AuthValidateSchema };
