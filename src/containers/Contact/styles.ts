import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80vh;
  margin-top: 8rem;
  padding: 0 4rem;

  background-color: #181827;

  @media ${device.mobileL} {
    height: 40vh;
    padding: 0 2rem;
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
