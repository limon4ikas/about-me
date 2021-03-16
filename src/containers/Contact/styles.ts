import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80vh;
  margin-top: 8rem;

  background-color: #181827;

  @media ${device.mobileL} {
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
