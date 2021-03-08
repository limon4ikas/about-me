import { FunctionComponent } from 'react';
import styled from 'styled-components';

const SectionName = styled.h2`
  font-weight: 300;
`;

interface HeadingProps {
  text: string;
}

const SectionHeading: FunctionComponent<HeadingProps> = ({ text }) => {
  return <SectionName>{text}</SectionName>;
};

export default SectionHeading;
