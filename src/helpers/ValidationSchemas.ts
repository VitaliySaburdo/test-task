import * as yup from "yup";

export const loginSchema = yup.object({
  name: yup.string().required("Name is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});


