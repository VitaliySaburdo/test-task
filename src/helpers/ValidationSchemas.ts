import * as yup from "yup";

export const loginSchema = yup.object({
  name: yup.string().required("Name is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

export const AddSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  birthday_date: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Birthday date must be in the format YYYY-MM-DD"
    )
    .required("Birthday date is required"),
  phone_number: yup.string().required("Birthday_date is required"),
  address: yup.string().required("Birthday date is required"),
});
