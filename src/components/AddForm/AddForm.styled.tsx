import styled, { keyframes } from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MainWrapper = styled.div`
  width: 250px;
  margin: 0 auto;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  
`;

export const Title = styled.h2`
  font-weight: 16px;
  margin: 0 auto;
`;

export const StyledField = styled(Field)`
  margin: 0;
  width: 160px;;
  padding: 12px 42px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 20px;
  cursor: pointer;
  transition-property: border-color, outline-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 3px;
  &:focus {
    outline-color: #313f8f;
  }
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.01em;
  margin-bottom: 4px;
  margin-left: 8px;
`;

export const StyledMessage = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
  animation: ${fadeIn} 0.5s ease-in-out;
  margin: 0 auto;
`;

export const Text = styled.p`
  margin-top: 15px;
  font-family: ${(p) => p.theme.fonts.second};
  font-weight: 400px;
  font-size: 16px;
  text-align: center;
`;
export const Span = styled.span`
  margin-left: 5px;
`;

export const Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: blue;
`;

export const Button = styled.button`
  width: 145px;
  height: 45px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50px;
  box-shadow: 0px 20px 40px 0px rgba(66, 2, 29, 0.31);
  border: none;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.btnTxtColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 105.2%;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${(props) => props.theme.colors.btnHoverColor};
  }
`;