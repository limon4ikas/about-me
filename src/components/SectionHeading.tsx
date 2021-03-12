import { FunctionComponent } from 'react';
import styled from 'styled-components';

const H1 = styled.h1``;

const H2 = styled.h2`
  font-weight: 300;
`;

const H3 = styled.h3``;

const H4 = styled.h4``;

const H5 = styled.h5``;

const H6 = styled.h6``;

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  type: HeadingType;
}

const Heading: FunctionComponent<HeadingProps> = ({ children, type }) => {
  switch (type) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2>{children}</H2>;
    case 'h3':
      return <H3>{children}</H3>;
    case 'h4':
      return <H4>{children}</H4>;
    case 'h5':
      return <H5>{children}</H5>;
    case 'h6':
      return <H6>{children}</H6>;
    default:
      return <H1>{children}</H1>;
  }
};

export default Heading;
