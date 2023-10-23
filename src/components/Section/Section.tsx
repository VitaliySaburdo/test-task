import { StyledSection } from './Section.styled';

interface Children {
  children: React.ReactNode;
}

export const Section: React.FC<Children> = props => {
  return <StyledSection {...props} />;
};
