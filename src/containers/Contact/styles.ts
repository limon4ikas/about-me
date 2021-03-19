import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.section`
  display: grid;
  grid-template-areas: 'hero form';
  grid-template-columns: 2fr 1fr;
  align-items: start;
  gap: 4rem;

  margin-top: 4rem;
  padding: 4rem !important;

  background-color: #181827;

  @media ${device.laptop} {
    padding: 0 2rem;
    grid-template-areas:
      'hero hero'
      'form form';
    justify-items: center;
  }

  @media ${device.mobileL} {
    padding: 2rem !important;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
