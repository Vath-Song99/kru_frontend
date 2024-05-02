import * as Yup from "yup";
const createClassSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
  classroom: Yup.string()
    .required()
    .min(3, "classromm should be at least 3 characters long"),
  subject: Yup.string()
    .required()
    .min(3, "classromm should be at least 3 characters long"),
});

export { createClassSchema };
