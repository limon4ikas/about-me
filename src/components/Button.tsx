import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.button`
  border: none;
  outline: none;
`;

interface ButtonProps {
  text: string;
}

// const LearnMore = styled.button`
//   border: none;
//   outline: none;
//   text-decoration: none;
//   font-family: inherit;
//   background: transparent;
//   color: currentColor;
//   font-size: inherit;
//   display: inline-block;
//   cursor: pointer;

//   color: #b2e2ff;
//   transition: all 0.2s;

//   &:hover {
//     color: #fff;
//   }
// `;

const Button: FunctionComponent<ButtonProps> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Button;
