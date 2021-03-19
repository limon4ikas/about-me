import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a<LinkProps>`
  &:link,
  &:visited {
    font-size: ${({ size }) => (size === 'big' ? '3rem' : '1.6rem')};
    text-decoration: none;
    color: currentColor;
    display: flex;
    align-items: center;
  }
`;

type Size = 'small' | 'big' | 'medium';

interface LinkProps {
  goTo?: string;
  size?: Size;
}

const Link: FunctionComponent<LinkProps> = ({ goTo, children, ...rest }) => {
  return (
    <StyledLink href={goTo} {...rest}>
      {children}
    </StyledLink>
  );
};

export default Link;
