import { useState } from "react";
import { Formik } from "formik";
import { useAppDispatch } from "../../hooks/reduxHook";
import { logIn } from "../../redux/auth/authOperations";
import { loginSchema } from "../../helpers/ValidationSchemas";
import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledMessage,
  Title,
  MainWrapper,
  Button,
} from "./LoginForm.styled";
import { Icon } from "../Icon/Icon";



export const LoginForm: React.FC = () => {
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

  const dispatch = useAppDispatch();

  return (
    <>
      <MainWrapper>
        <Formik
          initialValues={{
            name: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={({ name, password }, { resetForm }) => {
            dispatch(logIn({ values: { name, password } }));
            console.log({ name, password });
            resetForm();
          }}
        >
          <StyledForm>
            <Title>Login</Title>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="text"
                id="name"
                name="name"
                placeholder="Please enter your name"
              />
              <Icon id={"icon-user"} />
            </div>
            <StyledMessage name="name" component="div" />

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

            <Button
              type="submit"
            >
              Login
            </Button>
          </StyledForm>
        </Formik>
        </MainWrapper>
    </>
  );
};
