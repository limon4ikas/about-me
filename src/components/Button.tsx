import { FunctionComponent, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.button<ButtonProps>`
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  border: none;
  cursor: pointer;
  font-weight: 300;
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }

  ${({ stripped }) =>
    stripped &&
    css`
      background-color: transparent;
      color: #b2e2ff;
    `}

  ${({ primary }) =>
    primary &&
    css`
      background-color: #217aff;
      border-radius: 1rem;
      padding: 1rem 1.6rem;
      color: #fff;
      text-transform: uppercase;
      font-weight: 400;

      &:hover {
        background-color: #448fff;
      }
    `}
`;

interface ButtonProps {
  stripped?: boolean;
  primary?: boolean;
  type?: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  ...rest
}) => {
  return (
    <Container {...rest} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
