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
    /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    "Date must be in the format YYYY-MM-DD, Date must be before today"
  )
  .test("is-before-today", "Date must be before today", function (value) {
    return yup.date().max(new Date(), "Date must be before today").isValidSync(value);
  }),
  phone_number: yup.string().required("Birthday_date is required"),
  address: yup.string().required("Birthday date is required"),
});
