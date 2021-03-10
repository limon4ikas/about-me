import styled from 'styled-components';
import { device } from '../styles/responsive';

export const Container = styled.div`
  position: relative;
  max-width: 140rem;
  margin: 0 auto;
  font-size: 1.6rem;

  background-color: #1f1f2f;

  @media ${device.laptopL} {
    border-radius: 0;
    margin: 0;
  }

  @media ${device.mobileL} {
    font-size: 1.4rem;
  }
`;
