import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledDate = styled.time`
  color: #4e5169;
`;

interface DateProps {
  date: string;
}

const DateTime: FunctionComponent<DateProps> = ({ children, date }) => {
  return <StyledDate dateTime={date}>{children}</StyledDate>;
};

export default DateTime;
