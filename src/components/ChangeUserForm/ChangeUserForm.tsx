import { Formik } from "formik";
import { useAppDispatch } from "../../hooks/reduxHook";
import { AddSchema } from "../../helpers/ValidationSchemas";
import { putUser } from "../../redux/users/userOperations";
import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledMessage,
  Title,
  MainWrapper,
  Button,
} from "./ChangeUserForm.styled";
import { Icon } from "../Icon/Icon";

interface ChangeUserFormProps {
  currentUser: {
    id: string;
    name: string;
    email: string;
    birthday_date: string;
    phone_number: string;
    address: string;
  };
   closeModal: () => void;
}


export const ChangeUserForm: React.FC<ChangeUserFormProps> = ({
  currentUser, closeModal
}) => {
  const { id, name, email, birthday_date, phone_number, address } = currentUser;

  const dispatch = useAppDispatch();

  return (
    <>
      <MainWrapper>
        <Formik
          initialValues={{
            id,
            name: name || "",
            email: email || "",
            birthday_date: birthday_date || "",
            phone_number: phone_number || "",
            address: address || "",
          }}
          validationSchema={AddSchema}
          onSubmit={(
            { id, name, email, birthday_date, phone_number, address },
            { resetForm }
          ) => {
            dispatch(
              putUser({
                id,
                contact: { name, email, birthday_date, phone_number, address },
              })
            );
            resetForm();
            closeModal();
          }}
        >
          <StyledForm>
            <Title>Change user</Title>
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
                type="text"
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
