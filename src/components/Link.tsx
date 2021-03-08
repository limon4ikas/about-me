import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    color: currentColor;
    display: flex;
    align-items: center;
  }
`;

interface LinkProps {
  goTo: string;
}

const Link: FunctionComponent<LinkProps> = ({ goTo, children }) => {
  return <StyledLink href={goTo}>{children}</StyledLink>;
};

export default Link;
