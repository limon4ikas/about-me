import { FunctionComponent } from 'react';
import styled from 'styled-components';

const SectionName = styled.h2`
  font-weight: 300;
`;

const SectionHeading: FunctionComponent = ({ children }) => {
  return <SectionName>{children}</SectionName>;
};

export default SectionHeading;
