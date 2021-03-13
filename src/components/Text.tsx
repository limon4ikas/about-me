import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p``;

const Paragraph: FunctionComponent = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
