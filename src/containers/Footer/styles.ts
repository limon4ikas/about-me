import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem;

  @media only screen and (max-width: 31.25em) {
    padding: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
