import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Container = styled.section`
  margin-top: 8rem;
  padding: 0 4rem;

  @media ${device.mobileL} {
    padding: 0;
  }
`;

export const SectionNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media ${device.mobileL} {
    padding: 0 2rem;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

  gap: 2rem;
`;
