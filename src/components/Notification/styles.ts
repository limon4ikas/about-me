import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ color }) => color};
  padding: 1rem;
  border-radius: 0.5rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const Heading = styled.h4``;

export const Text = styled.p``;
