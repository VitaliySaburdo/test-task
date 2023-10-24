import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CrossBtn = styled.button`
display: block;
border: none;
background: transparent;
cursor: pointer;
padding: 0;
margin-left: auto;
margin-bottom: 8px
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.overlayColor};
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

  padding: 44px 20px 16px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.witeBcgColor};
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in-out forwards;

  @media screen and (${(props) => props.theme.media.md}) {
    padding: 32px 32px 24px;
  }
`;
