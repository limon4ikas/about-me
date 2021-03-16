import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p``;

const Paragraph: FunctionComponent = ({ children, ...rest }) => {
  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
};

export default Paragraph;
