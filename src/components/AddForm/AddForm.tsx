import { Formik } from "formik";
import { useAppDispatch } from "../../hooks/reduxHook";
import { AddSchema } from "../../helpers/ValidationSchemas";
import { addUser } from "../../redux/users/userOperations";
import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledMessage,
  Title,
  MainWrapper,
  Button,
} from "./AddForm.styled";
import { Icon } from "../Icon/Icon";

interface AddFormProps {
  closeModal: () => void;
}

export const AddForm: React.FC<AddFormProps> = ({closeModal}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <MainWrapper>
        <Formik
          initialValues={{
            name: "",
            email: "",
            birthday_date: "",
            phone_number: "",
            address: "",
          }}
            validationSchema={AddSchema}
          onSubmit={(
            { name, email, birthday_date, phone_number, address },
            { resetForm }
          ) => {
            dispatch(
              addUser({ name, email, birthday_date, phone_number, address })
            );
            resetForm();
            closeModal();
          }}
        >
          <StyledForm>
            <Title>Add user Form</Title>
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

            <StyledLabel htmlFor="email">Email</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your email"
              />
              <Icon id={"icon-mail"} />
            </div>
            <StyledMessage name="email" component="div" />
            <StyledLabel htmlFor="birthday_date">Birthday date</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="date"
                id="birthday_date"
                name="birthday_date"
                placeholder="Please enter your Birthday date"
              />
              <Icon id={"icon-gift"} />
            </div>
            <StyledMessage name="birthday_date" component="div" />
            <StyledLabel htmlFor="phone_number">Phone number</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="tel"
                id="phone_number"
                name="phone_number"
                placeholder="Please enter your phone number"
              />
              <Icon id={"icon-phone"} />
            </div>
            <StyledMessage name="phone_number" component="div" />
            <StyledLabel htmlFor="address">Address</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="text"
                id="address"
                name="address"
                placeholder="Please enter your address"
              />
               <Icon id={"icon-address"} />
            </div>
            <StyledMessage name="address" component="div" />
            <Button type="submit">Submit</Button>
          </StyledForm>
        </Formik>
      </MainWrapper>
    </>
  );
};
