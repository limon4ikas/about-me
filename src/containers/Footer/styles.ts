import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.section`
  padding: 4rem;

  @media ${device.mobileL} {
    padding: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
