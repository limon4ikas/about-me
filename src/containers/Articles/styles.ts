import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.section`
  margin-top: 8rem;
  padding: 0 4rem;

  @media ${device.mobileL} {
    padding: 0 2rem;
  }
`;

export const ArticlesBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
