import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (${props => props.theme.media.lg}) {
    width: 1280px;
    padding: 0;
  }
`;
