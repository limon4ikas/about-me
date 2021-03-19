import styled from 'styled-components';
import { device } from '../styles/responsive';

export const Container = styled.div`
  position: relative;
  max-width: 120rem;
  font-size: 1.6rem;
  margin: 0 auto;

  background-color: #1f1f2f;

  & > *:not(:last-child) {
    padding: 0 4rem;
  }

  @media ${device.laptopL} {
    border-radius: 0;
  }

  @media ${device.mobileL} {
    font-size: 1.4rem;

    & > *:not(:last-child) {
      padding: 0 2rem;
    }
  }
`;
