import { useState } from "react";
import { Formik } from "formik";
// import { useAppDispatch } from "../../hooks/reduxHook";
// import { logIn } from "../../redux/auth/authOperations";
import { loginSchema } from "../../helpers/ValidationSchemas";
import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledMessage,
  Title,
} from "./LoginForm.styled";
import { Icon } from "../Icon/Icon";

interface LoginFormProps {
  closeModal: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ closeModal }) => {
  const [showPass, setShowPass] = useState(false);
  const [typePass, setTypePass] = useState("password");

  const handleIconClick = () => {
    setShowPass(!showPass);
    if (typePass === "password") {
      setTypePass("text");
    } else {
      setTypePass("password");
    }
  };

  // const dispatch = useAppDispatch();

  return (
    <>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={({ email, password }, { resetForm }) => {
            // dispatch(logIn({ values: { email, password } }));
            resetForm();
            closeModal();
          }}
        >
          <StyledForm>
            <Title>`Login`</Title>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="text"
                id="email"
                name="email"
                placeholder="Please enter your email"
              />
              <Icon id={"icon-mail"} />
            </div>
            <StyledMessage name="email" component="div" />

            <StyledLabel htmlFor="password">Password</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type={typePass}
                id="password"
                name="password"
                placeholder="Please enter your password"
              />
              {showPass ? (
                <Icon id="icon-show" onClick={handleIconClick} />
              ) : (
                <Icon id="icon-hide" onClick={handleIconClick} />
              )}
            </div>
            <StyledMessage name="password" component="div" />

            <button
              type="submit"
            >
              Login
            </button>
          </StyledForm>
        </Formik>
    </>
  );
};
