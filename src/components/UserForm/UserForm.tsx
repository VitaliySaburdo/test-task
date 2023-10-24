// import { useState } from "react";
import { Formik } from "formik";
import { v4 as uuidv4 } from 'uuid';
// import { useAppDispatch } from "../../hooks/reduxHook";
// import { logIn } from "../../redux/auth/authOperations";
// import { loginSchema } from "../../helpers/ValidationSchemas";

import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledMessage,
  Title,
  MainWrapper,
  Button,
} from "./UserForm.styled";
import { Icon } from "../Icon/Icon";
// import {UserProps} from '../App/App.types'


export const UserForm: React.FC = () => {
  //   const dispatch = useAppDispatch();

  return (
    <>
      <MainWrapper>
        <Formik
          initialValues={{
            id: uuidv4(),
            name: "",
            email: "",
            birthday_date: "",
            phone_number: "",
            address: "",
          }}
          //   validationSchema={loginSchema}
          onSubmit={(
            {id, name, email, birthday_date, phone_number, address },
            { resetForm }
          ) => {
          console.log({id, name, email, birthday_date, phone_number, address })
            // dispatch(logIn({ values: { username: name, password: password } }));
            resetForm();
          }}
        >
          <StyledForm>
            <Title>User Form</Title>
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

            <StyledLabel htmlFor="email">Password</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your email"
              />
            </div>
            <StyledMessage name="birthday_date" component="div" />
            <StyledLabel htmlFor="birthday_date">Birthday date</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="text"
                id="birthday_date"
                name="birthday_date"
                placeholder="Please enter your Birthday date"
              />
            </div>
            <StyledMessage name="phone_number" component="div" />
            <StyledLabel htmlFor="phone_number">Phone number</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="tel"
                id="phone_number"
                name="phone_number"
                placeholder="Please enter your phone number"
              />
            </div>
            <StyledMessage name="address" component="div" />
            <StyledLabel htmlFor="address">Address</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="text"
                id="address"
                name="address"
                placeholder="Please enter your address"
              />
            </div>
            <StyledMessage name="email" component="div" />
            <Button type="submit">Submit</Button>
          </StyledForm>
        </Formik>
      </MainWrapper>
    </>
  );
};
