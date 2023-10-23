import { StyledContainer } from './Container.styled';

interface Children {
  children: React.ReactNode;
}

export const Container: React.FC<Children> = props => {
  return <StyledContainer {...props} />;
};
