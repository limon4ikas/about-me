import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.section`
  display: grid;
  grid-template-areas: 'hero hero form';
  align-items: start;
  justify-items: center;
  gap: 4rem;

  margin-top: 8rem;
  padding: 4rem !important;

  background-color: #181827;

  @media ${device.laptop} {
    padding: 0 2rem;
    grid-template-areas: 'hero' 'form';
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const Text = styled.p``;
