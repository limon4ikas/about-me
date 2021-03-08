import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: #b2e2ff;
  transition: all 0.2s;
  font-weight: 300;

  font-size: 1.6rem;

  &:hover {
    color: #fff;
  }
`;

const Button: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
